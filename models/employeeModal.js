const mongoose=require("mongoose")

const empployeeSchema=mongoose.Schema({

    email:{type:String,require:true},
    password:{type:String,require:true}
   
},{
    versionKey:false,
})


const Employeemodel=mongoose.model("employee",empployeeSchema)

module.exports={Employeemodel}