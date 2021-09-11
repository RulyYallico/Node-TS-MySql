import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import Prueba1 from './prueba1.model';

const Prueba2 = db.define('prueba2', {
    p2:{
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.NUMBER,
    }
},{
    freezeTableName: true
});

// Prueba2.belongsTo(Prueba1, { foreignKey: "p2", targetKey: "p2" });
// Prueba1.hasMany(Prueba2, { foreignKey: "p2", sourceKey: "p2" });

export default Prueba2;
