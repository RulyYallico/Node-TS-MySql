import { Request, Response } from 'express';
import Users from '../models/user.models';
import { Util } from '../config/util';

// LIST ALL USERS
export const getUserAll = async (req:Request, res:Response): Promise<Response> => {
    const usuarios = await Users.findAll();
    if (!usuarios) 
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros' });
    return res.json({success:true, message:'OK', data: usuarios} );
}

// LIST USER TO ID
export const getUserId = async (req:Request, res:Response): Promise<Response> => {
    const userId = req.params.userId;
    const usuario = await Users.findByPk( userId );
    if (!usuario) 
        return res.status(404).json({success:false, message: 'NO OK', data:'No se encontraron registros'});
    return res.json( usuario );
}

// CREATE USER
export const postUser = async(req:Request, res: Response) => {
    const newUser = {
        codusers: req.body.codusers,
        codprofile: req.body.codprofile,
        surname: req.body.surname,
        names: req.body.names,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    };
    const util = new Util();
    newUser.password = await util.encriptData(req.body.password);

    try {

        const existsUser = await Users.findOne({
            where: {
                email: req.body.email
            }
        })

        if(existsUser){
            return res.json({
                success:false, message: 'NO OK', data:'Ya existe un usuario con el email.' + req.body.email
            })
        }
        
        const usuario = Users.build( newUser );
        await usuario.save();

        return res.json({
            success:true, message: 'OK', data:'Usuario creado, Puede iniciar sesión.'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'NO OK', data:'Comuniquese con el administrador.'})
    }
}




export const updateUser = async (req:Request, res: Response) => {
    
    const id  = req.params;
    const idUser = req.params.userId;
    const body = req.body;

    const newUser = {
        nick_name: req.body.nickname,
        surname: req.body.surname,
        names: req.body.names,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    };

    console.log(id);
    console.log(body);
    try {

        const user = await Users.findByPk( idUser );

        if (!user) {
            return res.json({
                success:false, message: 'NO OK', data:'No existe el usuario con el id: ', idUser
            });
        }

        await user.update( newUser, { where: id } );

        res.json({
            success:true, message: 'OK', data:'Usuario actualizado.' // , myuser: user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'NO OK', data:'Comuniquese con el administrador.'})
    }

}