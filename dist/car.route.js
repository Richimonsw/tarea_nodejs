"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_carro_1 = require("./controller/controller.carro");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Cars:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: El nombre del carro
 *        marca:
 *          type: string
 *          description: La marca del carro
 *        modelo:
 *          type: string
 *          description: El modelo del carro
 *        fechaEsamblaje:
 *          type: Date
 *          description: La fecha de esamblaje del carro
 *        color:
 *          type: string
 *          description: El color del carro
 *        precio:
 *          type: number
 *          description: El precio del carro
 *      required:
 *        - nombre
 *        - marca
 *        - modelo
 *        - fechaEsamblaje
 *        - color
 *        - precio
 *      example:
 *        nombe: Ricardo
 *        marca: Chevrolete
 *        modelo: bolt
 *        fechaEsamblaje: 2018-04-02
 *        color: rojo
 *        precio: 25000
 *    CarsNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Cars
 *      example:
 *        msg: Cars was not found
 *
 *  parameters:
 *    CarsId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the Cars id
 */
/**
 * @swagger
 * tags:
 *  nombre: cars
 *  marca: cars marca
 *  modelo: cars modelo
 *  fechaEsamblaje: cars fechaEsamblaje
 *  color: cars color
 *  precio: cars precio
 */
/**
 * @swagger
 * /cars:
 *  get:
 *    summary: Returns a list of cars
 *    tags: [cars]
 *    responses:
 *      200:
 *        description: the list of cars
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Cars'
 */
router.get("/cars", controller_carro_1.retrieveCarro);
/**
 * @swagger
 * /cars:
 *  post:
 *    summary: create a new Cars
 *    tags: [cars]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cars'
 *    responses:
 *      200:
 *        description: the cars was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cars'
 *      500:
 *        description: Some server error
 *
 */
router.post("/cars", controller_carro_1.createCarro);
/**
 * @swagger
 * /cars/{id}:
 *  get:
 *    summary: get a Cars by Id
 *    tags: [cars]
 *    parameters:
 *      - $ref: '#/components/parameters/CarsId'
 *    responses:
 *      200:
 *        description: The Found Cars
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cars'
 *      404:
 *        description: the Cars was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarsNotFound'
 */
router.get("/cars/:id", controller_carro_1.retrieveCarro);
/**
 * @swagger
 * /cars/{id}:
 *  delete:
 *    summary: delete a Cars by id
 *    tags: [cars]
 *    parameters:
 *      - $ref: '#/components/parameters/CarsId'
 *    responses:
 *      200:
 *        description: the Cars was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cars'
 *      404:
 *        description: the Cars was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarsNotFound'
 *
 */
router.delete("/cars/:id", controller_carro_1.deleteCarro);
/**
 * @swagger
 * /cars/{id}:
 *  put:
 *    summary: Update a Cars by id
 *    tags: [cars]
 *    parameters:
 *      - $ref: '#/components/parameters/CarsId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cars'
 *    responses:
 *      200:
 *        description: The updated Cars
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Cars'
 *      404:
 *        description: the Cars was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CarsNotFound'
 *
 */
router.put("/cars/:id", controller_carro_1.updateCarro);
exports.default = router;
