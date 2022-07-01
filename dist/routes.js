"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controller_carro_1 = require("./controller/controller.carro");
const router = (app) => {
    app.post('/carro', controller_carro_1.createCarro);
    app.get('/carro', controller_carro_1.listCarro);
    app.get('/carro/:id', controller_carro_1.retrieveCarro);
    app.delete('/carro/:id', controller_carro_1.deleteCarro);
    app.put('/carro/:id', controller_carro_1.updateCarro);
};
exports.router = router;
