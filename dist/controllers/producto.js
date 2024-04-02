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
exports.getPrecioEspecial = exports.getProductosEnStock = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProductosEnStock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productosEnStock = yield producto_1.default.find({ stock: { $gt: 0 } }); // Solo productos con stock mayor que 0
        res.json(productosEnStock);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProductosEnStock = getProductosEnStock;
const getPrecioEspecial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, nombre_producto } = req.params;
    try {
        const producto = yield producto_1.default.findOne({ nombre: nombre_producto });
        if (!producto) {
            return res.status(404).json({ msg: "Producto no encontrado" });
        }
        // Buscar si el cliente tiene un precio especial para la marca
        const marcaEspecial = producto.marcas_especiales.find((marca) => marca.user_id === user_id);
        if (marcaEspecial) {
            const precioEspecial = {
                usuario: marcaEspecial.user_id,
                precio_especial: marcaEspecial.valor,
            };
            res.json({ precioEspecial });
        }
        else {
            res.json({ precio_base: producto.priceBase });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getPrecioEspecial = getPrecioEspecial;
