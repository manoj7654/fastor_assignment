
// <-----------------importing mongose for creating connection -------------->
const mongoose=require("mongoose");
require("dotenv").config()

// <---------------making connection------------------------->
const connection=mongoose.connect(process.env.mongoUrl)

// <----------exporting connection ---------------------->
module.exports={connection}