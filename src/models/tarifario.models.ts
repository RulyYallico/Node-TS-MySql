import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';

const Tarifarios = db.define('tarifarios', {
    codtarifarios:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    codlocal:{
        type: DataTypes.NUMBER,
    }, 
    order:{
        type: DataTypes.NUMBER,
    }, 
    tipo:{
        type: DataTypes.NUMBER,
    }, 
    detalle:{
        type: DataTypes.STRING,
    }, 
    precio:{
        type: DataTypes.DECIMAL,
    }, 
    sw_state:{
        type: DataTypes.NUMBER,
    }
},{
    freezeTableName: true
});


export default Tarifarios;