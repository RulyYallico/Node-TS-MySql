import { Request, Response } from "express";
import Estacionamiento from "../models/estacionamiento.models";

// LISTA ESTACIONAMMIENTO ALL 
export const getEstacionamientoAll = async (req: Request, res:Response): Promise<Response> => {
    const estacionamiento = await Estacionamiento.findAll();
    if (!estacionamiento) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: estacionamiento} );
}


export const getEstacionamientoId = async (req: Request, res:Response): Promise<Response> => {
    const codLocal = req.params.idLocal;
    const estacionamiento = await Estacionamiento.findAll({
        attributes:['codestacionamiento','sector','orden','swstate'],
        where: {
            codlocal: codLocal
        }
    });
    if (!estacionamiento) return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json( estacionamiento );
    
}



// CONFIRMA RESERVA
export const putEstacionamientoId = async (req:Request, res:Response) => {

    // es idLocal en realidad es el id del estacionamiento
    const codEstac = req.params.idLocal;
    const newstate = req.body.codNewEstado;
    try {
        await Estacionamiento.update( 
            { 
                swstate: newstate 
            }, 
            { where : 
                {
                    codestacionamiento: codEstac
                }
            }
        );
        res.json({ success:true, message: 'OK', data:"Estacionamiento actualizado" });
    } catch (error) {
        res.json({ success:false, message: 'NO OK', data:'Error al ativar estacionamiento.' });
    }

}




// CREATE ESTACIONAMIENTO
export const postRegistraEstacionamiento = async(req:Request, res: Response) => {
    const codigo = req.body.idLocal;
    const newEstacionamiento = {
        codlocal: req.body.idLocal,
        sector: 'A',
        orden: 1,
        swstate: 1
    };

    try {
        
        
        const totalEstaciona = await Estacionamiento.findAll({
            where: {
                codlocal: codigo
            }
        });

        newEstacionamiento.orden = totalEstaciona.length+1;

        const usuario = Estacionamiento.build( newEstacionamiento );
        await usuario.save();

        return res.json({
            success:true, message: 'OK', data:'Estacionamiento creado.'  
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'NO OK', data:'Comuniquese con el administrador.'})
    }
}
