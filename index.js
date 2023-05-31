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
