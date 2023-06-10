const User = require("./models/User");
const { json } = require("express");
const express = require("express");
const app = express();
const dbConnect = require("./db/connect");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(json());

app.get("/api/v1/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// app.get("/api/v1/users/:id", (req, res) => {
//   res.json({
//     id: req.params.id,
//   });
// });

app.post("/api/v1/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening on Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
