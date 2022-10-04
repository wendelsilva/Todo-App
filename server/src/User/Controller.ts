import { routes } from '../routes';
import { prisma } from '../prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secret = String(process.env.VITE_SECRET_KEY);

routes.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if(email && password) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if(user) {
            const passwordIsCorrect = bcrypt.compareSync(password, user.password);
            
            if(passwordIsCorrect) {
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

routes.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if( name && email && password ) {
        const hasDuplicatedEmail = await prisma.user.findUnique({
            where: { 
                email,
            }
        });

        if(hasDuplicatedEmail) {
            res.status(409).send({error: 'duplicated email'});
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hash,
                }
            });

            res.status(201).send();
        }
    } else {
        res.status(400).send({error: 'internal error'});
    }

});

module.exports = routes;