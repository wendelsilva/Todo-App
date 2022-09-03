import { routes } from "../routes";
import { prisma } from "../prisma";

routes.get('/tasks', (req, res) => {
    async function getTasks() {
        const tasks = await prisma.task.findMany();
        res.status(200).send(tasks);
    }

    getTasks();
})

routes.post('/task', (req, res) => {
    const { userId, description } = req.body;

    async function createTask() {
        await prisma.task.create({
            data: {
                authorId: userId,
                description: description,
            }
        });

        res.status(201).send()
    }

    createTask();
});

routes.delete('/task/:id', (req, res) => {
    const taskId = req.params.id;

    async function deleteTask() {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(taskId)
            }
        });

        if(task) {
            await prisma.task.delete({
                where: {
                    id: Number(taskId)
                }
            });

            res.status(200).send();
        } else {
            res.status(404).send({error: 'Task not found'});
        }
    }

    deleteTask();
})

routes.put('/task/:id', (req, res) => {
    const taskId = req.params.id;
    const description = req.body.description;

    async function updateTask() {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(taskId)
            }
        });

        if(task) {
            await prisma.task.update({
                where: {
                    id: Number(taskId),
                },
                data : {
                    description: description
                }
            });

            res.status(200).send();
        } else {
            res.status(404).send({error: 'Task not found'});
        }

        
    }

    updateTask();
})

module.exports = routes;