import { Request, Response } from "express";
import ProfilesUser from "../models/perfil.models";



// LIST PERFIL ALL
export const getProfileAll = async (req:Request, res:Response): Promise<Response> => {
    const perfiles = await ProfilesUser.findAll();
    if (!perfiles) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: perfiles} );
}


// LIST PERFIL {{ ID }}



// CREATE PERFIL



// UPDATE PERFIL 



// DELETE PERF


