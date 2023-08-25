const Complaint = require("../models/complaint");

const complaintController = {
    async addComplaint(req,res){
        console.log(req.body.fullName);
        const newComplaint = new Complaint({
            service: req.body.service,
            fullName: req.body.fullName,
            phoneNo: req.body.phoneNo,
            applicationId: req.body.applicationId,
            searchBy: req.body.searchBy,
            cnic: req.body.cnic,
            issue: req.body.issue,
          });
          await newComplaint.save();
          res.json({ message: "New Complaint Added" });
    },


    async getComplaints(req,res){
        const cnic = req.params.cnic;
        const complaints = await Complaint.find({cnic});
    
        if (!complaints || complaints.length==0) {
          return res.status(404).json({ message: 'Complaint not found' });
        }
        else{
          res.send(complaints);
        }
        // res.send(cnic);
      }
};

module.exports = complaintController;