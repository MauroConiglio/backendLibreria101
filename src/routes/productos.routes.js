import { Router } from "express";
import { funcionPrueba } from "../controllers/productos.controllers.js";


const router = Router(); 
router.route('/prueba').get(funcionPrueba)

export default router 