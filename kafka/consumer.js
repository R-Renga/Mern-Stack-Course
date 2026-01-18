const {kafka} = require('kafka');

const consumer = kafka.consumer({groupId:"test-group"});

async function run() {
    await consumer.connect()
    await consumer.subscribe({topic:"topic name"})

    await consumer.run({
        eachMessage:(topic,partition,message)=>{
            console.log(message);
            
        }
    })
}

run();