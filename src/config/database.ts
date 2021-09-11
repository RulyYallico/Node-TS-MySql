import * as mysql from 'mysql2/promise';

export async function connect(){
    
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'travelcar',
        connectionLimit: 10
    });
    
    return connection;

}
