import { Router } from "express";
import {
  crearProducto,
  funcionPrueba,
  listarProductos,
} from "../controllers/productos.controllers.js";

const router = Router();
router.route("/prueba").get(funcionPrueba);
router.route("/productos").post(crearProducto).get(listarProductos);
export default router;
