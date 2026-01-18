const INSTALL_PATH = __dirname;
const packagesNodeModulesPath = INSTALL_PATH + '/appbuilder/node_modules';
// const packagesNodeModulesPath = INSTALL_PATH + '\\app_v17_builder\\node_modules';
require.main.paths.push(packagesNodeModulesPath);
const fs = require('fs').promises;
const http = require('http');
const https = require('https');
const oracleDb = require('oracledb');
const crypto = require('crypto');
const Sequelize = require('sequelize');

const log4js = require("log4js");

log4js.configure({
  appenders: {
    data: {
      type: "file",
      filename: `commonViewDoc.log`,
      timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
      maxLogSize: 10024000,
      backups: 100,
      mode: 0o755
    }
  },
  categories: {
    default: {
      appenders: ['data'],
      level: 'info'
    },
    data: {
      appenders: ['data'],
      level: 'debug'
    }
  }
});
const logger = log4js.getLogger("data");
let setOrgId;

const AES_KEY_SIZE = 256;
const blockSize = 16;
const viewDocIds = ["_design/CompositeUniqueViewDoc", "_design/UniqueFieldViewDoc", "_design/masterdetailview", "_design/masterdetail_createdby_docid_view", "_design/masterdetail_createdby_view", "_design/type_createdby_docid_view"];
let globalViewJson = {};

var backupfilePath = '';

async function readFile(path) {
  try {
    log(`********************** Initialize Read for Config JSON ${path} **********************`);

    const configJSON = JSON.parse(await fs.readFile(path, 'utf8'));

    log(`********************** Config JSON Read Successfully **********************`);
    return configJSON;
  } catch (error) {
    log(`********************** Error in reading Config JSON **********************`);
    log(error);
    console.error(`********************** Error in reading Config JSON **********************`,error);
    throw error;
  }
}

async function getNanoCouchConnection(couchConfig, requestDefaults) {
  return new Promise((resolve, reject) => {
    try {
      let options = {
        rejectUnauthorized: false
      }
      let isHttps = couchConfig['url'].startsWith("https");
      let agentOption = isHttps ? new https.Agent(options) : new http.Agent(options)
      if (requestDefaults) {
        requestDefaults['agent'] = agentOption
      } else {
        requestDefaults = {
          agent: agentOption
        }
      }
      requestDefaults['headers'] = {
        Authorization: "Basic " + Buffer.from(`${couchConfig['userName']}:${couchConfig['password']}`).toString('base64')
      }
      const nano = require('nano')({
        url: couchConfig['url'],
        requestDefaults
      });
      log(`********************** Org: ${setOrgId} - CouchDb Connection Success **********************`);
      resolve(nano);
    } catch (error) {
      log(`********************** Org: ${setOrgId} - CouchDb Connection Failed ********************** ${error}`);
      console.error(`********************** Org: ${setOrgId} - CouchDb Connection Failed **********************`,error);
      reject(error)
    }
  })
}

async function makeCouchConnection(info, couchConfig, dbName) {
  try {
    log(`********************** Org: ${setOrgId} - Start Couch Connection - ${info.destinationDB} **********************`);

    const nano = await getNanoCouchConnection(couchConfig);
    const db = nano.db.use(dbName);

    log(`********************** Org: ${setOrgId} - Couch Connection Successful For - ${info.destinationDB} **********************`);
    return db;
  } catch (error) {
    log(`********************** Org: ${setOrgId} - Error in Couch Connection For - ${info.destinationDB} **********************`);
    log(error);
    console.error(`********************** Org: ${setOrgId} - Error in Couch Connection For - ${info.destinationDB} **********************`,error);
    throw error;
  }
}

async function writeFile(info, folderName, filename, content) {
  try {
    if (!await fs.stat(folderName).catch(() => false)) {
      await fs.mkdir(folderName, {
        recursive: true
      });
    }
    await fs.writeFile(`${folderName}/${filename}`, JSON.stringify(content));
    log(`********************** Org: ${setOrgId} - File created successfully - ${folderName}/${filename} - ${info.destinationDB} **********************`);
  } catch (err) {
    log(`********************** Org: ${setOrgId} - Error in file creation - ${folderName}/${filename} - ${info.destinationDB} **********************`);
    log(err);
    console.error(`********************** Org: ${setOrgId} - Error in file creation - ${folderName}/${filename} - ${info.destinationDB} **********************`,err);
  }
}

