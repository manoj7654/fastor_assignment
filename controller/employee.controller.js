// <-----------------importing bcrypt for hashing password--------------------->
const bcrypt = require("bcrypt");

// <----------------importing jwt for generating token ------------------------->
const jwt = require("jsonwebtoken");

// <-----------------importing model for performing operation -------------------->
const {Employeemodel}=require("../models/employeeModal")

// <--------------dotenv for accessing port no from env file--------------->
require("dotenv").config();


// <-------------------register for employee------------------>
const register = async (req, res) => {

const {email,password}=req.body
    try {
         // Input validation - check that name, email, and password are present in the request body
    if (!email  || !password) {
      return res.status(400).json({
        message: "Name, mobile,email and password are required.",
      });
    }
        const check=await Employeemodel.find({email})
        // <----------here checking if employee is already register or not ----------------->
        if(check.length>0){
            return res.status(400).json({"message":"User already exist"})
        }
        // <------------hashing password------------------>
        bcrypt.hash(password, 5, async(err, secure_password)=> {
           if(err){
            console.log(err)
           }else{
            const user=new Employeemodel({email,password:secure_password});
            await user.save();
            res.status(201).json({"message":"Account Created successfully"})
           }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({"message":"Getting error while creating account"})
    }
};



// <---------------login for employee----------------------->
const login = async (req, res) => {

const {email,password}=req.body;
    try {
          // Input validation -/check that email and password are present in  body
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required." });
    }
    // <--------------checking here user length not equal to 0 ------------------->
        const user=await Employeemodel.find({email})
        if(user.length>0){

            // <--------------------here comparing password for loging-------------------->
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){

                    // <-------------generating token ------------------------>
                    const token=jwt.sign({employeeId:user[0]._id},process.env.key );
                    res.status(201).json({"token":token,"message":"Login Successfuly"})
                }else{
                    res.status(401).json({"message":"Either email or password mistmatch"})
                }
            });
        }else{
            res.status(401).json("Wrong credential")
        }
    } catch (err) {
        console.log(err);
         res.status(500).json({"err":"Getting err while loging"})
    }
};

// <-------------exporting login,register--------------------------->
module.exports = {
  login,
  register,
};