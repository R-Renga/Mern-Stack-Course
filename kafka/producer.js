const {kafka} = require('kafka')

const kafka = new kafka({
    clientId : "my-app",
    brokers:["ip"]
})

const producer = kafka.producer();

async function test(){
    await producer.connect();
    await producer.send({
        topic:"test-topic",
        messages:[{
            value:"hi hello",
            age:25
        }]
    })
    console.log("message produced");
    await producer.disconnect();
}

test()