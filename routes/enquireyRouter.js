const express=require("express")
const enquiryRouter=express.Router()
const { addEnquiry,getAllEnquiry,claimEnquiry} = require("../controller/enquiry.controller")
const { authenticate } = require("../middleware/authenticate")



enquiryRouter.post("/addEnquiry",addEnquiry)

enquiryRouter.get("/getAllEnquiry",getAllEnquiry)

enquiryRouter.patch("/:id/claim",authenticate,claimEnquiry)

module.exports={enquiryRouter}