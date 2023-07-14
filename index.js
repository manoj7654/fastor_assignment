// <-----------------importing express ------------------>
const express=require("express")

// <----------------creating app --------------------->
const app=express()

// <--------------dotenv for accessing port no from env file--------------->

require("dotenv").config()

// <--------------importing connection---------------------->
const {connection}=require("./config/db")

// <---------------importing employee router and enquiry router ------------------------->
const {employeeRouter}=require("./routes/employeeRouter")
const { enquiryRouter } = require("./routes/enquireyRouter")


// <---------------middleware--------------------------->
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("WELCOME TO THE HOME PAGE OF THIS API")
})

// <--------------------employeeRouter----------------------->
app.use("/user",employeeRouter)

// <--------------------enquiryRouter------------------------->
app.use("/enquiry",enquiryRouter)


// <------------------server is listening on specific port---------------------------->
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log(`Server is running on port no ${process.env.port}`)
})