import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import Estacionamiento from './estacionamiento.models';
import Users from './user.models';

const Reservas = db.define('reservas', {
    codreservas:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    codestacionamiento:{
        type: DataTypes.NUMBER
    },
    codusers:{
        type:DataTypes.NUMBER
    },
    Placa:{
        type: DataTypes.STRING
    }, 
    reservado:{
        type: DataTypes.STRING
    },
    ingreso:{
        type: DataTypes.STRING
    },
    costo:{
        type: DataTypes.STRING
    },
    salida:{
        type: DataTypes.STRING
    }, 
    DNI:{
        type: DataTypes.NUMBER
    }, 
    Telefono:{
        type: DataTypes.NUMBER
    }, 
    sw_state:{
        type: DataTypes.NUMBER
    }
},{
    freezeTableName: true,
    timestamps: false
});

Reservas.hasMany(Users, { foreignKey: 'codusers', sourceKey: "codusers" });
Users.belongsTo(Reservas, { foreignKey: 'codusers', targetKey: "codusers" });

Reservas.hasMany(Estacionamiento, { foreignKey: 'codestacionamiento', sourceKey: "codestacionamiento" });
Estacionamiento.belongsTo(Reservas, { foreignKey: "codestacionamiento", targetKey: "codestacionamiento" });

export default Reservas;