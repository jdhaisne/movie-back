import {sequelize}  from '../db';
import {DataTypes } from 'sequelize'

   export const Movie = sequelize.define('movie', {
        // allowNull: false est l'équivalent de require true
        Actors : { type: DataTypes.STRING },
        BoxOffices :{ type: DataTypes.STRING },
        Country : { type: DataTypes.STRING},
        Director : { type: DataTypes.STRING},
        Genre : { type: DataTypes.STRING}, 
        Language : { type: DataTypes.STRING},
        Plot : { type: DataTypes.TEXT},
        Poster :{ type: DataTypes.STRING},
        Rated :{ type: DataTypes.STRING},
        // Ratings(tableau d’objet)
        Released :{ type: DataTypes.STRING},
        RunTime :{ type: DataTypes.STRING}, 
        Title :{ type: DataTypes.STRING},
        Type :{ type: DataTypes.STRING},
        Year :{ type: DataTypes.STRING},
        ImdbID: {type: DataTypes.TEXT}
    },{
        timestamps: false,
    })

