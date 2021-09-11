import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import Estacionamiento from './estacionamiento.models';

const Locales = db.define('locales', {
    codlocal:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    nomlocal:{
        type: DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    picture:{
        type: DataTypes.STRING
    }, 
    swstate:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Locales;