const { Pool } = require("pg");
const pool = new Pool();

// Add items into tableware
async function createTableware(tableware) {
  await pool.query("insert into tableware (name, qty) values($1, $2)", [
    tableware.name,
    tableware.qty,
  ]);
}
// Read items in tableware
async function readTableware(id) {
  const res = await pool.query("select * from tableware where id = $1", [id]);
  return res.rows[0];
}

// Read/list all items in tableware
async function readAllTableware() {
  const res = await pool.query("select name, qty from tableware");
  return res.rows;
}

// Update item on tableware
async function updateTableware(id, tableware) {
  await pool.query(
    "update tableware set name = $2, qty = $3, office_id= $4 where id = $1",
    [id, tableware.name, tableware.qty, tableware.office_id]
  );
}

// Delete tableware
async function deleteTableware(id) {
  const res = await pool.query("delete from tableware where id = $1", [id]);
  return res.rows;
}

// Create office
async function createOffice(office) {
  await pool.query(
    "insert into office (name, location, starting_year) values ($1, $2, $3);",
    [office.name, office.location, office.starting_year]
  );
}

// Read office
async function readOffice(id) {
  const res = await pool.query("select * from office where id = $1", [id]);
  return res.rows[0];
}

// Read all offices
async function readAllOffices() {
  const res = await pool.query(
    "select name, location, starting_year from office"
  );
  return res.rows;
}

// Update item on office
async function updateOffice(id, office) {
  await pool.query(
    "update office set name = $2, location = $3, starting_year= $4 where id = $1",
    [id, office.name, office.location, office.starting_year]
  );
}

// Delete item from office
async function deleteOffice(id) {
  const res = await pool.query("delete from office where id = $1", [id]);
  return res.rows;
}

module.exports = {
  createTableware,
  readTableware,
  readAllTableware,
  updateTableware,
  deleteTableware,
  createOffice,
  readOffice,
  readAllOffices,
  updateOffice,
  deleteOffice,
};
