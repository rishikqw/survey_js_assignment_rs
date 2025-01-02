import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connectionParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db = mysql.createConnection(connectionParams);

db.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

export default db;
