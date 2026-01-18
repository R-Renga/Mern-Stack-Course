const {MongoClient} = require('mongodb');
const SimpleCrypto = require('simple-crypto-js').default;
const keys = require('./Authentication/globalKeys.json');
const simpleCrypto = new SimpleCrypto(keys.secretKey);

async function getMongoAPIService (domain, userName, password, cluster, serviceInfo) {
    return new Promise((resolve, reject) => {
        try {
            let decryptPassword = simpleCrypto.decrypt(password);
            let mongoServiceUrl = domain + '://' + userName + ':' + decryptPassword + "@" + cluster + "." + serviceInfo;
            mongoServiceUrl = `${mongoServiceUrl}`
            resolve(mongoServiceUrl)
        } catch (err) {
            console.log('Error while Forming MongoService Url',err);
            reject(err);
        }
    })
}

const ConnectDb = async () => {
    try {
        // mongodb+srv://adminhari:Thalapathy1@clusterhari.okn8gmb.mongodb.net/?retryWrites=true&w=majority
        const mongoApi = await getMongoAPIService('mongodb+srv', 'adminhari', keys.password, 'clusterhari', 'okn8gmb.mongodb.net/?retryWrites=true&w=majority');
        // console.log('mongoApi',mongoApi);
        const mongoConnection = new MongoClient(mongoApi);
        await mongoConnection.connect();
        const db = mongoConnection.db('mongodb_Practice');
        const collection = db.collection('Users');
        return collection;
        
    } catch (error) {
        console.log('Error While Connecting the Mongo DB Collections',error); 
        throw error;
    }
}

module.exports = ConnectDb;