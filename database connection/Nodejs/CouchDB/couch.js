import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import cors from "cors";

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

