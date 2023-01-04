const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// this query is used for avoid mongoose deprecation warrning
mongoose.set("strictQuery", false);

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());
// used for parse json data

//link router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// middleware
const middleware = (req, res, next) => {
  console.log("my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("Hello world from the server");
// });

app.get("/about", middleware, (req, res) => {
  console.log("about page");
  res.send("Hello about world from the server");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact world from the server");
});

app.get("/signin", (req, res) => {
  res.send("Hello signin world from the server");
});

app.get("/signup", (req, res) => {
  res.send("Hello signup world from the server");
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