async function insertDocsInCouchDB(nanoInst, data) {
  try {
    return await nanoInst.bulk({
      docs: data
    });
  } catch (error) {
    log(`Error inserting documents into CouchDB: ${error}`);
    throw error;
  }
}

async function removeOldDesignsFromCouchDB(nano, designdocs) {
  try {
    const updatedDesigDocs = designdocs.map(doc => {
      doc['_deleted'] = true;
      return doc;
    })
    return await insertDocsInCouchDB(nano, updatedDesigDocs);
  } catch (error) {
    log(`Error removing documents into CouchDB: ${error}`);
    throw error;
  }

}


function log(msg) {
  logger.debug(msg);
// console.log(msg);
  return;
}

function decrypt(stringToDecrypt, privateKey) {
  try {
    privateKey = privateKey + privateKey
    const concatenatedBuffer = Buffer.from(stringToDecrypt, 'base64')
    const encryptedDatas = concatenatedBuffer.subarray(0, concatenatedBuffer.length - blockSize)
    const authTags = concatenatedBuffer.subarray(concatenatedBuffer.length - blockSize)
    const iv = Buffer.from(privateKey, 'utf8')
    const key = crypto.pbkdf2Sync(privateKey + privateKey, privateKey + privateKey, 65536, AES_KEY_SIZE / 8, 'sha256')
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv)
    decipher.setAuthTag(authTags)
    const decryptedData = Buffer.concat([decipher.update(encryptedDatas), decipher.final()])
    return decryptedData.toString('utf8')
  } catch (error) {
    log(`********************** Error in Decryption **********************`);
    log(error);
    console.error(`********************** Error in Decryption **********************`,error);
    throw error;
  }
}

async function getCouchDetails(dbDetails, license) {
  try {
    const decryptedpwd = decrypt(dbDetails.password, license);
    const queryString = `SELECT SERVICE_NAME, HOST_NAME, PORT, USER_NAME, PASSWORD, ORG_ID, B.CODE 
                                FROM PFM_ORG_DATA_STORE_INFO A, 
                                PFM_LICENSES B, 
                                COR_ORGANIZATIONS C
                                WHERE A.ORG_ID = C.ORGANIZATION_ID AND DB_TYPE = 'COUCH' AND A.ORG_ID = B.ORGANIZATION_ID`;

    const metaConnection = await (async (dbType) => {
      let connection;
      try {
        if (dbType.toUpperCase() === 'POSTGRES') {
          const postgres = `postgres://${dbDetails.user}:${decryptedpwd}@${dbDetails.host}:${dbDetails.port}/${dbDetails.database}`;
          connection = await new Sequelize(postgres);
          return (await connection.query(queryString))[0];
        } else if (dbType.toUpperCase() === 'ORACLE') {
          const oracle = {
            user: dbDetails.user,
            password: decryptedpwd,
            connectString: `${dbDetails.host}:${dbDetails.port}/${dbDetails.database}`
          };
          connection = await oracleDb.getConnection(oracle);
          const rowsData = (await connection.execute(queryString, [], {
            outFormat: oracleDb.OBJECT
          })).rows || [];
          return rowsData.map(item => Object.fromEntries(Object.entries(item).map(([key, value]) => [key.toLowerCase(), value])));
        }
      } catch (error) {
        log(`**********************  - Error in get meta connection **********************`);
        log(error);
        console.error(`********************** - Error in get meta connection **********************`,error);
        throw error;
      } finally {
        if (connection) {
          connection.close();
        }
      }
    })(dbDetails.db_type);

    const couchInfo = metaConnection.map(({
      org_id,
      service_name,
      user_name,
      host_name,
      password,
      port,
      code
    }) => {
      const couchPassword = decrypt(password, code);
      return {
        orgId: org_id,
        url: `${service_name}://${user_name}:${couchPassword}@${host_name}:${port}`,
        userName: user_name,
        password: couchPassword
      };
    });

    return couchInfo;
  } catch (error) {
    log(`**********************  ${setOrgId} - Error in get meta connection **********************`);
    log(error);
    console.error(`**********************  ${setOrgId} - Error in get meta connection **********************`,error);
    throw error;
  }
}



