import express, { json, response } from 'express';
import {ExpressConfig, HttpCode} from './configs';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const port = ExpressConfig.Port || 3000;
const http = HttpCode;

app.get("/", async (req,res) => {
    const resp = req.body.admin +" "+ req.body.username+" " + req.body.pass;
    res.status(http.Success).send(resp)
    console.log(req.body)
})

app.get("/users", async (req,res) => {
    res.json
})
app.listen(port);
console.log(`App is running on http://localhost:${port}.`);