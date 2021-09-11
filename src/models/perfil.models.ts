import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/conecction';

const ProfilesUser = db.define('profiles_user', {
    codprofiles: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    name: {
        type:DataTypes.STRING
    }, 
    picture: {
        type:DataTypes.STRING
    }, 
    sw_state:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default ProfilesUser;