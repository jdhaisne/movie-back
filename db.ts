import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  database: "lesrescapes",
  username: "lesrescapes",
  password: "lesrescapes",
  host: "edouardclisson.fr",
  dialect: "mysql",
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
