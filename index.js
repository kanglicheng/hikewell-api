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
