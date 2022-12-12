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
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../routes");
const prisma_1 = require("../prisma");
const auth_1 = require("../utils/auth");
routes_1.routes.get('/tasks', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield prisma_1.prisma.task.findMany();
        res.status(200).send(tasks);
    }
    catch (_a) {
        res.status(404).send({ error: 'no tasks found' });
    }
}));
routes_1.routes.post('/task', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, description } = req.body;
    try {
        yield prisma_1.prisma.task.create({
            data: {
                authorId: userId,
                description,
            }
        });
        res.status(201).send();
    }
    catch (_b) {
        res.status(400).send({ error: 'error creating task' });
    }
}));
routes_1.routes.delete('/task/:id', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.id;
    try {
        yield prisma_1.prisma.task.delete({
            where: {
                id: Number(taskId)
            }
        });
        res.status(200).send();
    }
    catch (_c) {
        res.status(400).send({ error: 'error deleting task' });
    }
}));
routes_1.routes.put('/task/:id', auth_1.auth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.id;
    const description = req.body.description;
    try {
        yield prisma_1.prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data: {
                description,
            }
        });
        res.status(200).send();
    }
    catch (_d) {
        res.status(400).send({ error: 'error updating task' });
    }
}));
module.exports = routes_1.routes;
