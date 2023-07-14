
const {EnquiryModel}=require("../models/enquiryModal")


// <--------------------Creating enquiry publicly ----------------------->
const addEnquiry=async(req,res)=>{
    try {
        const { name, email, courseInterest } = req.body;
        const enquiry = new EnquiryModel({ name, email, courseInterest });
        await enquiry.save()
        res.status(201).json({"message":"Enquiry created successfull"});
        } catch (error) {
        res.status(500).json({ message: 'Error creating enquiry', error });
        }
}

// <---------------------------getting all unclaimed enquiry by logged in employee------------>
const getAllEnquiry=async(req,res)=>{
    try {
        const enquiries = await EnquiryModel.find({ claimedBy: null });
        res.json(enquiries);
        } catch (error) {
        res.status(500).json({ message: 'Error getting enquiries', error });
        }
        
}

// <----------------------claiming enquiry by logged in employee---------------------->
const claimEnquiry=async(req,res)=>{
    try {
        const { id } = req.params;
        const { employeeId } = req.body;
        const enquiry = await EnquiryModel.findByIdAndUpdate(id, { claimedBy: employeeId });
        if (!enquiry) {
        return res.status(404).json({ message: 'Enquiry not found' });
        }
        res.json({"message":"Enquiry is claimed"});
        } catch (error) {
        res.status(500).json({ message: 'Error claiming enquiry', error });
        }
}

// <------------------getting all claimed enquiry by loggedin employee---------->
const getClaimEnquiry=async(req,res)=>{
    try {
        const employeeId=req.body.employeeId
        const enquiry=await EnquiryModel.find({claimedBy:employeeId})
        res.status(200).json(enquiry)
    } catch (error) {
        res.status(500).json({ message: 'Error in getting claim enquiry', error });
    }
}

module.exports={
    addEnquiry,
    getAllEnquiry,
    claimEnquiry,
    getClaimEnquiry
}