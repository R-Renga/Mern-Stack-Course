import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { Sequelize } from 'sequelize';




const app = express();

dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());

app.use(cors({
    origin:"www.exapmle.com",
    methods:'GET,POST,DELETE,UPDATE'
}));

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:'postgres'
});


app.get('/data', async (req, res) => {
    try {
        const recordQuery = `SELECT * FROM AUG26UNIVERSITY`;
        const [results, metadata] = await sequelize.query(recordQuery);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/dataById/:universityValue', async (req, res) => {
    try {
        const {universityValue} = req.params;
        const recordQuery = `SELECT * FROM AUG26UNIVERSITY WHERE universitycode = $1;`;
        const [results, metadata] = await sequelize.query(recordQuery, {
            bind: [universityValue]// Properly bind the universityValue as a parameter
        });
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/insert', async (req, res) => {
    try {
        const { universitycode, universityname } = req.body; // Destructure request body
        const insertQuery = `INSERT INTO AUG26UNIVERSITY (universitycode, universityname) VALUES ($1, $2) RETURNING *;`;
        
        const [result] = await sequelize.query(insertQuery, {
            bind: [universitycode, universityname]
            // type: sequelize.QueryTypes.INSERT
        });
        
        res.status(200).json(result); // Use .json to send the response
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.put('/update',async (req,res)=>{
    try {
        const records = req.body;
        const {universitycode,universityname} = records;
        const updateQuery = `update AUG26UNIVERSITY set universityname = $2 where universitycode = $1;` 
        const [result] = await sequelize.query(updateQuery,{bind:[universitycode,universityname]});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});

app.delete('/delete',async (req,res)=>{
    try {
        const records = req.body;
        const {universitycode} = records;
        const deleteQuery = `Delete from AUG26UNIVERSITY where universitycode = $1;`
        const result = await sequelize.query(deleteQuery,{bind:[universitycode]});
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})




const port = process.env.PORT1 || 2000
export function oracle(params) {
    app.listen(port,()=>{
        console.log("port is running on 2001");
    })
}
