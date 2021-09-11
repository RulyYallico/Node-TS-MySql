import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface IPayload {
    _id: string;
    iat: number;
    exp: number;
}

export const validation = (req:Request, res:Response, next:NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(400).json({success:false, message: 'NO OK', data:'Access denied.'});

    try {

        const playload = jwt.verify(token, process.env.TOKEN_SECRET || 'tokentest') as IPayload;
    console.log(playload);
    // validar en el local
        req.userId = playload._id;
    
        console.log(playload);
        next();
        
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, message: 'NO OK', data:'Token expired.'});
    }

    
}