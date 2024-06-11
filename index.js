const express = require("express");
const bodyParser = require("body-parser");
// const session = require('express-session');
// const fs = require('fs');

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: true,
//   }),
// );

app.get("/", (req, res) => {
  res.render("helloworld");
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
