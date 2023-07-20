import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MLike = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.STRING({ length: 100 }) },
  movieId: { type: DataTypes.STRING({ length: 100 }) },
});
