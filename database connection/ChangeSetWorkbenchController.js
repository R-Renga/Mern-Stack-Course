const { parser } = require('stream-json');
const { streamValues } = require('stream-json/streamers/StreamValues');
const { Writable,Readable } = require('stream');
const getAllInstanceList = async (req,res) => {
  try {
    const {orgId} = req.query;
    const dataBase = await getDataBase(orgId,"InstancesList");
    const instanceSearchQuery = {
      'q': `type:instance AND isActive:true`,
      include_docs: true
    }
    const searchResponce = await dataBase.search('instanceSearch','instanceSearch',instanceSearchQuery);
    const instanceList = searchResponce.rows.map(row => row.doc)
    logger.debug('InstanceCreationController.js : getAllInstanceList => Fetch for instanceList completed successfully');
    res.status(200).json({
      success: true,
      message: "instanceList fetched successfully",
      data: instanceList
    });
  } catch (error) {
    logger.debug('InstanceCreationController.js : getAllInstanceList => Fetch for instanceList completed with error',error);
    res.status(500).json({
      success: false,
      message: "Error fetching documents",
      error: error.message
    });
  }
}
const pushChangesetRequestWithChangelog = async (req, res) => {
 try {
  let buffer = [];
  const pipeline = req.pipe(parser()).pipe(streamValues());
  const writeChangesetdetails = new Writable({
    objectMode: true,
    write({value}, _encoding,callBack) {
      buffer.push(value);
      callBack();
    }
  });
  pipeline.pipe(writeChangesetdetails);
  writeChangesetdetails.on('finish', async () => {
    const orgId = buffer[0].orgId;
    if (!orgId){
      return res.status(400).json({ 
        error: 'orgId missing'
      });
    }
    const dataBase = await getDataBase(orgId);
    const insertResult = await dataBase.insert(buffer[0]);
    logger.debug('InstanceCreationController.js : pushChangesetRequestWithChangelog => Inserting changeset completed successfully');
    res.status(200).json({
      success:true,
      message:"changesetdata updated successfully",
      data:insertResult
    });
  });
 } catch (error) {
  logger.debug('InstanceCreationController.js : pushChangesetRequestWithChangelog => Inserting changeset details completed with error',error);
  res.status(500).json({
    success:false,
    message:"Error pushing changeset data",
    error:error.message
  })
 }
}
const getAllInboundChangesetRequest = async (req,res) =>{
  try {
    const {orgId} = req.query
    const dataBase =  await getDataBase(orgId)
    const viewResponce = await dataBase.view('changestView','withoutChangelog',{include_docs: true});
    const changesetResponce = viewResponce.rows
    logger.debug('InstanceCreationController.js : getAllInboundChangesetRequest => Fetch for inboundchangeset completed successfully');
    res.status(200).json({
      success:true,
      message:"Inboundchangeset fetch successfully completed",
      data:changesetResponce
    })
  } catch (error) {
    logger.debug('InstanceCreationController.js : getAllInboundChangesetRequest => Fetch for inboundchangeset completed with error',error);
    res.status(500).json({
      success:false,
      message:"Error getting Inboundchangeset data",
      error:error.message
    })
  }
}
const getChangelogForChangeset = async(req,res) =>{
  try {
    const {orgId, _id} = req.query
    const dataBase = await getDataBase(orgId)
    const changelog = await dataBase.get(_id);
    const changeHistory = changelog?.data?.dependentChangeHistoryDetails || [];
    res.setHeader('Content-Type', 'application/json');
    res.write('{"success":true,"message":"Streaming dependentChangeHistoryDetails","data":[');
    let first = true;
    const readChangeHistoty = Readable.from(changeHistory);
    readChangeHistoty.on('data', item => {
      const chunk = JSON.stringify(item);
      if (!first) {
        res.write(',');
      }
      res.write(chunk);
      first = false;
    });
    readChangeHistoty.on('end', () => {
      res.write(']}');
      res.end();
    });
    readChangeHistoty.on('error', error => {
      if (!res.headersSent) {
        res.status(500).json({ 
          success: false, 
          message: 'Error streaming data', 
          error: error.message 
        });
      } else {
        res.end();
      }
    });
  } catch (error) {
    logger.debug('InstanceCreationController.js : getChangelogForChangeset => Fetch for changelog completed with error');
    res.status(500).json({
      success:false,
      message:"Error getting changelog data",
      error:error.message
    })
  }
}
const updateInboundChangesetStatus = async(req,res) =>{
  try {
    const {orgId,_id,status} = req.body
    const dataBase =  await getDataBase(orgId)
    if(!_id && status){
      res.status(500).json({
        message:"Id or status missing"
      })
    }
    const getChangesetDocument = await dataBase.get(_id)
    getChangesetDocument.data.status = status
    const updatedStatus = await dataBase.insert(getChangesetDocument)
    logger.debug('InstanceCreationController.js : updateInboundChangesetStatus => Updating Status completed successfully');
    res.status(200).json({
      success:true,
      message:"Status successfully updated",
      responce: updatedStatus
    })
  } catch (error) {
    logger.debug('InstanceCreationController.js : updateInboundChangesetStatus => Updating Status completed with error',error);
    res.status(500).json({
      success:false,
      message:"Error updating Status",
      error:error.message
    })
  }
}
function getDataBase(orgId,option){
  try{
    const getOrg = config.org.find((org) => JSON.parse(org.org_id) === JSON.parse(orgId));
    const dataBase = option ? getOrg.configDb : getOrg.changesetDb;
    return dataBase;
  } catch(error){
    logger.debug('InstanceCreationController.js : getDataBase => Error getting database',error);
  }
}

module.exports = {
  getAllInstanceList:getAllInstanceList,
  pushChangesetRequestWithChangelog:pushChangesetRequestWithChangelog,
  getAllInboundChangesetRequest:getAllInboundChangesetRequest,
  getChangelogForChangeset:getChangelogForChangeset,
  updateInboundChangesetStatus:updateInboundChangesetStatus
};