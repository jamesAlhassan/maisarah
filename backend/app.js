const { json } = require("express");
const express = require("express");
const app = express();
const dbConnect = require("./db/connect");
require("dotenv").config();

app.use(json());

app.get("/api/v1/users", (req, res) => {
  res.send("All users");
});

app.get("/api/v1/users/:id", (req, res) => {
  res.send(" user");
});

app.post("/api/v1/users", (req, res) => {
  res.send("post users");
});
const port = 3000;

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
