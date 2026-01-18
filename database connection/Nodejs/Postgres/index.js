import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
const {Pool} = pkg;
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.text())

app.use(cors({
    origin:"https://example.com",
    methods:'GET,POST,DELETE,UPDATE'
}))

app.use(helmet());


const pool = new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password:process.env.DB_PASSWORD
})


app.get('/data',async (req,res)=>{
    try {
        const record = await pool.query('select * from AUG26UNIVERSITY')
        res.status(200).json(record['rows'])
        console.log(record['rows']);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.get('/dataById/:universityId',async(req,res)=>{
    try {
        const {universityId} = req.params
        const fetchQuery = `select * from AUG26UNIVERSITY where universitycode = $1;`
        const result = await pool.query(fetchQuery,[universityId])
        res.status(201).json(result['rows'])
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.get('/dataByQuery',async (req,res)=>{
    try {
        const {universityCode} = req.query;
        const fetchQuery = `select * from AUG26UNIVERSITY where universitycode = $1;`
        const result = await pool.query(fetchQuery,[universityCode])
        res.status(201).json(result['rows'])
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.post('/dataByCode',async(req,res)=>{
    try {
        const {universitycode} = req.body;
        const fetchQuery = `select * from AUG26UNIVERSITY where universitycode = $1;`
        const result = await pool.query(fetchQuery,[universitycode])
        res.status(201).json(result['rows'])
        console.log(result['rows']);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})



app.post('/data', async (req, res) => {
    const {
        universitycode,
        universityname,
        universityaddress,
        university_number,
        university_location,
        university_phone,
        university_date,
        university_status,
        university_alternate_phone,
        university_time,
        university_uuid,
        university_lookup,
        unversity_email
    } = req.body;

    const insertQuery = `
        INSERT INTO AUG26UNIVERSITY (
            universitycode,
            universityname,
            universityaddress,
            university_number,
            university_location,
            university_phone,
            university_date,
            university_status,
            university_alternate_phone,
            university_time,
            university_uuid,
            university_lookup,
            unversity_email
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *;
    `;

    try {
        const result = await pool.query(insertQuery, [
            universitycode,
            universityname,
            universityaddress,
            university_number,
            university_location,
            university_phone,
            university_date,
            university_status,
            university_alternate_phone,
            university_time,
            university_uuid,
            university_lookup,
            unversity_email
        ]);
        res.status(201).json({ message: 'Record inserted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});



app.post("/insertRecord", async  (req, res) => {
    try {
        const records = req.body;
        const insertQuery = `
        insert into AUG26UNIVERSITY (universitycode,universityname) values ($1,$2);`
        for(const record of records){
            const {universitycode,universityname} = record
            const result = await pool.query(insertQuery, [universitycode,universityname]) 
            console.log(result['rows']);
        }     
        res.status(201).json({ message: 'Record inserted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }


});


app.put('/update',async (req,res)=>{
    try {
        const {universitycode,universityaddress} = req.body;
        const query = `update AUG26UNIVERSITY set  universityaddress = $2 where universitycode = $1`
        const result = await pool.query(query,[universitycode,universityaddress]);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});


app.patch('/updatePatch',async (req,res)=>{
    try {
        const {universitycode,universityaddress} = req.body;
        const query = `update AUG26UNIVERSITY set universityaddress = $2 where universitycode = $1;`
        const result = await pool.query(query,[universitycode,universityaddress]);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});


app.delete('/deleteRecords',async (req,res)=>{
    try {
        const {universitycode} = req.body;
        const query = `delete from AUG26UNIVERSITY where universitycode = $1;`
        const result = await pool.query(query,[universitycode]);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})







const port = process.env.PORT || 2000
export function postgres() {
    app.listen(port, () => {
        console.log(`Node server is running on port ${port} with PostgreSQL integration.`);
    });
}


