import { Request, Response } from "express";
import Locales from "../models/locales.models";

// LISTA ESTACIONAMMIENTO ALL 
export const getLocalesAll = async (req: Request, res:Response): Promise<Response> => {
    const estacionamiento = await Locales.findAll({
        attributes:['codlocal','nomlocal'],
        where: {
            swstate: 1
        }
    });
    if (!estacionamiento) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json(estacionamiento);
}
