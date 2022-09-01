"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mongodb_URL = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 5000;
exports.Mongodb_URL = process.env.MONGODB_URL || 'mongodb://localhost/ricars';
