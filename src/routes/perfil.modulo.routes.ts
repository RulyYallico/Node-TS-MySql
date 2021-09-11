import { Router } from "express";
import { getProfileModuleAll, getProfileModuleId }  from '../controllers/perfil_modulo.controller';

const router = Router();

// Sin parametro
router.route('/')
    .get( getProfileModuleAll );

router.route('/:perfilId')
    .get( getProfileModuleId );
// Con parametro

export default router;