require('dotenv').config();
import express from 'express';
import { Response } from 'node-fetch';
import {ExpressConfig, HttpCode} from './configs';
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


const port = ExpressConfig.Port || 3000;
const http = HttpCode;

app.get("/", async (req,res) => {
    res.status(http.Success).send("Index Here");
    console.log("Index Requested!");
})
 

console.log(`App is running on http://localhost:${port}.`);
app.listen(port);
