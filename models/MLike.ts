import { sequelize } from "../db";
import { DataTypes } from "sequelize";
import { MMovie } from "./MMovie";
import {MUser} from "./MUser"

export const MLike = sequelize.define("like", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, references: {
    model: MUser,
    key: 'id'
  }},
  movieId: { type: DataTypes.INTEGER, references: {
    model: MMovie,
    key: 'id'
  }},
});

  MMovie.belongsToMany(MUser, {through: MLike})
  MUser.belongsToMany(MMovie, {through: MLike})