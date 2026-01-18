const {Pool} = require('pg')


const pool = new Pool({
    user:"cs_dev",
    host:"192.168.58.192",
    password:"abc@123",
    port:6578,
    database:"d_cspd",
    max:100
})

async function query() {
    let client;
    client = await pool.connect();
    const res = await client.query("select * from university")
}

(async()=>{
    await query();
    await pool.end()
})

