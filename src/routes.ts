import { Application } from "express";
import { createCarro, deleteCarro, listCarro, retrieveCarro, updateCarro } from "./controller/controller.carro";
import cors from "cors";

export const router = (app: Application) => {
    app.use(cors());
    app.post('/cars', createCarro);
    app.get('/cars', listCarro);
    app.get('/cars/:id', retrieveCarro);
    app.delete('/cars/:id', deleteCarro);
    app.put('/cars/:id', updateCarro);
    
}

