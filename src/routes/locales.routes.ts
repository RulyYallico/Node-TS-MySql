import { Router } from "express";
import { getLocalesAll } from "../controllers/locales.controller";
const router = Router();

// Sin parametro
router.route('/')
    .get( getLocalesAll );

// Con parametro
// router.route('/:codlado')
//     .get( getEstacionamientoId );

export default router;