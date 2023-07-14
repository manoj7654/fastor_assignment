// <-----------------importing express ------------------>
const express=require("express")

// <------------creating employee router------------------->
const employeeRouter=express.Router()

// <-------------importing register,loging --------------------->
const { register, login } = require("../controller/employee.controller")


// <--------for register--------------->
employeeRouter.post("/register",register)

// <----------------for login----------------->
employeeRouter.post("/login",login)


// <------------exporting employeeRouter------------->
module.exports={employeeRouter}