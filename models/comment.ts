import {sequelize}  from '../db';
import {DataTypes } from 'sequelize'

   export const Comment = sequelize.define('comment', {
        // allowNull: false est l'équivalent de require true
        Message : {type: DataTypes.TEXT},
        Id: {type: DataTypes.STRING({ length: 100 }), autoIncrement: false, primaryKey:true},
        UserId : {type: DataTypes.STRING({ length: 100 })},
        TopicId : {type: DataTypes.STRING({ length: 100 })},
    },{
        timestamps: false,
    })