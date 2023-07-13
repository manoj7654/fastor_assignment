const express=require("express")
const employeeRouter=express.Router()
const { register, login } = require("../controller/employee.controller")



employeeRouter.post("/register",register)

employeeRouter.post("/login",login)

module.exports={employeeRouter}