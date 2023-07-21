import { sequelize } from "../db";
import { DataTypes } from "sequelize";
import { v4 as uuid4 } from "uuid";

export const MMovie = sequelize.define(
  "movie",
  {
    // allowNull: false est l'équivalent de require true
    id: {
      type: DataTypes.STRING({ length: 100 }),
      autoIncrement: false,
      primaryKey: true,
    },
    actors: { type: DataTypes.STRING },
    boxOffices: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    director: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
    language: { type: DataTypes.STRING },
    plot: { type: DataTypes.TEXT },
    poster: { type: DataTypes.STRING },
    rated: { type: DataTypes.STRING },
    // Ratings(tableau d’objet)
    released: { type: DataTypes.STRING },
    runTime: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    year: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);
