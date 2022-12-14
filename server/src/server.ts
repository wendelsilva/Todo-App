import express from 'express';
import cors from 'cors';
import { routes } from './routes'
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from './swagger.json';

const app = express();

const tasksController = require('./Task/Controller');
const userController = require('./User/Controller');

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/', tasksController);
app.use('/', userController);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP Server Running");
});