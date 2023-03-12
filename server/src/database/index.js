const mysql = require("mysql2");
const config = require("../config");
const dbConfig = config.db;

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

const getDB = () => connection;

module.exports = getDB;
