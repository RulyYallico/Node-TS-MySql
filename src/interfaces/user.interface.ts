export interface IUsers {
    codusers?: number;
    codprofile: number;
    surname: string;
    names: string;
    // nick_name: string;
    email: string;
    password: string;
    // birth_date: Date;
    // home_address: string;
    // picture?: string;
    // coddepartament: number;
    // codprovince: number;
    // coddistrict: number;
    sw_state: number;
    // created?: Date;
    // updated?: Date;
    encryptPassport(passport: string): Promise<string>;
}


export interface IAuth {
    // nick_name: string;
    email: string;
    password: string;
    validatePassword(passport: string): Promise<boolean>; 
}


