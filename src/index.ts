import express from 'express';
import { appendFile } from 'fs';
import { PORT} from './config';
import { connectToMongoose } from './database';
import { router } from './routes';

import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {options} from './swaggerOptions';

const specs = swaggerJsDoc(options);

async function main() {
    await connectToMongoose();
    const server = express();
    server.use(express.json());
    router(server);
    server.listen(PORT, () => {
        console.log("Server started"+ PORT);
    });
    server.use("/api", swaggerUi.serve, swaggerUi.setup(specs));
}

main();