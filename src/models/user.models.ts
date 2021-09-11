import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/conecction';

const Users = db.define('users', {
    codusers: {
        type: DataTypes.INTEGER,
        primaryKey: true
        // autoIncrement: true
    }, 
    codprofile: {
        type:DataTypes.INTEGER
    }, 
    surname: {
        type:DataTypes.STRING
    },  
    names: {
        type:DataTypes.STRING
    },  
    nick_name: {
        type:DataTypes.STRING
    }, 
    address: {
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    }, 
    password: {
        type:DataTypes.STRING
    }, 
    phone: {
        type:DataTypes.STRING
    }, 
    picture: {
        type:DataTypes.STRING
    },  
    coddepartament: {
        type:DataTypes.INTEGER
    }, 
    codprovince: {
        type:DataTypes.INTEGER
    }, 
    coddistrict: {
        type:DataTypes.INTEGER
    }, 
    sw_state: {
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Users;