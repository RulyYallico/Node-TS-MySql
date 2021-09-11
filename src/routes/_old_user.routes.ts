import { Router } from 'express';
import { getUserAll, getUserId, postUser, deleteUser, updateUser } from '../controllers/_old_user.controller';

const router = Router();

router.route('/')
    .get( getUserAll )
    .post( postUser );

router.route('/:userId')
    .get( getUserId )
    .delete( deleteUser )
    .put( updateUser );

export default router;