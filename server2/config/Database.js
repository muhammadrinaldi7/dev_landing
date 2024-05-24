import { Sequelize } from "sequelize";

const db = new Sequelize( {
  database:process.env.DB_NAME,
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
});

export default db;