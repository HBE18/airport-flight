import express, { query, response } from "express";
import {UserAuth, UserInsert, UserPass, UserPatch, UserUpdate} from '../models/user-models';
import { Pool, QueryResult } from "pg";
import {pool} from '../database/db';
import jwt from 'jsonwebtoken';
import {TokenConfig} from '../configs';

const app = express();

export function addUser(user: UserInsert): string {
    try {
        pool.connect((error, client, release) => {
            client.query<{
                email: string;
                password: string;
            }>(`INSERT INTO users(email,password) 
            VALUES ($1, $2)`,
             [user.email, user.password]);
            release();
        })
    } catch (error) {
        console.error(error);
    }
    return 'success';
}

export async function getUsers(): Promise<QueryResult<any>> {
    try {
        return await pool.query(`SELECT * FROM users`);
    } catch (error) {
        console.error(error);
        throw(error);
    }
}

export async function getUserById(id: number): Promise<UserAuth | void> {
    try {
        const { rows, rowCount } = await pool.query<{
            email: string;
            password: string;
        }>(`
            SELECT  email, password
            FROM users WHERE id = $1`, [id]);

        if(rowCount === 0){
            return undefined;
        }
        else{
            return rows[0];
        }
        
    } catch (error) {
        console.error(error);
        throw(error);
    }
}

export async function putUserById(id: number, user: UserPatch): Promise<number> {
    const resp = await pool.connect((error, client, release) => {
        client.query<{
            email?: string;
            password?: string;
        }>(`UPDATE users SET 
        email = $1,pass = $2
        WHERE userid = $3`,
            [user.email, user.password, id]);
        release();
    });
    return id;
}

export async function removeUserById(id: number): Promise<void> {
    return await new Promise((resolve, reject) => {
        pool.connect(async (error, client, release) => {
            await client.query<{
                id: string;
            }>(`DELETE FROM users WHERE id = $1`, [id]);
            release();
            resolve();
        })
    })
}

export async function getUserByEmail(email: string): Promise<UserAuth | void> {
    try {
        const {rows, rowCount} = await pool.query<{
                email:string;
                password:string;
            }>(`SELECT email, password FROM users WHERE email = $1`, [email]);
            if(rowCount === 0){
                return undefined;
            }
            else{
                return rows[0];
            }
    } catch (error) {
        console.error(error);
        throw(error);
    }
}

export async function getPasswordByEmail(email:string) : Promise<UserPass>{
    try {
        const {rows, rowCount} = await pool.query<{
            password : string;
        }>(`SELECT password FROM users WHERE email = $1`, [email]);
    
        return rows[0];
    
    } catch (error) {
        console.error(error);
        throw(error);
    }
}
export const signJWT = (user: UserPatch, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinceEpoch = new Date().getTime();
    var expirationTime = timeSinceEpoch + Number(TokenConfig.token.expireTime) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    
    try {
        jwt.sign(
            {
                email: user.email
            },
            TokenConfig.token.secret,
            {
                issuer: TokenConfig.token.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        console.error(error);
    }
};




module.exports;