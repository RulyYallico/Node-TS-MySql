import { Router } from "express";
import moduleName from 'module';
import { getEstacionamientoAll, getEstacionamientoId, postRegistraEstacionamiento, putEstacionamientoId } from "../controllers/estacionamiento.controllers";
const router = Router();

// Sin parametro
router.route('/')
    .get( getEstacionamientoAll )
    .post( postRegistraEstacionamiento );

// Con parametro
router.route('/:idLocal')
    .get( getEstacionamientoId )
    .put( putEstacionamientoId );

export default router;