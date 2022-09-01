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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const database_1 = require("./database");
const routes_1 = require("./routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, database_1.connectToMongoose)();
        const server = (0, express_1.default)();
        server.use(express_1.default.json());
        (0, routes_1.router)(server);
        server.listen(config_1.PORT, () => {
            console.log("Server started" + config_1.PORT);
        });
        server.use("/api", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    });
}
main();
