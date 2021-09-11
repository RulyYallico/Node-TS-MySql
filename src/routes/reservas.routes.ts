import { Router } from 'express';
import { getPrueba, getPrueba2 } from '../controllers/prueba.controller';
import { getReservaId, getReservaAll, postReserva, putConfirmaReserva, getReporteCliente } from '../controllers/reservas.controller';

const router = Router();

router.route('/')
    .get( getReservaAll )
    .post( postReserva );

router.route('/reporte/')
    .post ( getReporteCliente );

router.route('/prueba/')
    .post ( getPrueba );

router.route('/prueba2/')
    .post ( getPrueba2 );

router.route('/:id')
    .get( getReservaId )
    .put( putConfirmaReserva );

export default router;