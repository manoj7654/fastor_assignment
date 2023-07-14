// <-------------importing jwt ------------------>
const jwt=require("jsonwebtoken")

// <--------------dotenv for accessing port no from env file--------------->
require("dotenv").config()

// <----------------creating authentication middleware------------------>
const authenticate=(req,res,next)=>{

    // <-------------getting token from headers
    const token=req.headers.authorization
    if(token){

        // <-----------veriry token---------------->
        const decode=jwt.verify(token,process.env.key)
        if(decode){
            const userId=decode.employeeId
            req.body.employeeId=userId
            next()
        }else{
            res.send({message:"Please Login Again"})
        }
       
    }else{
        res.send({message:"Please Login First"})
    }

}
module.exports={authenticate}