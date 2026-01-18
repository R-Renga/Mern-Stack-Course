let https = require('https')
let http = require('http');
let objectId = 16395 //Enter the  object id need to be deleted
let databaseName = 'pfm_3_transaction_error';//Enter the Database name  need to be deleted
// let limit =10;
let count = 0;
let getnanoCouchConnection = (couchUrl, requestDefaults) => {
    return new Promise((resolve, reject) => {
        try {
            let options = {
                rejectUnauthorized: false
            }
            let isHttps = couchUrl.startsWith("https");
            let agentOption = isHttps ? new https.Agent(options) : new http.Agent(options)
            if (requestDefaults) {
                requestDefaults['agent'] = agentOption
            } else {
                requestDefaults = {
                    agent: agentOption
                }
            }
            const nano = require('nano')({
                url: couchUrl,
                requestDefaults
            });
            resolve(nano);
        } catch (e) {
            reject(e)
        }
    })
}
let instance = 'Dev_QA'; //Enter the instance name need to be deleted
// Couch ip of the respective instance
switch (instance) {
    case 'Dev_QA':
        couchurl = ('https://qadatauser:qadatauser57.250@192.168.57.250:5984');
        break;
    // case 'Inhouse_Dev':
    //     couchurl = ('https://couch_sandinhou:Yauk7ZHA8m@https://172.16.200.106:5984');
    //     break;
    // case 'Inhouse_Prod':
    //     couchurl = ('https://couch_prodinhou:pkmMeLMPkLUMDchS@https://172.16.200.109:5984');
    //     break;
}
getnanoCouchConnection(couchurl, {
    "timeout": 100000
}).then((couchConnection) => {
    if (couchConnection) {
        console.log('--------couch connected--------');
        async function recursivedfetch() {
            var records = [];
            
            let query = {
                "q": `type:pfm494934`,
                "include_docs": true,
                "limit": 5000
            }
            await couchConnection.use(databaseName).search(`transaction_error_search`, `transaction_error_search`,query).then(values => { 
            
            });
            
            //check all the records are deleted or not 
            


        }
        recursivedfetch();
    }
})