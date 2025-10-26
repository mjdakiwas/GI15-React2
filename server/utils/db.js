import mysql from "mysql2";
import "dotenv/config";

const pool = mysql.createPool(process.env.MYSQL_PUBLIC_URL).promise();

export default pool;
