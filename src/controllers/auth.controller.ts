import { Request, Response } from 'express';
import Users from '../models/user.models';
import { Util } from '../config/util';
import jwt from 'jsonwebtoken';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

// Login User
export const signin = async(req:Request, res: Response) => {
    console.log(req.body);
    const util = new Util();
    try {

        const existeUser = await Users.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!existeUser) return res.json({success:false, message: 'NO OK', data:'email or password is wrong.'});

        const userPassBD = existeUser?.getDataValue("password");
        const idUserBD = existeUser?.getDataValue("codusers");
        const idPerilUser = existeUser?.getDataValue("codprofile");
        const nombres = existeUser?.getDataValue("names");
        const apellido = existeUser?.getDataValue("surname");

        if (!await util.validaPassword(req.body.password, userPassBD)) {
            return res.json({success:false, message: 'NO OK', data:'Error en el password.'});
        }

        const token: string = jwt.sign({_id:idUserBD}, process.env.TOKEN_SECRET || 'tokentest', {
            // despues de un dia 60*60*24
            expiresIn: 60 * 60
        });

        res.status(200).header('auth-token', token).json({success:true, message: 'OK', data:token, idUser:idUserBD, idPerfil:idPerilUser, nombre: nombres, apellidos:apellido});
        
        // res.json({success:true, message: 'OK', data:'Bienvenido a Travel Car'});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'NO OK', data:'Comuniquese con el administrador.'})
    }

}





export const profile = async (req:Request, res:Response) => {
    // console.log(req.header('auth-token'));
    const user = await Users.findByPk(req.userId);
    if(!user) return res.status(404).json({success:false, message: 'NO OK', data:'No user found.'});
    res.json({success:true, message: 'OK', data:user});
}






// import { Request, Response } from "express";
// import { IAuth } from '../interfaces/user.interface'
// import jwt from 'jsonwebtoken';
// // import { connect } from "../database";
// import {connect} from '../config/database';
// // import { User } from "../models/user.models";

// // REGISTRAR USER
// export const signup = async (req: Request, res: Response) => {
//     // Saving User
//     // const newUser: IAuth = req.body;
//     // // newUser.password = await newUser.encryptPassport(newUser.password);

//     // const conn = await connect();
//     // const userSaved = await conn.query('INSERT INTO users SET ?', [newUser]);
//     // // token
//     // const token: string = jwt.sign({email: newUser.email}, process.env.TOKEN_SECRET || 'tokentest');

//     // res.header('auth-token', token).json(userSaved[0]);
// }

// // INICIAR SESION
// export const signin = async (req: Request, res: Response) => {
    
//     const userEmail = req.body.email;
//     const connection = await connect();
//     await connection.ping();

//     const rows = await connection.query('SELECT email FROM users WHERE email = ?', [userEmail]);

//     console.log(rows);   
//     res.send('login'); 
//     // const userEmail = req.body.email;
//     // const conn = await connect();
//     // // const Email = await conn.query('SELECT email FROM users WHERE email = ?', [userEmail]);
//     // const Email = await conn.query('call ACCESS_LOGIN_USER(?);', [userEmail] );
//     // console.log(Email[0]);
//     // if (Email[0]) return res.status(400).json('Email or password is wrong.');
//     // res.send('login');
// }

// // PERFILES
// export const profile = (req: Request, res: Response) => {
//     console.log(req.body);
//     res.send('profile');
// }
