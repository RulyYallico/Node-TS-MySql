export interface IProfile {
    codprofiles: number; 
    name: string;
    picture: string;
    sw_state: number;
    encryptPassport(passport: string): Promise<string>;
    imprimeNombre(a: string): string;
}

