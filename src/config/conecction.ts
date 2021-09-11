import { Sequelize } from 'sequelize';


// const db = new Sequelize('puertadi_travelcar', 'puertadi_ruly', '(=F_hC*aFI[Q', {
//     host: 'localhost',
//     dialect: 'mysql'
//     // logging: false
// });

const db = new Sequelize('travelcar', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
    // logging: false
});

export default db;