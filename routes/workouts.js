const express =require('express');
const Workout=require('../models/workoutmodels')
const {createworkout, getworkouts, getworkout}=require('../controllers/workoutcontrollers') //{createworkout,dkfk} destructuring different tasks from controllers

const router=express.Router()

//get all workouts
router.get('/', getworkouts)

//get a single workout
router.get('/:id', getworkout)

//create a new workout
router.post('/', createworkout )

//update a workout
router.patch('/:id', (req,res)=>{
    res.json({mssg: 'update a workout'})
})

//delete a single workout
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'deletes a single workout'})
})


module.exports=router