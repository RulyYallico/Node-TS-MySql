import bcrypt from 'bcryptjs';

export class Util {
    
    async encriptData(data: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(data, salt);
    }

    async validaPassword(password: string, passwordBD: string): Promise<boolean> {
        return await bcrypt.compare(password, passwordBD);
    }

}


