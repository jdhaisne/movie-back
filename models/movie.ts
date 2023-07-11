import { sequelize } from "../db";
import { DataTypes } from "sequelize";

// export const Movie = DataTypes.init({
//     // allowNull: false est l'équivalent de require true
//     actors : { type: DataTypes.STRING },
//     BoxOffices :{ type: DataTypes.STRING },
//     Country : { type: DataTypes.STRING,allowNull: false },
//     Director : { type: DataTypes.STRING,allowNull: false  },
//     Genre : { type: DataTypes.STRING,allowNull: false  },
//     Language : { type: DataTypes.STRING,allowNull: false  },
//     Plot : { type: DataTypes.TEXT,allowNull: false  },
//     // Poster :{ type: DataTypes.STRING }, require true
//     Rated :{ type: DataTypes.STRING,allowNull: false  },
//     // Ratings(tableau d’objet)
//     Released :{ type: DataTypes.STRING,allowNull: false  },
//     RunTime :{ type: DataTypes.STRING,allowNull: false  },
//     Title :{ type: DataTypes.STRING,allowNull: false  },
//     Type :{ type: DataTypes.STRING,allowNull: false  },
//     Year :{ type: DataTypes.STRING,allowNull: false  },
//     ImdbID: {type: DataTypes.INTEGER,allowNull: false }
//     },
//     {
//         sequelize,
//         modelName: 'movie',
//     }
//     )

export const Movie = sequelize.define("movie", {
  //    export const Movie = sequelize.define('movie', {
  // allowNull: false est l'équivalent de require true
  actors: { type: DataTypes.STRING },
  BoxOffices: { type: DataTypes.STRING },
  Country: { type: DataTypes.STRING, allowNull: false },
  Director: { type: DataTypes.STRING, allowNull: false },
  Genre: { type: DataTypes.STRING, allowNull: false },
  Language: { type: DataTypes.STRING, allowNull: false },
  Plot: { type: DataTypes.TEXT, allowNull: false },
  // Poster :{ type: DataTypes.STRING }, require true
  Rated: { type: DataTypes.STRING, allowNull: false },
  // Ratings(tableau d’objet)
  Released: { type: DataTypes.STRING, allowNull: false },
  RunTime: { type: DataTypes.STRING, allowNull: false },
  Title: { type: DataTypes.STRING, allowNull: false },
  Type: { type: DataTypes.STRING, allowNull: false },
  Year: { type: DataTypes.STRING, allowNull: false },
  ImdbID: { type: DataTypes.INTEGER, allowNull: false },
});
