import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import Locales from './locales.models';
import Reservas from './reservas.models';

const Estacionamiento = db.define('estacionamientos', {
    codestacionamiento:{
        type: DataTypes.NUMBER,
        primaryKey: true
    }, 
    codlocal:{
        type: DataTypes.NUMBER
    },
    sector:{
        type:DataTypes.STRING
    },
    orden:{
        type: DataTypes.NUMBER
    },
    swstate:{
        type: DataTypes.NUMBER
    }
},{
    freezeTableName: true,
    timestamps: false
});


Locales.hasMany(Estacionamiento, { foreignKey: 'codlocal', sourceKey: "codlocal" });
Estacionamiento.belongsTo(Locales, { foreignKey: 'codlocal', targetKey: "codlocal" });

export default Estacionamiento;