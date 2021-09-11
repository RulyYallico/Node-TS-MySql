import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import Prueba2 from './prueba2.model';

const Prueba1 = db.define('prueba1', {
    p1:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    p2:{
        type: DataTypes.NUMBER,
    }, 
    p3:{
        type: DataTypes.NUMBER,
    }, 
    nombre:{
        type: DataTypes.NUMBER,
    }
},{
    freezeTableName: true
});

Prueba1.hasMany(Prueba2, { foreignKey: "p2", sourceKey: "p2" });
Prueba2.belongsTo(Prueba1, { foreignKey: "p2", targetKey: "p2" });

export default Prueba1;
