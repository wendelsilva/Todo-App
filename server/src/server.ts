import express from 'express';
import cors from 'cors';
import { routes } from './routes'

const app = express();

const tasksController = require('./Task/Controller')

app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/', tasksController);

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP Server Running")
})