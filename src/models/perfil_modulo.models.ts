import { DataTypes } from 'sequelize';
import db from '../config/conecction';
import ProfilesUser from './perfil.models';
import AccessModulos from './modulo_models';

const AccessPerfilModulo = db.define('access_perfil_modulo', {
    codperfil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: ProfilesUser,
            key: 'codprofiles'
        }
    }, 
    codmodulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: AccessModulos,
            key: 'codmodulos'
        }
    }, 
    swstate: {
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

/*
ProfilesUser.belongsToMany(AccessModulos, { through: AccessPerfilModulo, foreignKey: 'codperfil' });
AccessModulos.belongsToMany(ProfilesUser, { through: AccessPerfilModulo, foreignKey: 'codmodulo' });
*/


export default AccessPerfilModulo;