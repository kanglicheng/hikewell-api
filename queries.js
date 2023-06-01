const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "db.qpbxvieyupoknstmdnur.supabase.co",
  database: "postgres",
  port: 6543,
  password: "hikewell2020!",
});

const getTrails = (request, response) => {
  pool.query('SELECT * FROM "Trails"', (error, results) => {
    if (error) {
      throw error;
    }
    response.send(results.rows);
  });
};

const addTrail = (request, response) => {
  const { name, city, state, lat, lng, distance } = request;
  console.log(request, "request");
  pool.query(
    `INSERT INTO "Trails" ("name", "city", "state", "lat", "lng", "distance") VALUES ('${name}', '${city}', '${state}', ${lat}, ${lng}, ${distance});`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const deleteTrail = (request, response) => {
  pool.query(
    `DELETE FROM "Trails" WHERE "trailID" ='${request.trailID}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const editTrail = (request, response) => {
  const { name, city, state, lat, lng, distance } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "Trails" SET "name" = '${name}', "city" = '${city}', "state" = '${state}', "lat" = ${lat}, "lng" = ${lng}, "distance" = ${distance};`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

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
  console.log(request, "request");
  pool.query(
    `INSERT INTO "Users" ("userName", "contact", "experienceLevel") VALUES ('${userName}', '${contact}', ${experienceLevel});`,
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
    `DELETE FROM "Users" WHERE "userID" ='${request.userID}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const editUser = (request, response) => {
  const { userName, contact, experienceLevel } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "Users" SET "userName" = '${userName}', "contact" = '${contact}', "experienceLevel" = ${experienceLevel}, "userID" = '${request.userID}';`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const getMaps = (request, response) => {
  pool.query('SELECT * FROM "Maps"', (error, results) => {
    if (error) {
      throw error;
    }
    response.send(results.rows);
  });
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
  getTrails,
  addTrail,
  deleteTrail,
  editTrail,
  getMaps,
};
