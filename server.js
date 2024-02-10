require("dotenv").config();

const express = require("express");
const workoutRouters = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json()); //transefer data accepts from body to req parameter
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRouters);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("DB connected and listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
