import { DataTypes, Model } from 'sequelize';
import db from '../config/conecction';
import AccessPerfilModulo from '../models/perfil_modulo.models';

const AccessModulos = db.define('access_modulos', {
    codmodulos: {
        type: DataTypes.INTEGER,
        primaryKey: true
        // ,autoIncrement: true
    }, 
    picture: {
        type:DataTypes.STRING
    }, 
    name: {
        type:DataTypes.STRING
    }, 
    description: {
        type:DataTypes.STRING
    }, 
    extension: {
        type:DataTypes.STRING
    }, 
    swstate: {
        type:DataTypes.INTEGER
    }

},{
    freezeTableName: true
});

AccessModulos.hasMany(AccessPerfilModulo, {
    foreignKey: 'codmodulo', 
});
AccessPerfilModulo.belongsTo(AccessModulos, {
    foreignKey: 'codmodulo'
});

// Ship.belongsTo(Captain, { targetKey: 'name', foreignKey: 'captainName' });

export default AccessModulos;