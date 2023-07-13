const mongoose=require("mongoose")

const empployeeSchema=mongoose.Schema({
    name:{type:String, require:true},
    mobile:{type:Number,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
   
},{
    versionKey:false,
})


const Employeemodel=mongoose.model("users",empployeeSchema)

module.exports={Employeemodel}