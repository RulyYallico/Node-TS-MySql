import { Request, Response } from "express";
import PerfilModulo from '../models/perfil_modulo.models';
import Modulo from '../models/modulo_models';

// LIST PERFIL_MODULO ALL
export const getProfileModuleAll = async (req:Request, res:Response): Promise<Response> => {
    const misModulos = await PerfilModulo.findAll(  );  // { include: Modulo }
    if (!misModulos) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: misModulos} );
}


// LIST PERFIL_MODULO {{ ID }}
export const getProfileModuleId = async (req:Request, res:Response): Promise<Response> => {
    const perfilId = req.params.perfilId;
    const misModulo = await PerfilModulo.findAll({
        where:{
            codperfil: perfilId
        },
        include: Modulo 
    });
    // var url = misModulo. ;
    // console.log();
    if (!misModulo) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: misModulo} );
}


// CREATE PERFIL_MODULO



// UPDATE PERFIL_MODULO 



// DELETE PERFIL_MODULO


