import { Request, Response } from 'express';
import Profile  from '../models/profile.models';

// LISTA PERFILES
export function getProfile(req:Request, res:Response){
    return res.json({
        message: "Lista de perfiles"
    });
}

// CREATE USER
export const PostProfile = async (req:Request, res:Response) => {
    // const newProfile = new Profile;
    // const newProfile: Profile = req.body;
    // const newProfile: IProfile = new Profile(_codprofile);
    // newProfile.picture = await newProfile.encryptPassport(newProfile.picture);
    // console.log(newProfile.imprimeNombre("Ruly"));
    // console.log(newProfile);
    
    const newPro = new Profile(req.body.codprofiles, req.body.name, req.body.picture, req.body.sw_state);
    newPro.picture = await newPro.encryptPassport(newPro.picture);
    console.log(newPro);
    return res.json({
        message: 'Profile created'
    });
}


