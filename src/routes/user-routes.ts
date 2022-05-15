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
    const cred = req.body;
    cred.json();
    // TODO: Check data integrity then query to db
})

userRouter
.route("/login")
.post(async (req,res,next) => {
    const cred = req.body;
    cred.json();
    // TODO: Check database for auth then create session with credentials
})

userRouter
.route("/logout")
.delete(async (req,res,next) => {
    const cred = req.body;
    cred.json();
    // TODO: Check session for auth then delete session
})

export default userRouter;