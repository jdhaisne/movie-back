import {sequelize}  from '../db';
import {DataTypes } from 'sequelize'

   export const MComment = sequelize.define('comment', {
        // allowNull: false est l'équivalent de require true
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        message : {type: DataTypes.TEXT},
        userId : {type: DataTypes.STRING({ length: 100 })},
        topicId : {type: DataTypes.STRING({ length: 100 })},
    },{
        timestamps: false,
    })