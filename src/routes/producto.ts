import { Router } from "express";
import {
  getPrecioEspecial,
  getProductosEnStock,
} from "../controllers/producto";

const router = Router();

router.get("/", getProductosEnStock);
router.get("/price/:user_id/:nombre_producto", getPrecioEspecial);

export default router;
