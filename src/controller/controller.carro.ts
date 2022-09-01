import {ICarro} from "../models/carro.model";
import {Request, Response, NextFunction, response} from "express";
import { IResponse } from "../models/response.model";

const Carro = require('../models/carro.model');

export const createCarro =  async (req: Request, res: Response) => {
    const {nombre, marca, modelo,fechaEsamblaje, color, precio}: ICarro = req.body;
    const response = await new CarroController().create({nombre, marca, modelo, fechaEsamblaje, color, precio});
    return res.status(response.status).json(response);
}

export const retrieveCarro = async (req: Request, res: Response)=>{
    const docId: string = req.params.id;
    const response = await new CarroController().retrieve(docId);
    return res.status(response.status).json(response);
}

export const deleteCarro = async (req: Request, res: Response) => {
    const docId: string = req.params.id;
    const response = await new CarroController().delete(docId);
    return res.status(response.status).json(response);
}

export const listCarro = async (req: Request, res: Response) => {
    const limit = req.query.limit || 5 ;
    const page = req.query.page || 1 ;
    const carros = await Carro.paginate({}, {limit, page});
    res.json(carros);
}

export const updateCarro = async (req: Request, res: Response) => {
    const {nombre, marca, modelo,fechaEsamblaje, color, precio} : ICarro = req.body;
    const docId: string = req.params.id;
    const response = await new CarroController().update(docId, {nombre, marca, modelo,fechaEsamblaje, color, precio});
    return res.status(response.status).json(response);

}

class CarroController {
    public async create(carroContent: ICarro) : Promise<IResponse> {
        const carro = new Carro(carroContent);
        return carro.save().then((data: any) => {
            return{
                message: "Created: car added to database",
                status: 200,
                content: data
            }
        }).catch((err: any) => {
            return{
                message: "Failed to create carro",
                status: 500,
                content: err
            };
        })
    }

    public async retrieve(docId: string) : Promise<IResponse> {
        return Carro.findOne({_id: docId}).then((data: any) => {

            if(data === null){
                return{
                    message: "Document not found",
                    status: 200,
                    content: data
                }
            }
            return{
                message: "OK: Car retrieve",
                status: 200,
                content: data
            };
        }).catch((err: { name: string; }) => {
            return{
                message: "Internal server error:" + err.name,
                status: 500,
                content: err
            };
        })
    }

    public async delete(docId: string) : Promise<IResponse> {
        return Carro.deleteOne({_id: docId}).then((data: { deletedCount: number; }) => {
            if(data.deletedCount === 0){
                return{
                    message: "NOT FOUND: Carro not found",
                    status: 200,
                    content: data
                }
            }
            return {
                message: "OK: Carro deleted",
                status: 200,
                content: data
            };
        }).catch((err: { name: string; }) => {
            return{
                message: "Internal server error:" + err.name,
                status: 504,
                content: err
            };
        })
    }

    /*public async list() :  Promise<IResponse> {
        return Carro.find({}).then((data: any) => {
            return {
                message: "OK: All cars retrieve",
                status: 200,
                content: data
            }
        }).catch((err: any)=>{
            return{
                message: "Error on retrieve cars",
                status: 500,
                content: err
            }
        })
    }*/

    public async update(docId: String, carroContent: ICarro) :  Promise<IResponse>{
        return Carro.updateOne({_id: docId} , {$set: {
            nombre: carroContent.nombre,
            marca: carroContent.marca,
            modelo: carroContent.modelo,
            fechaEsamblaje: carroContent.fechaEsamblaje,
            color: carroContent.color,
            precio: carroContent.precio,
        }}).then((data: any) => {
            return {
                message: "OK: Carro update",
                status: 200,
                content: data
            }
        } ).catch((err: any) => {
            return{
                message: "INTERNAL SERVER ERROR: Error on update carro",
                status: 500,
                content: err
            }
        });
        
    }
}