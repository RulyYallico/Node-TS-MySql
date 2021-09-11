import dotenv from "dotenv";
import { Server } from './models/server.models';

dotenv.config();
// console.log(process.env.TESTING);

async function main(){
    const app = new Server(3100);
    await app.listen();
}

main();
