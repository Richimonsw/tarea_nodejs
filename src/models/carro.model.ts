import { Schema, model } from "mongoose";

const mongoosePaginate = require('mongoose-paginate-v2')


export interface ICarro{
    nombre: null | string;
    marca: null | string;
    modelo: null | string;
    fechaEsamblaje: Date;
    color: null | string;
    precio: number;
}

const carroSchema = new Schema<ICarro>({
    nombre: {type: "string"},
    marca: {type: "string"},
    modelo: {type: "string"},
    fechaEsamblaje: {type: "Date"},
    color: {type: "string"},
    precio: {type: "number"},
})

carroSchema.plugin(mongoosePaginate);
module.exports = model<ICarro>("Carro", carroSchema);
