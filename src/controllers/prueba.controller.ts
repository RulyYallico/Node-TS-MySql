import { Request, Response } from 'express';
import Prueba1 from "../models/prueba1.model";
import Prueba2 from '../models/prueba2.model';


export const getPrueba = async (req:Request, res:Response): Promise<Response> => {

    const idUser = req.body.idUser;
    const Inicio = req.body.ini;
    const Fin = req.body.fin;
    console.log(req.body);
    
    const result = await Prueba1.findAll({
        include: [{
            model:Prueba2
        }]
    });
    
    if(!result)
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json( result );
    
}

export const getPrueba2 = async (req:Request, res:Response): Promise<Response> => {

    const idUser = req.body.idUser;
    const Inicio = req.body.ini;
    const Fin = req.body.fin;
    console.log(req.body);
    
    const result = await Prueba2.findAll({
        include: [{
            model:Prueba1
        }]
    });
    
    if(!result)
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json( result );
    
}