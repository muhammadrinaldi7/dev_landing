import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});
db.connect(err => {
  if(err) throw "error koneksi",err;
  console.log('success konek');
})

export default db;

