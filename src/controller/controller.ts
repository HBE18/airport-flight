import express from "express";
import { addUser, getUsers, putUserById, removeUserById, getUserById, getPasswordByEmail, signJWT} from "./functions"
import { HttpCode } from "../configs";
import { User, UserInsert, UserUpdate } from "models/user-models";
import bcryptjs, { hash } from 'bcryptjs';

export async function login(req: express.Request, res: express.Response,next: express.NextFunction) {
    const cred = req.body;
    const rp = await getPasswordByEmail(cred.email);
    const decrypted = bcryptjs.compare(cred.password,rp.password,(error,result) => {
        if(error){
            return res.sendStatus(HttpCode.Unauthorized);
        }
        else if(result){
            signJWT(cred,(_error,token) => {
                if(_error){
                    return res.sendStatus(HttpCode.Unauthorized);
                }
                else if(token){
                    return res.status(200).json({
                        message: 'Auth Successful',
                        token,
                        user: cred
                    });
                }
            })
        }
    })

}
export async function listUsers(req: express.Request, res: express.Response) {
    const users = await getUsers();
    if(users != undefined){
        res.status(HttpCode.Success).json(users.rows);
    }
    else{
        res.status(HttpCode.NoContent).send("List operation failed");
    }
}
export async function getUserWithId(req: express.Request, res: express.Response) {
    const user = await getUserById(req.body.id);
    if(user === undefined){
        res.sendStatus(HttpCode.NotFound);
    }
    else{
        res.status(HttpCode.Success).json(user);
    }
    
}
export function createUser(req: express.Request, res: express.Response,next: express.NextFunction) {
    const user : UserInsert = req.body;
    bcryptjs.hash(user.password,10,(hashError,hash) => {
        if(hashError){
            res.status(HttpCode.Forbidden).json({
                message : hashError.message,
                error : hashError
            })
        }
        const hashed :UserInsert = {
            email: user.email,
            password : hash
        };
        const resp = addUser(hashed);
        next();
    })
}
export async function put(req: express.Request, res: express.Response) {
    const rep = await putUserById(req.body.id, req.body)
    console.log(rep);
    res.status(HttpCode.Success).json(`User ${rep} has updated by PUT`);
}
export async function removeUser(req: express.Request, res: express.Response) {
    await removeUserById(req.body.id);
    res.status(HttpCode.Success).send();
}

module.exports;