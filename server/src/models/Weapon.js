const runQuery = require("../database/runQuery");

async function findAll() {
  try {
    const query = "SELECT * FROM weapons";
    const result = runQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
}

async function getOne(id) {
  const query = `SELECT * FROM weapons WHERE id=?`;

  try {
    const result = await runQuery(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

async function createOne({ name, color, material }) {
  const query = `INSERT INTO weapons(name, color, material)
  VALUES(?, ?, ?)`;

  try {
    const result = await runQuery(query, name, color, material);
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteOneById(id) {
  const query = "DELETE FROM weapons WHERE id = ?";
  try {
    const result = await runQuery(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateOneById(id, options = {}) {
  let filedToUpdate = "";
  for (const key in options) {
    filedToUpdate += `${key} = ?,`;
  }
  filedToUpdate = filedToUpdate.slice(0, -1);
  const valuesToUpdate = Object.values(options);
  valuesToUpdate.push(+id);
  const query = `UPDATE weapons SET ${filedToUpdate} WHERE id = ?`;

  try {
    const result = await runQuery(query, ...valuesToUpdate);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, createOne, deleteOneById, updateOneById, getOne };
