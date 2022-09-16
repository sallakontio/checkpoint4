const { Pool } = require("pg");
const pool = new Pool();

async function createTableware(tableware) {
  await pool.query("insert into tableware (name, qty) values($1, $2)", [
    tableware.name,
    tableware.qty,
  ]);
}

async function readTableware(id) {
  const res = await pool.query("select * from tableware where id = $1", [id]);
  return res.rows[0];
}

async function readAllTableware() {
  const res = await pool.query("select name, qty from tableware");
  return res.rows;
}
module.exports = {
  createTableware,
  readTableware,
  readAllTableware,
};
