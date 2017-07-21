require("dotenv").config();
const admin = require("./firebase-admin");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//------------SERVER AND DATABASE SETUP---------------------///

const db = admin.database();
const app = express();

let rootPath = path.normalize(__dirname + "/../../");
app.use(express.static(rootPath + "/app"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.APP_PORT || 8080;
const host = process.env.APP_HOST || "127.0.0.1";

//------------CONTROLLERS----------------------------------///

app.get("/data/associates", async function(req, res) {
  const data = await db.ref("associates").once("value");
  res.json(data.val());
});
app.get("/data/associates/:id", async function(req, res) {
  const data = await db.ref("associates").once("value");
  res.json(data.val());
});
app.get("/data/teams", async function(req, res) {
  const data = await db.ref("teams").once("value");
  res.json(data.val());
});
app.get("/data/projects", async function(req, res) {
  const data = await db.ref("projects").once("value");
  res.json(data.val());
});
app.get("/data/stories", async function(req, res) {
  const data = await db.ref("stories").once("value");
  res.json(data.val());
});

app.get("*", function(req, res) {
  res.sendFile(rootPath + "/app/index.html");
});

app.listen(port, host);

console.log(`Server listening at ${host}:${port}`);
