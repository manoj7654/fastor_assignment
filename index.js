const express=require("express")
const app=express()
require("dotenv").config()
const {connection}=require("./config/db")

const {employeeRouter}=require("./routes/employeeRouter")


// const { authenticate } = require("./middleware/authentication")
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("WELCOME TO THE HOME PAGE OF THIS API")
})

app.use("/user",employeeRouter)

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