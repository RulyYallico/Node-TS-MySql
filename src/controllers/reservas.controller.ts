import { Request, Response } from 'express';
import moment from 'moment';
import { Sequelize, Op, Model } from 'sequelize';
import sequelize from 'sequelize/types/lib/sequelize';
import Estacionamiento from '../models/estacionamiento.models';
import Locales from '../models/locales.models';
import Reservas from '../models/reservas.models';
import Users from '../models/user.models';

// LIST ALL RESERVA
export const getReservaAll = async (req:Request, res:Response): Promise<Response> => {

    const reserva = await Reservas.findAll();
    if (!reserva) 
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: reserva} );
}

// CREATE RESERVA
export const postReserva = async (req:Request, res:Response) => {
    console.log(req.body);
    const codEstacionamiento = req.body.codestacionamiento;
    const newReservation = {
        codestacionamiento: req.body.codestacionamiento,
        codusers: req.body.codusers,
        Placa: req.body.Placa,
        reservado: req.body.reservado,
        // DNI: req.body.DNI,
        // Telefono: req.body.Telefono,
        costo: req.body.costo,
        sw_state: 1
    }
    
    try {

        await Estacionamiento.update(
            { 
                swstate: 2
            },
            { 
                where : {codestacionamiento: codEstacionamiento}
            });

        const reserva = Reservas.build( newReservation );
        await reserva.save();
        return res.json({ success:true, message: 'OK',  data:'Reserva realizada.', myuser: newReservation });

    } catch (error) {
        return res.json({ success:false, message: 'NO OK',  data:'Reserva realizada.', myuser: newReservation });
    }

}



// CONFIRMA RESERVA
export const putConfirmaReserva = async (req:Request, res:Response) => {

    const codEstacionamiento = req.params.id;
    const idTipo = req.body.codTipo;
    const fInicio = moment(req.body.fInicio).format('YYYY-MM-DD HH:mm'); 
    // const dateNow = moment().format('YYYY-MM-DD HH:mm');
    const dateNow = moment("2021-08-25 20:32").format('YYYY-MM-DD HH:mm');


    let textMsj = "";
    try {
    
        if (idTipo == 3) {
            textMsj = "Estacionamiento reservado.";
            
            await Estacionamiento.update( 
                { swstate: idTipo }, 
                { where : {codestacionamiento: codEstacionamiento} }
            );

            await Reservas.update( 
                { ingreso: dateNow }, 
                { where : {
                    codestacionamiento: codEstacionamiento,
                    sw_state: 1
                    } 
                }
            );

        } else if (idTipo == 1){
            textMsj = "Estacionamiento disponible.";
            await Estacionamiento.update( 
                { swstate: idTipo }, 
                { where : {codestacionamiento: codEstacionamiento} }
            );

            await Reservas.update(
                { sw_state: 0, salida: dateNow },
                { where: { codestacionamiento: codEstacionamiento } }
            );

        } else if(idTipo == 5) {
            textMsj = "Se calculó el precio de la reserva";

            
            const duration = moment.duration(moment(dateNow).diff(fInicio));
            const dias = duration.asDays();
            const horas = duration.asHours();
            const mins = duration.asMinutes();

            await Estacionamiento.update( 
                { swstate: idTipo }, 
                { where : {codestacionamiento: codEstacionamiento} }
            );

            await Reservas.update(
                { salida: dateNow },
                { where: { sw_state: 1, codestacionamiento: codEstacionamiento } }
            );

        } else {
            textMsj = "No se realizó ningun cambio..";
        }
        
        res.json({ success:true, message: 'OK', data:textMsj });
        
    } catch (error) {
        res.json({ success:false, message: 'NO OK', data:'Error al confirmar la reserva.' });
    }

}


// LIST RESERVATION FOR ID
export const getReservaId = async (req:Request, res:Response): Promise<Response> => {
    const idSede = req.params.id;
    // console.log(idSede);
    const reserva = await Estacionamiento.findAll({
        attributes: ['codestacionamiento','codlocal','swstate'], 
        include:
        [
            {
                model: Reservas,
                attributes: [
                'reservado', 'costo'
                // [sequelize.fn('date_format', sequelize.col('reservado'), '%Y-%m-%d'), 'date_col_formed']
                ,'ingreso','salida','DNI','Telefono'],
                where: { sw_state: 1 },
                required:false
                ,include: [{
                    model: Users,
                    attributes: ['names', 'surname'],
                    where: { sw_state: 1 },
                    required:false
                }]
            }, 
            {
                model: Locales,
                attributes: ['nomlocal'],
                where: {swstate: 1 },
                required: false
            }
        ],
        where: {
            codlocal: idSede
        },
        raw: true
    });
    if (!reserva) 
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json( reserva );
}





export const getReporteCliente = async (req:Request, res:Response): Promise<Response> => {

    const idUser = req.body.idUser;
    const Inicio = req.body.ini;
    const Fin = req.body.fin;
    console.log(req.body);
    
    const result = await Reservas.findAll( {
        attributes: ['placa','costo', 'ingreso', 'salida'],
        include: [
            {
                model: Estacionamiento,
                attributes: ['codestacionamiento'],
                required: false,
                include: [{
                    model: Locales,
                    attributes: ['nomlocal']
                }]
            }
        ],
        where: {
            codusers: idUser,
            reservado: {
                [Op.gte]: Inicio,
                [Op.lte]: Fin
            }
        },
        raw: true
    }
    );
    
    if(!result)
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json( result );
    
}