async function init() {
  try {
    log(`********************** - Start Time * ${new Date().getTime()} **********************`);

    const {
      metaDbInfo,
      node_info
    } = await readFile(INSTALL_PATH + '/appbuilder/setup/config.json');

    // const {
    //   metaDbInfo,
    //   node_info
    // } = await readFile(INSTALL_PATH + '/app_v17_builder/setup/config.json');
    console.log(node_info.license);
    const couchDetails = await getCouchDetails(metaDbInfo, node_info.license);
    log(JSON.stringify(couchDetails));
    console.log(couchDetails);
    for (const couchInfo of couchDetails) {
      globalViewJson = {};
      const orgId = couchInfo.orgId;
      setOrgId = orgId;
      backupfilePath = INSTALL_PATH + '/view_Docs/';
      try {
        console.log(`********************** Process Started against org: ${orgId} **********************`);
        log(`********************** Process started against org: ${orgId} **********************`);
        console.log(`********************** View document updation process started against org: ${orgId} **********************`);
        
        const info = {
          orgId,
          destinationDB: 'mobile_platform'
        };
        couchInfo['db'] = `pfm_${orgId}_mobile_platform`;
        const nanoDb = await makeCouchConnection(info, couchInfo, couchInfo['db']);
        let oldViewDocs = await fetchViewDocs(info, nanoDb);
        const mapFunction = {};
        oldViewDocs = oldViewDocs.filter(doc => {
          if (doc) {
              if(doc['views'][doc._id.split('/')[1]]['map'])
              mapFunction[doc._id] = doc['views'][doc._id.split('/')[1]]['map'];
              return doc;
          } else {
              console.log('Some of the view docs are not found');
          }
        });
        const commonViewJSON = await initializeViewDocMigration(mapFunction);
        const pfmViewDocs = await makePlatformViewDesignDocument(commonViewJSON);
        log(`********************** Org: ${setOrgId} - view doc backup Started - ${info.destinationDB} **********************`);
        const viewDocs = oldViewDocs.concat(pfmViewDocs);

        await Promise.all(Object.values(viewDocs).map(async (view)=>{
          if(view){
            log(`********************** Org: ${setOrgId} - Going to write ---> ${view['_id']} **********************`);
            await writeFile(info, backupfilePath, `${view['_id'].split('_design/')[1]}_${orgId}.json`, view);
          }
        }))
        log(`********************** Org: ${setOrgId} - view doc backup Completed - ${info.destinationDB} **********************`);
        let result = await insertDocsInCouchDB(nanoDb, pfmViewDocs);
        console.log(`********************** Org: ${setOrgId} - Inserting view documents into CouchDB - ${info.destinationDB} **********************`);
        log(`********************** Org: ${setOrgId} - Inserting view documents into CouchDB - ${info.destinationDB} And Result - ${JSON.stringify(result)}**********************`);
        log(`********************** Org: ${setOrgId} - Old Design Document Remove Process Start **********************`);
        await removeOldDesignsFromCouchDB(nanoDb, oldViewDocs);
        log(`********************** Org: ${setOrgId} - Old Design Document Remove Process End **********************`);
        log(`********************** View document updation completed against orgId: ${orgId} **********************`);
        log(`********************** Process Completed against orgId: ${orgId} **********************`);
        log(`#######################################################################################`);
        console.log(`********************** Process Completed against orgId: ${orgId} **********************`);
        console.log(`#######################################################################################`);
      } catch (error) {
        // Log the error and continue with the next iteration
        log(`********************** Error process completed against orgId: ${orgId} **********************`);
        log(error)
        log(`#######################################################################################`);
        console.error(`********************** Error process completed against orgId: ${orgId} **********************`,error);
        console.log(`#######################################################################################`);
        continue;
      }
    }

    log(`********************** Org: ${setOrgId} - End Time * ${new Date()} **********************  ${setOrgId} - `);

  } catch (error) {
    log(`********************** Org: ${setOrgId} - Error in initial process **********************`);
    log(error);
    console.error(`********************** Org: ${setOrgId} - Error in initial process **********************`,error);
    throw error;
  }
}

