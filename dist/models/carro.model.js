"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const mongoose_1 = require("mongoose");
const carroSchema = new mongoose_1.Schema({
    nombre: { type: "string" },
    marca: { type: "string" },
    modelo: { type: "string" },
    fechaEsamblaje: { type: "Date" },
    color: { type: "string" },
    precio: { type: "number" },
});
const Carro = (0, mongoose_1.model)("Carro", carroSchema);
exports.Carro = Carro;
