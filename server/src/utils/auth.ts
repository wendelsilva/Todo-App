import express from 'express';
import jwt from 'jsonwebtoken';

const secret = String(process.env.VITE_SECRET_KEY);

export function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
    const authToken = req.headers['authorization'];

    if(authToken) {

        const bearer = authToken.split(' ');
        const token = bearer[1];

        jwt.verify(token, secret, (error, data) => {
            if(error) {
                res.status(401).send({error: 'invalid token'});
            } else {
                next();
            }
        });

    } else {
        res.status(401).send({error: 'invalid token'});
    }
};