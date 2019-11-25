/* eslint-disable no-undef */
const { join } = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const cors = require("cors");
const users = require("./src/data/userList");
const likeAndComments = require("./src/data/likeAndComments");

app.use(cors());
app.use(bodyParser());
app.use(express.static(join(__dirname, "dist")));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
app.use(multer({ storage: storage }).single("file"));

app.get("/*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.post("/addPost", (req, res) => {
  res.sendfile(req.file);
  res.sendStatus(200);
});

app.post("/postUser", (req, res) => {
  users.push(req.body);
  res.sendStatus(200);
});

app.put("/checkUser", (req, res) => {
  users.filter(
    item =>
      item.user.email == req.body.login &&
      item.user.password == req.body.password
  );
  res.sendStatus(200);
});

app.post("/addComment", (req, res) => {
  likeAndComments[1].comments[req.body.postID].push([
    req.body.user,
    req.body.comment
  ]);
  res.sendStatus(200);
});

app.listen(3000, () => console.log("port 3000"));
