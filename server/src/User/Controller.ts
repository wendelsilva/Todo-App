import { routes } from "../routes";
import { prisma } from "../prisma";
import jwt from "jsonwebtoken"

routes.post('/login', async (req, res) => {
    const { email, password } = req.body;

    await prisma.user.findUnique({
        where: {
            email,
        }
    })
})