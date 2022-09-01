"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_carro_1 = require("../controller/controller.carro");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Cars:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the Cars
 *        description:
 *          type: string
 *          description: the description of the Cars
 *      required:
 *        - name
 *        - description
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Cars
 *        description: I have to do Something
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
 *  name: cars
 *  description: cars endpoint
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
 * /cars/count:
 *  get:
 *    summary: Get a Cars by Id
 *    tags: [cars]
 *    responses:
 *      200:
 *        description: the total number of cars
 *        content:
 *          text/plain:
 *            schema:
 *              type: integer
 *              example: 15
 *
 */
router.get("/cars/count", controller_carro_1.listCarro);
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
