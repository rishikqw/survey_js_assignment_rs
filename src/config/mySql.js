import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectionParams = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const db = mysql.createConnection(connectionParams);

db.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

export default db;
