import { Application } from "express";
import { createCarro, deleteCarro, listCarro, retrieveCarro, updateCarro } from "./controller/controller.carro";

export const router = (app: Application) => {
    app.post('/carro', createCarro);
    app.get('/carro', listCarro);
    app.get('/carro/:id', retrieveCarro);
    app.delete('/carro/:id', deleteCarro);
    app.put('/carro/:id', updateCarro);
}
