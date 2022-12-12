"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = String(process.env.VITE_SECRET_KEY);
function auth(req, res, next) {
    const authToken = req.headers['authorization'];
    if (authToken) {
        const bearer = authToken.split(' ');
        const token = bearer[1];
        jsonwebtoken_1.default.verify(token, secret, (error, data) => {
            if (error) {
                res.status(401).send({ error: 'invalid token' });
            }
            else {
                next();
            }
        });
    }
    else {
        res.status(401).send({ error: 'invalid token' });
    }
}
exports.auth = auth;
;
