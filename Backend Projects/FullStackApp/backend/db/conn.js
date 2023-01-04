const mongoose = require('mongoose');

const database =  process.env.DATABASE;

mongoose
.connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("connection succesfull");
})
.catch((err) => {
  console.log("no connection");
});
