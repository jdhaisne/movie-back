import { sequelize } from "../db";
import { DataTypes } from "sequelize";
import { MMovie } from "./MMovie";
import {MUser} from "./MUser"


export const MLike = sequelize.define(
  "like",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.STRING({ length: 100 }) },
    movieId: { type: DataTypes.STRING({ length: 100 }) },
  },
  {
    timestamps: false,
  }
);


  // MMovie.belongsToMany(MUser, {through: MLike})
  // MUser.belongsToMany(MMovie, {through: MLike})

