import {sequelize}  from '../db';
import {DataTypes } from 'sequelize'

   export const Topic = sequelize.define('topic', {
        // allowNull: false est l'équivalent de require true
        Subject : {type: DataTypes.TEXT},
        Image : {type: DataTypes.TEXT},
        Id: {type: DataTypes.STRING({ length: 100 }), autoIncrement: false, primaryKey:true},
        MovieId : {type: DataTypes.STRING({ length: 100 })},
    },{
        timestamps: false,
    })