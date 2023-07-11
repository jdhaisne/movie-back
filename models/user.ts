import { sequelize } from "../db";
import { DataTypes } from "sequelize";

export const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  lastName: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  mail: { type: DataTypes.STRING, allowNull: false },
  passWord: { type: DataTypes.STRING, allowNull: false },
  birthDate: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});
