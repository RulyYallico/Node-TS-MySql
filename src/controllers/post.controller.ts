import { Request, Response } from 'express';

import { connect } from '../config/database';

export async function getPost(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const users = await conn.query('SELECT * FROM users');
    return res.json(users[0]);
}

