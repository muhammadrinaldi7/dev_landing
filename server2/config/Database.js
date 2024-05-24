import { Sequelize } from "sequelize";

const db = new Sequelize("db_mbnew", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

