import { HttpCode, TokenConfig } from '../configs';
import { pool } from 'database/db';
import express from 'express';
import { getPasswordByEmail, getUserByEmail, getUserById } from '../controller/functions';
import bcryptjs from 'bcryptjs';

import jwt, { TokenExpiredError } from 'jsonwebtoken';




export async function validateSameEmailDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const user = await getUserByEmail(req.body.email);
    if (user) {
        res.status(400).send({ errors: ['User email already exists'] });
    } else {
        next();
    }
}

export async function validateSameEmailBelongToSameUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (res.locals.user._id /*TODO : check fking email not id */ === req.body.id) {
        next();
    } else {
        res.status(400).send({ errors: ['Invalid email'] });
    }
}

export var validatePatchEmail = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (req.body.email) {
        validateSameEmailBelongToSameUser(req, res, next);
    } else {
        next();
    }
}

export async function validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const user = await getUserByEmail(req.body.email);
    if (user) {
        next();
    } else {
        res.status(404).send({
            errors: [`User ${req.body.e} not found`],
        });
    }
}

export async function extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    req.params.id = req.body.id;
    next();
}

export const extractJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {

    let token = req.headers.authorization?.split(' ')[1];

    if (token) {
        jwt.verify(token, TokenConfig.token.secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: error,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};


module.exports;