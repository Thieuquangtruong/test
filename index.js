const express = require("express");
const { connectToDb, db } = require("./db");

const app = express();
const router = require("./router");
app.use("/router", router);

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});