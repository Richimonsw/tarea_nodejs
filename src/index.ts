import express from 'express';
import { PORT} from './config';
import { connectToMongoose } from './database';
import { router } from './routes';

async function main() {
    await connectToMongoose();
    const server = express();
    server.use(express.json());
    router(server);
    server.listen(PORT, () => {
        console.log("Server started"+ PORT);
    });
}

main();