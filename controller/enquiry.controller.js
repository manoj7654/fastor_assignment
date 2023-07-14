
const {EnquiryModel}=require("../models/enquiryModal")

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


const getAllEnquiry=async(req,res)=>{
    try {
        const enquiries = await EnquiryModel.find({ claimedBy: null });
        res.json(enquiries);
        } catch (error) {
        res.status(500).json({ message: 'Error getting enquiries', error });
        }
        
}


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

module.exports={
    addEnquiry,
    getAllEnquiry,
    claimEnquiry
}