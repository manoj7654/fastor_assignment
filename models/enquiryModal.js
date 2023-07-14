const mongoose=require("mongoose")

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    courseInterest: { type: String, required: true },
    claimedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', default: null },
    });
    

    const EnquiryModel = mongoose.model('Enquiry', enquirySchema);

    module.exports={
        EnquiryModel
    }