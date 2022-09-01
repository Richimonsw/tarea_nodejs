"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const carroSchema = new mongoose_1.Schema({
    nombre: { type: "string" },
    marca: { type: "string" },
    modelo: { type: "string" },
    fechaEsamblaje: { type: "Date" },
    color: { type: "string" },
    precio: { type: "number" },
});
carroSchema.plugin(mongoosePaginate);
module.exports = (0, mongoose_1.model)("Carro", carroSchema);
