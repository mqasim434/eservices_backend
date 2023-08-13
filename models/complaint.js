const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
    {
        service: {
            type: String,
        },
        fullName: {
            type: String,
        },
        phoneNo: {
            type: String,
        },
        applicationId: {
            type: String,
        },
        searchBy: {
            type: String,
        },
        cnic: {
            type: String,
        },
        issue: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Complaint = mongoose.model("Complaint", complaintSchema, "complaints");

module.exports = Complaint;


