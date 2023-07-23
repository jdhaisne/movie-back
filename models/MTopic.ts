import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MTopic = sequelize.define(
  "topic",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING({ length: 100 }) },
    // allowNull: false est l'équivalent de require true
    subject: { type: DataTypes.TEXT },
    // Image : {type: DataTypes.TEXT},
    movieId: { type: DataTypes.STRING({ length: 100 }) },
    type: { type: DataTypes.STRING({ length: 100 }) },
    userId: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);

//#j'ai créé userId pour le modèle, et je l'ai ajouté dans phpMyAdmin.
//#J'ai ajouté une route dans CTopic + RTopic
