import express from "express";
import { actulizarPelicula, crearPelicula, eliminacion, obtenerPorId, obtenerTodasLasPeliculas } from "../controllers/character.controllers.js";
const router = express.Router();

router.get("/characters", obtenerTodasLasPeliculas);
router.get("/characters/:id", obtenerPorId);
router.post("/characters", crearPelicula);
router.put("/characters/:id", actulizarPelicula);
router.delete("/characters/:id", eliminacion);

export default router;