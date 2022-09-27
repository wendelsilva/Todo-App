import { routes } from "../routes";
import { prisma } from "../prisma";
import jwt from "jsonwebtoken"

const secret = String(process.env.VITE_SECRET_KEY)

routes.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(email != undefined && password != undefined) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if(user) {
            if(user.password === password) {
                jwt.sign({id: user.id, email: user.email}, secret, {expiresIn: '48h'}, (error, token) => {
                    if(error) {
                        res.status(400).send({error: 'internal error'});
                    } else {
                        res.status(200).send({token: token});
                    }
                });
            } else {
                res.status(401).send({error: 'invalid credentials'});
            }
        } else {
            res.status(404).send({error: 'user not found'});
        }
    } else {
        res.status(400).send({error: 'internal error'});
    }
});

module.exports = routes;