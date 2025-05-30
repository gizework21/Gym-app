const express =require('express')
const mongoose=require('mongoose')

const Schema= mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type: Number,
        required:true
    },
    loads:{
        type:Number,
        required:true
    }
},{timestamps: true})

module.exports=mongoose.model('workout',workoutSchema); //workout is the collection name of the database