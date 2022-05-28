import express from "express";
import { Body } from "node-fetch";
import {ExpressConfig, HttpCode} from '../configs';
const handler = require("../FlightAPI/api-handler");
const userRouter = express.Router();
import { login } from '../controller/controller';
import { validateSameEmailBelongToSameUser, validateSameEmailDoesntExist, validateUserExists } from '../middleware/user';
import { createUser } from '../controller/controller';

userRouter
.route("/register")
.post(validateSameEmailDoesntExist,createUser,(req,res) => {
    res.redirect('http://localhost:3000/login'); //should be forwarded to login page but there is no login page in my system.
})

userRouter
.route("/login")
.get((req,res)=>{
    res.status(HttpCode.Success).send("Login Here!");
    console.log("Login requested.");
})
.post(validateUserExists,login);



export default userRouter;