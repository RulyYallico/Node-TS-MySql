import { Router } from 'express';
import { getTarifarioAll, getTarifarioDias, getTarifarioHoras, getTarifarioId } from '../controllers/tarifario.controllers';

const router = Router();

router.route('/')
    .get( getTarifarioAll );

router.route('/:id')
    .get( getTarifarioId );


router.route('/dias/:id')
    .get( getTarifarioDias );

router.route('/horas/:id')
    .get( getTarifarioHoras );

export default router;