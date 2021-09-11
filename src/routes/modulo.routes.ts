import { Router } from "express";
import { getModuleId, getModuloAll } from '../controllers/modulo.controller';
const router = Router();

// Sin parametro
router.route('/')
    .get( getModuloAll );

router.route('/:perfilId')
    .get( getModuleId );
// Con parametro

export default router;