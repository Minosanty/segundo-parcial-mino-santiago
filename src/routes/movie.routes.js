import express from "express";
import { actulizarPelicula, crearPelicula, eliminacion, obtenerPorId, obtenerTodasLasPeliculas } from "../controllers/movie.controllers.js";
const router = express.Router();

router.get("/ESModules", obtenerTodasLasPeliculas);
router.get("/ESModules/:id", obtenerPorId);
router.post("/ESModules", crearPelicula);
router.put("/ESModules/:id", actulizarPelicula);
router.delete("/ESModules/:id", eliminacion);

export default router;