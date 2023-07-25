import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MTopic = sequelize.define(
  "topic",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING({ length: 100 }) },
    subject: { type: DataTypes.TEXT },
    movieId: { type: DataTypes.STRING({ length: 100 }) },
    type: { type: DataTypes.STRING({ length: 100 }) },
    userId: { type: DataTypes.STRING({ length: 100 }) },
    img : { type: DataTypes.STRING({ length: 200 }) },
    userName: { type: DataTypes.STRING({ length: 100 }) },
  },
  {
    timestamps: false,
  }
);

//#j'ai créé userId pour le modèle, et je l'ai ajouté dans phpMyAdmin.
//#J'ai ajouté une route dans CTopic + RTopic
