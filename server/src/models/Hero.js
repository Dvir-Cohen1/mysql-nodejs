const runQuery = require("../database/runQuery");

async function findAll() {
  try {
    const query = "SELECT * FROM heroes";
    const result = runQuery(query);
    return result;
  } catch (error) {
    throw error;
  }
}

async function getOne(id) {
  // split the query into two separate queries instead of using JOIN for optimizing : We then use Promise.all() to run both queries in parallel and wait for both to complete.
  const heroQuery = `SELECT id, name, created_at, modify_at FROM heroes WHERE id = ?`;
  const weaponQuery = `
       SELECT weapons.id as weapon_id, weapons.name as weapon_name,
              weapons.material as weapon_material, weapons.color as weapon_color,
              weapons.created_at as weapon_created_at,
              weapons.modified_at as weapon_modified_at
       FROM weapons 
       WHERE weapons.id IN (SELECT weapon_id FROM heroes WHERE id = ?)
     `;

  try {
    const [heroResult, weaponResult] = await Promise.all([
      runQuery(heroQuery, id),
      runQuery(weaponQuery, id),
    ]);

    const hero = {
      id: heroResult[0].id,
      name: heroResult[0].name,
      created_at: heroResult[0].created_at,
      modify_at: heroResult[0].modify_at,
      weapons: weaponResult.map((row) => ({
        id: row.weapon_id,
        name: row.weapon_name,
        material: row.weapon_material,
        color: row.weapon_color,
        created_at: row.weapon_created_at,
        modified_at: row.weapon_modified_at,
      })),
    };

    return hero;
  } catch (error) {
    throw error;
  }
}

async function deleteOne(id) {
  const query = `DELETE FROM heroes WHERE id = ?`;

  try {
    const result = await runQuery(query, id);
    return result;
  } catch (error) {
    throw error;
  }
}

async function createOne({ name, weapon_id }) {
  const query = `INSERT INTO heroes(name,weapon_id) VALUES(?, ?)`;

  try {
    const result = await runQuery(query, name, weapon_id);
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
  const query = `UPDATE heroes SET ${filedToUpdate} WHERE id = ?`;

  try {
    const result = await runQuery(query, ...valuesToUpdate);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { findAll, getOne, createOne, deleteOne, updateOneById };
