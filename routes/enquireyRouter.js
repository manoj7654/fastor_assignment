// <-----------------importing express ------------------>
const express=require("express")

// <----------------creating enquiry router -------------->
const enquiryRouter=express.Router()

// <------------------importing from contorller ------------------>
const { addEnquiry,getAllEnquiry,claimEnquiry, getClaimEnquiry} = require("../controller/enquiry.controller")

// <----------------importing authentication for privacy------------------->
const { authenticate } = require("../middleware/authenticate")


//<--------------------post enquiry-------------->
enquiryRouter.post("/addEnquiry",addEnquiry)

// <---------------------get all unclcaimed enquiry---------------->
enquiryRouter.get("/getAllEnquiry",authenticate,getAllEnquiry)

// <-------------------for making claimed enquiry--------------->
enquiryRouter.patch("/:id/claim",authenticate,claimEnquiry)

// <--------------------for getting all claimed  enquiry ------------>
enquiryRouter.get("/claimEnquiry",authenticate,getClaimEnquiry)


// <-------------exporting enquiry router------------------>
module.exports={enquiryRouter}