async function fetchViewDocs(info, nanoDbInst) {
  log(`********************** Org: ${setOrgId} - Fetch Initiate **********************`);
  return nanoDbInst.fetch({
      keys: viewDocIds,
      include_docs: true
  }).then(viewDocs => {
      if (!viewDocs['rows'] || viewDocs['rows'].length <= 0) {
          log(`********************** Org:  ${setOrgId} - jar Error Start **********************`);
          log('Timestamp', new Date().getTime())
          log('Error in fetching views from couchDb');
          log('response', JSON.stringify(viewDocs));
          log(`********************** Org: ${setOrgId} - jar Error END **********************`);
          return []
      } else {
          return viewDocs = viewDocs['rows'].map(rec => rec.doc);
      }
  }).catch((error) => {
      log(`********************** Org: ${setOrgId} - Fetch Design Docs **********************`);
      log(error);
      throw error;
  })
}

async function initializeViewDocMigration(mapFunctions) {
  try {
      log(`********************** Org: ${setOrgId} - View document Migration Started **********************`);
      await extractDataFromMasterDetailView(mapFunctions['_design/masterdetailview']);
      await extractDataFromUniqueValidationView(mapFunctions['_design/UniqueFieldViewDoc']);
      await extractDataFromCompositeUniqueView(mapFunctions['_design/CompositeUniqueViewDoc']);
      log(`********************** Org: ${setOrgId} - View document Migration Completed **********************`);
      return Promise.resolve(globalViewJson);
  } catch (e) {
      log(`********************** Org: ${setOrgId} - ERROR - View document Migration **********************`);
      log(e);
      return Promise.reject();
  }
}

function extractDataFromMasterDetailView(mapFuc) {
  try {
    log(`********************** Org: ${setOrgId} - Master Detail View migration Started **********************`);
    const startIndex = mapFuc.indexOf(' var input = ') + 13;
    const endIndex = mapFuc.indexOf(`var type = doc['data']['type']`) - 2;
    const jsonString = mapFuc.slice(startIndex, endIndex).replace(/'/g, '"');
    const relationObjectJSON = JSON.parse(jsonString);
  
    Object.entries(relationObjectJSON).forEach(([primaryType, value]) => {
        globalViewJson[primaryType] = { "master": value };
    });
    log(`********************** Org: ${setOrgId} - Master Detail View migration Completed **********************`);
    return Promise.resolve();
  } catch (error) {
    log(`Error in extractDataFromMasterDetailView method : ${error}`);
    throw error;
  }
}

function extractDataFromUniqueValidationView(mapFuc) {
  try {
    log(`********************** Org: ${setOrgId} - Unique Validation View migration Started **********************`);
    let mapFuncStr = mapFuc.toString().trim().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '')
    while (mapFuncStr.includes('emit(')) {
        const [objectSet, lastIndex] = extractObjectInfo(mapFuncStr);
        const objectId = objectSet.substring(1, objectSet.indexOf(`')`));
        const fieldInfo = extractFieldInfoUniqueValidation(objectId, objectSet);
        if(!globalViewJson[objectId]){
            globalViewJson[objectId] = {};
        }
        globalViewJson[objectId]['UFV'] = fieldInfo;
        mapFuncStr = mapFuncStr.substring(lastIndex);
    }
    log(`********************** Org: ${setOrgId} - Unique Validation View migration Completed **********************`);
    return Promise.resolve();
  } catch (error) {
    log(`Error in extractDataFromUniqueValidationView method : ${error}`);
    throw error;
  }
}

function extractObjectInfo(mapFuncStr) {
  try {
    const keyword = `if(doc['data']['type']==`;
    const startIndex = mapFuncStr.indexOf(keyword) + keyword.length;
    const nextIndex = findNextIndex(mapFuncStr, keyword, startIndex);
    if (nextIndex < 0) {
        return [mapFuncStr.substring(startIndex, mapFuncStr.length), mapFuncStr.length];
    }
    return [mapFuncStr.substring(startIndex, nextIndex), nextIndex - keyword.length];
  } catch (error) {
    log(`Error in extractObjectInfo method : ${error}`);
    throw error;
  }
}

