const User = require("./models/User");
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
  res.json({
    id: req.params.id,
  });
});

app.post("/api/v1/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
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
