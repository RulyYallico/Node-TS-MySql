import { Router } from 'express';
import { signin, profile } from '../controllers/auth.controller';
import { validation } from '../libs/validateToken';

const router = Router();

// router.route('/signup')
//     .post( signup );

router.route('/signin')
    .post( signin );

router.route('/profile')
    .get( validation, profile );

export default router;