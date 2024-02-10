const Workout = require("../models/workoutmodels");
const mongoose =require('mongoose')

//get all workouts
const getworkouts = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get a single workout
const getworkout = async (req, res) => {
  const { id } = req.params; // re.params is object we are destructuring the id from it
   
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'no such workout'})
  }
  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "workout doesn't exist" }); //why return b/c we want to stop the execution
    }

    res.status(200).json(workout);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create a new workout
const createworkout = async (req, res) => {
  const { title, reps, loads } = req.body;

  try {
    const workout = await Workout.create({ title, reps, loads });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update  workout

//delete a single workout

//delete all workout

module.exports = {
  createworkout,
  getworkouts,
  getworkout,
}; //{ cre , lkf} used to export d/nt tasks  like cre, lkf
