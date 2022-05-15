import express from "express";
import { Body } from "node-fetch";
import {ExpressConfig, HttpCode} from '../configs';
import * as usermodel from "../models/user-models";
import * as flightmodel from "../models/user-models";
const handler = require("../FlightAPI/api-handler");
const userRouter = express.Router();


userRouter
.route("/signup")
.post(async (req,res,next) => {
    const pars = req.body;
    
})