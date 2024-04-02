import {Request, Response} from 'express'
import Producto from '../models/producto'

export const getProductosEnStock = async (req: Request, res: Response) => {
  try {
    const productosEnStock = await Producto.find({ stock: { $gt: 0 } }); // Solo productos con stock mayor que 0
    res.json(productosEnStock);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPrecioEspecial = async (req: Request, res: Response) => {
  const { user_id, nombre_producto } = req.params;
  try {
    const producto = await Producto.findOne({ nombre: nombre_producto });
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // Buscar si el cliente tiene un precio especial para la marca
    const marcaEspecial = producto.marcas_especiales.find(
      (marca) => marca.user_id === user_id
    );
    if (marcaEspecial) {
      const precioEspecial = {
        usuario: marcaEspecial.user_id,
        precio_especial: marcaEspecial.valor,
      };
      res.json({ precioEspecial });
    } else {
      res.json({ precio_base: producto.priceBase });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

