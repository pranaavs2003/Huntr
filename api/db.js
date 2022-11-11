import mysql from "mysql";

const db = mysql.createConnection({
  host: "b84yepj3dqkrqdnyqwye-mysql.services.clever-cloud.com",
  user: "u9wxhvldtq3rusya",
  password: "w16vrJBERJtyX4iWGZxl",
  database: "b84yepj3dqkrqdnyqwye",
  multipleStatements: true,
});

export default db;
