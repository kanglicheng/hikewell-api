const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;
const db = require("./queries");
const cors = require("cors");

app.get("/", (req, res) => res.type("html").send(html));

app.use(
  cors({
    origin: "*",
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/users", db.getUsers);

app.post("/addUser", function (req, res) {
  const userName = req.body.userName;
  const contact = req.body.contact;
  const experienceLevel = req.body.experienceLevel;
  db.addUser(
    {
      userName: userName,
      contact: contact,
      experienceLevel: experienceLevel,
    },
    res
  );
});

app.post("/deleteUser", function (req, res) {
  db.deleteUser({ userID: req.body.userID }, res);
});

app.put("/editUser", function (req, res) {
  const userName = req.body.userName;
  const contact = req.body.contact;
  const experienceLevel = req.body.experienceLevel;
  db.editUser(
    {
      userName: userName,
      contact: contact,
      experienceLevel: experienceLevel,
    },
    res
  );
});

app.get("/trails", db.getTrails);

app.post("/addTrail", function (req, res) {
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const lat = req.body.lat;
  const lng = req.body.lng;
  const distance = req.body.distance;
  db.addTrail(
    {
      name: name,
      city: city,
      state: state,
      lat: lat,
      lng: lng,
      distance: distance,
    },
    res
  );
});

app.post("/deleteTrail", function (req, res) {
  db.deleteTrail({ trailID: req.body.trailID }, res);
});

app.put("/editTrail", function (req, res) {
  const trailID = req.body.trailID;
  const name = req.body.name;
  const city = req.body.city;
  const state = req.body.state;
  const lat = req.body.lat;
  const lng = req.body.lng;
  const distance = req.body.distance;
  db.editTrail(
    {
      trailID: trailID,
      name: name,
      city: city,
      state: state,
      lat: lat,
      lng: lng,
      distance: distance,
    },
    res
  );
});

app.get("/maps", db.getMaps);

app.get("/trailMaps", db.getTrailMaps);

app.post("/addMap", function (req, res) {
  const title = req.body.title;
  const url = req.body.url;
  db.addMap(
    {
      title: title,
      url: url,
    },
    res
  );
});

app.post("/deleteMap", function (req, res) {
  db.deleteMap({ mapID: req.body.mapID }, res);
});

app.get("/reviews", db.getReviews);

app.post("/addReview", function (req, res) {
  const enjoyability = req.body.enjoyability;
  const difficulty = req.body.difficulty;
  const description = req.body.description;
  const userID = req.body.userID;
  const trailID = req.body.trailID;
  db.addReview(
    {
      enjoyability: req.body.enjoyability,
      difficulty: req.body.difficulty,
      description: req.body.description,
      userID: req.body.userID,
      trailID: req.body.trailID,
    },
    res
  );
});

app.post("/deleteReview", function (req, res) {
  db.deleteReview({ reviewID: req.body.reviewID }, res);
});

app.get("/trailMaps", db.getTrailMaps);

app.post("/addTrailMap", function (req, res) {
  const trailID = req.body.trailID;
  const mapID = req.body.mapID;
  db.addTrailMap(
    {
      trailID: trailID,
      mapID: mapID,
    },
    res
  );
});

app.post("/deleteTrailMap", function (req, res) {
  db.deleteTrailMap({ trailID: req.body.trailID }, res);
});

app.put("/editTrailMap", function (req, res) {
  const userName = req.body.userName;
  const contact = req.body.contact;
  const experienceLevel = req.body.experienceLevel;
  db.editUser(
    {
      userName: userName,
      contact: contact,
      experienceLevel: experienceLevel,
    },
    res
  );
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
  </head>
  <body>
    <div>Hello! </div>
  </body>
</html>
`;
