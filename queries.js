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
  const { trailID, name, city, state, lat, lng, distance } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "Trails" SET "name" = '${name}', "city" = '${city}', "state" = '${state}', "lat" = ${lat}, "lng" = ${lng}, "distance" = ${distance} WHERE "trailID"=${trailID};`,
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
  const { userID, userName, contact, experienceLevel } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "Users" SET "userName" = '${userName}', "contact" = '${contact}', "experienceLevel" = ${experienceLevel} WHERE "userID" = ${userID};`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const getReviews = (request, response) => {
  pool.query('SELECT * FROM "Reviews"', (error, results) => {
    if (error) {
      throw error;
    }
    response.send(results.rows);
  });
};

const addReview = (request, response) => {
  const { enjoyability, difficulty, description, userID, trailID } = request;
  console.log(request, "request");
  var nullableUserID = userID;
  if(nullableUserID == 0) nullableUserID = null;
  pool.query(
    `INSERT INTO "Reviews" ("enjoyability", "difficulty", "description", "userID", "trailID") VALUES ('${enjoyability}', '${difficulty}', '${description}', ${nullableUserID}, ${trailID});`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const deleteReview = (request, response) => {
  pool.query(
    `DELETE FROM "Reviews" WHERE "reviewID" ='${request.reviewID}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const editReview = (request, response) => {
  const { reviewID, enjoyability, difficulty, description, userID, trailID } =
    request;
  console.log(request, "editReview");
  var nullableUserID = userID;
  if(nullableUserID == 0) nullableUserID = null;
  pool.query(
    `UPDATE "Reviews" SET "enjoyability" = '${enjoyability}', "difficulty" = '${difficulty}', "description" = '${description}', "userID" = ${nullableUserID}, "trailID" = ${trailID} WHERE "reviewID"=${reviewID};`,
    (err, res) => {
      if (err) {
        throw err;
      }
      response.send(res);
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

const addMap = (request, response) => {
  const { title, url } = request;
  console.log(request, "request");
  pool.query(
    `INSERT INTO "Maps" ("title", "url") VALUES ('${title}', '${url}');`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const deleteMap = (request, response) => {
  pool.query(
    `DELETE FROM "Maps" WHERE "mapID" ='${request.mapID}'`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const editMap = (request, response) => {
  const { mapID, title, url } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "Maps" SET "title" = '${title}', "url" = '${url}' WHERE "mapID" = ${mapID};`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const getTrailMaps = (request, response) => {
  pool.query('SELECT * FROM "TrailMaps"', (error, results) => {
    if (error) {
      throw error;
    }
    response.send(results.rows);
  });
};

const addTrailMap = (request, response) => {
  const { trailID, mapID } = request;
  console.log(request, "request");
  pool.query(
    `INSERT INTO "TrailMaps" ("trailID", "mapID") VALUES (${trailID}, ${mapID});`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const deleteTrailMap = (request, response) => {
  console.log(request, "request");
  pool.query(
    `DELETE FROM "TrailMaps" WHERE "trailID" ='${request.trailID}' AND "mapID" = ${request.mapID}`,
    (error, result) => {
      if (error) {
        throw error;
      }
      response.send(result);
    }
  );
};

const editTrailMap = (request, response) => {
  const { newTrailID, newMapID, trailID, mapID } = request;
  console.log(request, "request");
  pool.query(
    `UPDATE "TrailMaps" SET "trailID" = ${newTrailID}, "mapID" = ${newMapID} WHERE "trailID" = ${trailID} AND "mapID" = ${mapID};`,
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
  editUser,
  getTrails,
  addTrail,
  deleteTrail,
  editTrail,
  getMaps,
  addMap,
  deleteMap,
  editMap,
  getReviews,
  addReview,
  deleteReview,
  editReview,
  getTrailMaps,
  addTrailMap,
  deleteTrailMap,
  editTrailMap,
};
