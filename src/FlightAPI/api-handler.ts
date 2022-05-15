import express from "express";
import fetch, { Response } from "node-fetch";

const options = {
    "method": "GET",
    "headers": {
      "resourceversion": "v4",
      "app_id": "424ef222",
      "app_key": "8d257c1603397edc1f6e408cc85ad5f8",
      "Accept": "application/json",
    }
};

const baseurl =`https://api.schiphol.nl/public-flights`;


export async function getFlights(req:express.Request,res:express.Response,next?:express.NextFunction) {

    const endpoint = "/flights";
    const url = baseurl + endpoint;
    const resp : Promise<Response> = await fetch(url,options)
    .then((resp) => resp.json())
    .catch(e => {
        console.error({
            "message" : "Flights endpoint is the point of error.",
            error:e
        });
    });
    return resp;
}

export async function getFlightsByid(id:string,req:express.Request,res:express.Response,next?:express.NextFunction) { 
    const endpoint = "/flights/" + id;
    const url = baseurl + endpoint;
    const resp : Promise<Response> = await fetch(url,options)
    .then((resp) =>{
        console.log(resp)
        return resp.json()
    })
    .catch(e => {
        console.error({
            "message" : "Flights/i endpoint is the point of error.",
            error:e
        });
    });
    return resp;
}

module.exports;
