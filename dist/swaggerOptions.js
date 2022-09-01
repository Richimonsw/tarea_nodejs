"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node Cars API',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ["./src/*.ts"],
};
