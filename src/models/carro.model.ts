import { Schema, model } from "mongoose";

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

const Carro = model<ICarro>("Carro", carroSchema);

export {Carro};