import { Router } from 'express';
import { getUserAll, getUserId, postUser, updateUser } from '../controllers/user.controller';

const router = Router();

router.route('/')
    .get( getUserAll )
    .post( postUser );


router.route('/:userId')
    .get( getUserId )
    .put( updateUser );
//     .delete( deleteUser )
//     ;

export default router;