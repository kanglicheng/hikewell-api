const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "db.qpbxvieyupoknstmdnur.supabase.co",
  database: "postgres",
  port: 6543,
  password: "hikewell2020!",
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM "Users"', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    return results.rows;
  });
};

module.exports = {
  getUsers,
};
