const getDB = require("./index");

function runQuery(query, ...values) {
  return new Promise((resolve, reject) => {
    getDB().query(query, values, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

module.exports = runQuery;
