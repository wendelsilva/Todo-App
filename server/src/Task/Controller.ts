import { routes } from "../routes";
import { prisma } from "../prisma";

routes.get('/tasks', async (req, res) => {

    try {
        const tasks = await prisma.task.findMany();
        res.status(200).send(tasks);
    } catch {
        res.status(404).send({error: 'no tasks found'})
    }
});

routes.post('/task', async (req, res) => {
    const { userId, description } = req.body;

    try {
        await prisma.task.create({
            data: {
                authorId: userId,
                description: description,
            }
        });

        res.status(201).send();
    } catch {
        res.status(400).send({error: 'error creating task'});
    }
});

routes.delete('/task/:id', async (req, res) => {
    const taskId = req.params.id;

    try {
        await prisma.task.delete({
            where: {
                id: Number(taskId)
            }
        });

        res.status(200).send();
    } catch {
        res.status(400).send({error: 'error deleting task'});
    }
});

routes.put('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    const description = req.body.description;

    try {
        await prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data : {
                description: description
            }
        });

        res.status(200).send();
    } catch {
        res.status(400).send({error: 'error updating task'});
    }
})

module.exports = routes;