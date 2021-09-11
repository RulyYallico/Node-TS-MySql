import { Request, Response } from 'express';
import Tarifarios from "../models/tarifario.models";


// LIST ALL RESERVA
export const getTarifarioAll = async (req:Request, res:Response): Promise<Response> => {

    const reserva = await Tarifarios.findAll();
    if (!reserva) 
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: reserva} );
}


export const getTarifarioId = async (req:Request, res:Response): Promise<Response> => {
    const idLocal = req.params.id;
    const resultDia = await Tarifarios.findAll({
        where:{
            sw_state: 1,
            codlocal: idLocal
        },
        attributes: ['codtarifarios', 'detalle', 'precio', 'tipo']
    });
    // return res.json(resultDia);
    return res.json(resultDia);
}


export const getTarifarioDias = async (req:Request, res:Response): Promise<Response> => {
    const idLocal = req.params.id;
    const resultDia = await Tarifarios.findAll({
        where:{
            sw_state: 1,
            codlocal: idLocal,
            tipo: 'DIA'
        },
        attributes: ['detalle', 'precio']
    });
    // return res.json(resultDia);
    return res.json(resultDia);
}


export const getTarifarioHoras = async (req:Request, res:Response): Promise<Response> => {
    const idLocal = req.params.id;
    const resultDia = await Tarifarios.findAll({
        where:{
            sw_state: 1,
            codlocal: idLocal,
            tipo: 'HORA'
        },
        attributes: ['detalle', 'precio']
    });
    // return res.json(resultDia);
    return res.json(resultDia);
}
