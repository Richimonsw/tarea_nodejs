"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCarro = exports.listCarro = exports.deleteCarro = exports.retrieveCarro = exports.createCarro = void 0;
const Carro = require('../models/carro.model');
const createCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, marca, modelo, fechaEsamblaje, color, precio } = req.body;
    const response = yield new CarroController().create({ nombre, marca, modelo, fechaEsamblaje, color, precio });
    return res.status(response.status).json(response);
});
exports.createCarro = createCarro;
const retrieveCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new CarroController().retrieve(docId);
    return res.status(response.status).json(response);
});
exports.retrieveCarro = retrieveCarro;
const deleteCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const docId = req.params.id;
    const response = yield new CarroController().delete(docId);
    return res.status(response.status).json(response);
});
exports.deleteCarro = deleteCarro;
const listCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    const carros = yield Carro.paginate({}, { limit, page });
    res.json(carros);
});
exports.listCarro = listCarro;
const updateCarro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, marca, modelo, fechaEsamblaje, color, precio } = req.body;
    const docId = req.params.id;
    const response = yield new CarroController().update(docId, { nombre, marca, modelo, fechaEsamblaje, color, precio });
    return res.status(response.status).json(response);
});
exports.updateCarro = updateCarro;
class CarroController {
    create(carroContent) {
        return __awaiter(this, void 0, void 0, function* () {
            const carro = new Carro(carroContent);
            return carro.save().then((data) => {
                return {
                    message: "Created: car added to database",
                    status: 200,
                    content: data
                };
            }).catch((err) => {
                return {
                    message: "Failed to create carro",
                    status: 500,
                    content: err
                };
            });
        });
    }
    retrieve(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Carro.findOne({ _id: docId }).then((data) => {
                if (data === null) {
                    return {
                        message: "Document not found",
                        status: 200,
                        content: data
                    };
                }
                return {
                    message: "OK: Car retrieve",
                    status: 200,
                    content: data
                };
            }).catch((err) => {
                return {
                    message: "Internal server error:" + err.name,
                    status: 500,
                    content: err
                };
            });
        });
    }
    delete(docId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Carro.deleteOne({ _id: docId }).then((data) => {
                if (data.deletedCount === 0) {
                    return {
                        message: "NOT FOUND: Carro not found",
                        status: 200,
                        content: data
                    };
                }
                return {
                    message: "OK: Carro deleted",
                    status: 200,
                    content: data
                };
            }).catch((err) => {
                return {
                    message: "Internal server error:" + err.name,
                    status: 504,
                    content: err
                };
            });
        });
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
    update(docId, carroContent) {
        return __awaiter(this, void 0, void 0, function* () {
            return Carro.updateOne({ _id: docId }, { $set: {
                    nombre: carroContent.nombre,
                    marca: carroContent.marca,
                    modelo: carroContent.modelo,
                    fechaEsamblaje: carroContent.fechaEsamblaje,
                    color: carroContent.color,
                    precio: carroContent.precio,
                } }).then((data) => {
                return {
                    message: "OK: Carro update",
                    status: 200,
                    content: data
                };
            }).catch((err) => {
                return {
                    message: "INTERNAL SERVER ERROR: Error on update carro",
                    status: 500,
                    content: err
                };
            });
        });
    }
}
