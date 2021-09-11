import { IProfile } from '../interfaces/profile.inteface';
import bcrypt from 'bcryptjs';

class Profile implements IProfile {
    codprofiles: number;
    name: string;
    picture: string;
    sw_state: number;

    constructor(_codProfile: number, _name: string, _picture: string, _sw_state:number){
        this.codprofiles = _codProfile;
        this.name = _name;
        this.picture = _picture;
        this.sw_state = _sw_state;
    }

    async encryptPassport(passport: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(passport, salt);
    }

    imprimeNombre(){
        // return `${this.codprofiles} owes ${this.name} for ${this.picture} and ${this.sw_state}`;
        return "probando";
    }

}


export default Profile;