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
    response.send(results.rows);
  });
};

const addUser = (request, response) => {
  const { userName, contact, experienceLevel } = request;
  pool.query(
    `INSERT INTO "Users" ("userName", "contact", "experienceLevel") VALUES ('${userName}', '${contact}', '${experienceLevel}')`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const deleteUser = (request, response) => {
  pool.query(
    `DELETE FROM "Users" WHERE userID ='${request.userID}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
};
