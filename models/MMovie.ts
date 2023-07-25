import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MMovie = sequelize.define(
  "movie",
  {
    // allowNull: false est l'équivalent de require true
    id: {
      type: DataTypes.STRING({ length: 100 }),
      autoIncrement: false,
      primaryKey: true,
    },
    Actors: { type: DataTypes.STRING },
    BoxOffices: { type: DataTypes.STRING },
    Country: { type: DataTypes.STRING },
    Director: { type: DataTypes.STRING },
    Genre: { type: DataTypes.STRING },
    Language: { type: DataTypes.STRING },
    Plot: { type: DataTypes.TEXT },
    Poster: { type: DataTypes.STRING },
    Rated: { type: DataTypes.STRING },
    // Ratings(tableau d’objet)
    Released: { type: DataTypes.STRING },
    RunTime: { type: DataTypes.STRING },
    Title: { type: DataTypes.STRING },
    Type: { type: DataTypes.STRING },
    Year: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);
