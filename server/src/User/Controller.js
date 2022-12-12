"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../routes");
const prisma_1 = require("../prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const secret = String(process.env.VITE_SECRET_KEY);
routes_1.routes.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (email && password) {
        const user = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (user) {
            const passwordIsCorrect = bcrypt_1.default.compareSync(password, user.password);
            if (passwordIsCorrect) {
                jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, secret, { expiresIn: '48h' }, (error, token) => {
                    if (error) {
                        res.status(400).send({ error: 'internal error' });
                    }
                    else {
                        res.status(200).send({ token: token });
                    }
                });
            }
            else {
                res.status(401).send({ error: 'invalid credentials' });
            }
        }
        else {
            res.status(404).send({ error: 'user not found' });
        }
    }
    else {
        res.status(400).send({ error: 'internal error' });
    }
}));
routes_1.routes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (name && email && password) {
        const hasDuplicatedEmail = yield prisma_1.prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (hasDuplicatedEmail) {
            res.status(409).send({ error: 'duplicated email' });
        }
        else {
            const salt = bcrypt_1.default.genSaltSync(10);
            const hash = bcrypt_1.default.hashSync(password, salt);
            yield prisma_1.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hash,
                }
            });
            res.status(201).send();
        }
    }
    else {
        res.status(400).send({ error: 'internal error' });
    }
}));
module.exports = routes_1.routes;
