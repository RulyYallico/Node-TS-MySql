import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';

const Prueba3 = db.define('prueba3', {
    p3:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.NUMBER,
    }
},{
    freezeTableName: true
});


export default Prueba3;
