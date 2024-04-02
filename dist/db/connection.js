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
exports.startConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function startConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        const password = "moM5f3AodwLE5d0A";
        const uri = `mongodb://drenvio:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;
        const mongooseOptions = {};
        try {
            yield mongoose_1.default.connect(uri, mongooseOptions);
            console.log("Conexión exitosa a MongoDB Atlas");
        }
        catch (error) {
            console.error("Error de conexión a MongoDB Atlas:", error);
        }
    });
}
exports.startConnect = startConnect;
