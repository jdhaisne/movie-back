import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MRating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.STRING({ length: 100 }) },
  movieID: { type: DataTypes.STRING({ length: 100 }) },
  rating: { type: DataTypes.INTEGER },
});
