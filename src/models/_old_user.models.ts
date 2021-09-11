import { IAuth, IUsers } from '../interfaces/user.interface';
import bcrypt from 'bcryptjs';


export class User implements IUsers{
    codusers?: number | undefined;
    codprofile: number;
    surname: string;
    names: string;
    email: string;
    password: string;
    phone: number;
    sw_state: number;

    constructor(_codusers:number,_codprofile:number,_surname:string,_names:string,_email:string,_password:string,_phone:number,_sw_state:number){
        this.codusers = _codusers;
        this.codprofile = _codprofile;
        this.surname = _surname;
        this.names = _names;
        this.email = _email;
        this.password = _password;
        this.phone = _phone;
        this.sw_state = _sw_state;
    }
    

    async encryptPassport(passport: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(passport, salt);
    }

}


export class Singin implements IAuth{
    email: string;
    password: string;

    constructor(_email:string, _password:string){
        this.email = _email;
        this.password = _password;
    }


    async validatePassword(passport: string): Promise<boolean> {
        return await bcrypt.compare(passport,this.password);
    }

    
}