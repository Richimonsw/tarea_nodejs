"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const controller_carro_1 = require("./controller/controller.carro");
const cors_1 = __importDefault(require("cors"));
const router = (app) => {
    app.use((0, cors_1.default)());
    app.post('/cars', controller_carro_1.createCarro);
    app.get('/cars', controller_carro_1.listCarro);
    app.get('/cars/:id', controller_carro_1.retrieveCarro);
    app.delete('/cars/:id', controller_carro_1.deleteCarro);
    app.put('/cars/:id', controller_carro_1.updateCarro);
};
exports.router = router;