function extractFieldInfoUniqueValidation(objectId, objectSet) {
  try {
    let fieldsInfo = {};
    let objectStr = objectSet;
    while (objectStr.includes('emit(')) {
        const startIndex = objectStr.indexOf('emit(');
        const endIndex = objectStr.indexOf(');') + 2;
        const fieldStr = objectStr.substring(startIndex, endIndex);
        let fieldName = fieldStr.substring(fieldStr.indexOf(`doc['data']['type']+'`) + 21, fieldStr.indexOf(`'+doc['data']['`))
        if (!fieldStr.includes(`emit(doc['data']['type']`)) {
            const dependentFieldName = fieldStr.substring(fieldStr.indexOf(`emit(doc['data']['`) + 18, fieldStr.indexOf(`']+doc['data']['type']+'`))
            fieldName = fieldName + "$" + dependentFieldName
        }
        if (fieldStr.includes('toLowerCase()')) {
            fieldsInfo['str'] ? fieldsInfo['str'].push(fieldName) : fieldsInfo['str'] = [fieldName];
        } else {
            fieldsInfo['num'] ? fieldsInfo['num'].push(fieldName) : fieldsInfo['num'] = [fieldName];
        }
        objectStr = objectStr.substring(endIndex);
    }
    return fieldsInfo;
  } catch (error) {
    log(`Error in extractFieldInfoUniqueValidation method : ${error}`);
    throw error;
  }
}

function extractDataFromCompositeUniqueView(mapFuc) {
  try {
    log(`********************** Org: ${setOrgId} - Composite Unique Validation View migration Started **********************`);
    let compositeStr = mapFuc.toString().trim().replace(/(\r\n|\n|\r)/gm, "").replace(/\s+/g, '');
    while (compositeStr.includes('emit(')) {
        const [objectSet, lastIndex] = extractObjectInfo(compositeStr);
        const objectId = objectSet.substring(1, objectSet.indexOf(`')`));
        let fieldInfo = extractFieldInfoCompositeUnique(objectId, objectSet);
        if (!globalViewJson[objectId]) {
            globalViewJson[objectId] = {};
        }
        globalViewJson[objectId]['CUV'] = fieldInfo
        compositeStr = compositeStr.substring(lastIndex);
    }
    log(`********************** Org: ${setOrgId} - Composite Unique Validation View migration Completed **********************`);
    return Promise.resolve()
  } catch (error) {
    log(`Error in extractDataFromCompositeUniqueView method : ${error}`);
    throw error;
  }
}

function extractFieldInfoCompositeUnique(objectId, objectSet) {
  try {
    let objectStr = objectSet;
    let fieldsInfo = {};
    while (objectStr.includes('emit(')) {
        const startIndex = objectStr.indexOf('emit(');
        const endIndex = objectStr.indexOf(');') + 2;
        const fieldStr = objectStr.substring(startIndex, endIndex);
        const objectIdWithoutPfm = objectId.split('pfm')[1];
        const compositeId = fieldStr.substring(fieldStr.indexOf(`pfm_csp_${objectIdWithoutPfm}_`) + (objectIdWithoutPfm.length + 9), fieldStr.indexOf(`_ck`))
        if (!fieldsInfo[compositeId]) {
            fieldsInfo[compositeId] = [];
        } else {
            console.log('Warning composite id already exist')
        }
        const fieldsArray = fieldStr.split(`+'|'+`);
        fieldsArray.shift();
            fieldsArray.forEach((field,index)=>{
                let fieldName = '';
                if (field.includes('.toLowerCase()')) {
                    fieldName = field.substring(field.indexOf(`(doc['data']['`) + 14, field.indexOf(`']&&doc['data'][`))
                    fieldName = fieldName + "$S"
                    fieldsInfo[compositeId].push(fieldName)
                } else {
                    fieldName = field.substring(field.indexOf(`doc['data']['`) + 13, field.lastIndexOf(`']`))
                    fieldName = fieldName + "$N"
                    fieldsInfo[compositeId].push(fieldName)
    
                }
            })
        objectStr = objectStr.substring(endIndex);
    }
    return fieldsInfo;
  }catch (error) {
    log(`Error in extractFieldInfoCompositeUnique method : ${error}`);
    throw error;
  }
}

