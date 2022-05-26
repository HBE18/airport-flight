import express from "express";
import {ExpressConfig, HttpCode} from '../configs';
import * as usermodel from "../models/user-models";
import * as flightmodel from "../models/user-models";
const handler = require("../FlightAPI/api-handler");
const userRouter = express.Router();

userRouter
.route("/flight/")
.get(async (req,res,next) => {
    const flightid :string = req.body.id;
    if(flightid){
        const resp = await handler.getFlightsByid(flightid,req,res);
        res.status(HttpCode.Success).json({"Response" : resp});
        next();
    }
    else{
        res.status(HttpCode.BadRequest);
        next();
    }
});


userRouter
.route("/flights")
.get(async (req,res,next) => {
    
    const resp = await handler.getFlights(req,res);
    res.status(HttpCode.Success).json({"Response" : resp});
    next();
})

export default userRouter;