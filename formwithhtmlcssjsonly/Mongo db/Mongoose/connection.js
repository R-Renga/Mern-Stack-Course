const mongoose = require('mongoose');
const SimpleCrypto = require('simple-crypto-js').default;
const keys = require('../Auth/globalKeys.json');
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

const connectionMongo = async () => {
    try {
        const mongoApi = await getMongoAPIService('mongodb+srv', 'adminhari', keys.password, 'clusterhari', 'okn8gmb.mongodb.net/?retryWrites=true&w=majority');
        console.log('mongoapi',mongoApi);
        mongoose.connect(mongoApi, {useNewUrlParser: true, useUnifiedTopology : true}).then ((mongoConnection)=>{
            // const db = mongoConnection.db('mongodb_Practice');
            // const collection = db.collection('Users');
            // console.log('colll',collection);
            // return collection;
            console.log('Mongoconnection established succesfully',mongoConnection);
        }).catch ((err) => {
            console.log('Error while connecting the mongodbserver',err);
        })
    } catch (err) {
        console.log('Error in the mongoose connection',err);
    }

}

module.exports = connectionMongo;