function findNextIndex(str, keyword, startIndex) {
  try {
    const index = str.indexOf(keyword, startIndex);
    if (index !== -1) {
        return index + keyword.length;
    } else {
        return -1; // Keyword not found
    }
  } catch (error) {
    log(`Error in findNextIndex method : ${error}`);
    throw error;
  }
}

function makePlatformViewDesignDocument(commonViewJSON){
  log(`********************** Org: ${setOrgId} - Platform view doc generation Started**********************`);
  const mapFuc = `
  function (doc) {
    function emitForUniqueValidation(uniqueFieldArray, fieldType, type) {
        for (var i = 0; i < uniqueFieldArray.length; i++) {
            const fieldKey = uniqueFieldArray[i];
            const [fieldName, dependentFieldName] = fieldKey.split('$');
            const emitValue = fieldType == "str" ? (doc['data'][fieldName] ? doc['data'][fieldName].toLowerCase() : null) : doc['data'][fieldName];
            const emitKey = dependentFieldName ? (doc['data'][dependentFieldName] + type + fieldName + emitValue) : (type + fieldKey + emitValue);
            emit(emitKey, null);
        }
    };
    function emitForCompositeUnique(type, compositeConfig) {
        const objectId = type.split('pfm')[1];
        const compositeIds = Object.keys(compositeConfig);
        for (var j = 0; j < compositeIds.length; j++) {
            const compositeInfo = compositeConfig[compositeIds[j]];
            const compositeKeyArray = [type + "pfm_csp_" + objectId + "_" + compositeIds[j] + "_ck"];
            compositeUpdate(compositeInfo, compositeKeyArray);
            const compositeKey = compositeKeyArray.join('|');
            emit(compositeKey, null);
        }
    };
    function compositeUpdate(compositeInfo, compositeKeyArray){
        if(compositeInfo && compositeInfo.length>0){
            for(var k = 0; k < compositeInfo.length; k++){
                const fieldName = compositeInfo[k].split('$')[0];
                const fieldType = compositeInfo[k].split('$')[1];
                if(fieldType == 'S'){
                    compositeKeyArray.push(doc['data'][fieldName] && doc['data'][fieldName].toLowerCase().trim() || "null")
                }
                if(fieldType == 'N'){
                    compositeKeyArray.push(doc['data'][fieldName] || "null")
                }
                
            }
        }
    };
    function initiateIndexingProcess() {
        if (doc['data'] && doc['data']['type']) {
            const type = doc['data']['type'];
            const createdBy = doc['data']['createdby'];
            emit(type + createdBy + doc['_id'], null);
            const viewConfig = globalViewJson[type];
            if (!viewConfig) {
                return;
            }
            if (viewConfig['master']) {
                const master = doc['data'][viewConfig['master']];
                emit(type + createdBy + master);
                emit(type + master + createdBy + doc['_id']);
                emit(type + master);
            }
            if (viewConfig['CUV']) {
                emitForCompositeUnique(type, viewConfig['CUV']);
            }
            if (viewConfig['UFV']) {
                const uniqInfo = Object.keys(viewConfig['UFV']);
                for (var m = 0; m < uniqInfo.length; m++) {
                    const fieldType = uniqInfo[m];
                    emitForUniqueValidation(viewConfig['UFV'][fieldType], fieldType, type);
                }
            }
        }
    };
    const globalViewJson = ${JSON.stringify(commonViewJSON)};
    initiateIndexingProcess();
  }
  `;
  const pfmViewDocIds = ["pfmObjects_view","pfmObjects_view_Temp"];
  const viewDocs = [];
  for(let viewId of pfmViewDocIds){
    const pfmObjectsViewDoc = {
        "_id": "_design/"+viewId,
        "views": {
            "pfmObjects_view": {
            "map":mapFuc.trim().replace(/\"/g, '"')
          }
        },
        "language": "javascript"
      };
      viewDocs.push(pfmObjectsViewDoc);
  }
  log(`********************** Org: ${setOrgId} - Platform view doc generation Completed **********************`);
  return Promise.resolve(viewDocs)  
}

init();