import {sequelize}  from '../db';
import {DataTypes } from 'sequelize'

   export const MMovie = sequelize.define('movie', {
        // allowNull: false est l'équivalent de require true
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        actors : { type: DataTypes.STRING },
        boxOffices :{ type: DataTypes.STRING },
        country : { type: DataTypes.STRING},
        director : { type: DataTypes.STRING},
        genre : { type: DataTypes.STRING}, 
        language : { type: DataTypes.STRING},
        plot : { type: DataTypes.TEXT},
        poster :{ type: DataTypes.STRING},
        rated :{ type: DataTypes.STRING},
        // Ratings(tableau d’objet)
        released :{ type: DataTypes.STRING},
        runTime :{ type: DataTypes.STRING}, 
        title :{ type: DataTypes.STRING},
        type :{ type: DataTypes.STRING},
        year :{ type: DataTypes.STRING},
        imdbID: {type: DataTypes.TEXT}
    },{
        timestamps: false,
    })

