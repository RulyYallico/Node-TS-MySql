import { Router } from 'express';
import { getProfile, PostProfile } from '../controllers/profile.controller';
const router = Router();

router.route('/')
    .get( getProfile )
    .post( PostProfile );


export default router;