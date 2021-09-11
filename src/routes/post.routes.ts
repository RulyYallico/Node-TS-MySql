import { Router } from 'express';
import { getPost } from '../controllers/post.controller'
const router = Router();

router.route('/')
    .get( getPost );


export default router;
