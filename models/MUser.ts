import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const MUser = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    lastName: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    passWord: { type: DataTypes.STRING },
    birthDate: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

// role: { type: DataTypes.STRING, allowNull: false },
