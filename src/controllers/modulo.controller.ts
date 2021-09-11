import { Request, Response } from "express";
import AccessModulos from '../models/modulo_models';
import PerfilModulo from '../models/perfil_modulo.models';


// LIST MODULO ALL
export const getModuloAll = async (req:Request, res:Response): Promise<Response> => {
    const modulos = await AccessModulos.findAll();
    if (!modulos) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: modulos} );
}


// LIST MODULO {{ ID }}
export const getModuleId = async (req:Request, res:Response): Promise<Response> => {
    const perfilId = req.params.perfilId;
    const misModulo = await AccessModulos.findAll({
        // where:{
        //     codmodulos: perfilId
        // },
        attributes:['codmodulos','picture','name','extension'],
        include:[{
            model: PerfilModulo,
            attributes: [],
            where: { codperfil: perfilId },
            required:true
        }]
    });
    console.log(misModulo);
    if (!misModulo) return res.status(404).json( { success:false, message: 'NO OK', data:'No se encontraron registros' } );
    return res.json(misModulo);
}


// CREATE MODULO



// UPDATE MODULO 



// DELETE MODULO


