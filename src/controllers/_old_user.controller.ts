import { Request, Response } from 'express';
import { connect } from '../config/database';
import { IUsers } from '../interfaces/user.interface';
// import { Users } from '../models/user.models';

// LIST ALL USERS
export async function getUserAll(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const users = await conn.query('SELECT * FROM users');
    return res.json(users[0]);
}

// LIST USER TO ID
export async function getUserId(req:Request, res:Response): Promise<Response> {
    const userId = req.params.userId;
    const conn = await connect();
    const User = await conn.query('SELECT * FROM users WHERE codusers = ?', [userId]);
    return res.json(User[0]);
}

// CREATE USER
export async function postUser(req:Request, res: Response) {
    // const newUser: IUsers = req.body;
    // const newUser = new User(
    //     req.body.codusers,
    //     req.body.codprofile,
    //     req.body.surname,
    //     req.body.names,
    //     req.body.email,
    //     req.body.password,
    //     req.body.phone,
    //     req.body.sw_state
    // );
    // const conn = await connect();
    // newUser.password = await newUser.encryptPassport(newUser.password);
    // newUser.sw_state = 1
    // // console.log(newUser);
    // await conn.query('INSERT INTO users SET ?', [newUser]);

    return res.json({
        message: 'User Created'
    });
}

// UPDATE USER
export async function updateUser(req:Request, res: Response): Promise<Response> {
    const userId = req.params.userId;
    const updateUser: IUsers = req.body;
    const conn = await connect();
    await conn.query('UPDATE users SET ? WhERE codusers = ?', [updateUser, userId]);
    return res.json({
        message: 'User updated'
    });

}

// DELETE USER
export async function deleteUser(req: Request, res:Response): Promise<Response>{
    const userId = req.params.userId;
    const conn = await connect();
    await conn.query('DELETE FROM users WhERE codusers = ?', [userId]);
    return res.json({
        message: 'User deleted'
    });
}


