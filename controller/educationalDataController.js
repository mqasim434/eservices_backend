const EducationDetails = require("../models/educationDetails");

const educationDataController = {
    async updateEducationData(req, res){
      const {userCnic} = req.params;
      try {
        // Find the user by CNIC
        const educationData = await EducationDetails.findOne({ userCnic:userCnic });
  
        if (!educationData) {
          return res.status(404).json({ message: "Education Data not found" });
        }else{
          const updatedData = await EducationDetails.findOneAndUpdate(
            {userCnic:userCnic},
            req.body,
            {new:true}
            );
          return res.json({
            message: "Education Data updated successfully",
            // user: updatedUser,
          });
        }
        
      } catch (error) {
        console.error("Error updating Education Data:", error.message);
        return res.status(500).json({ message: "Error updating Education Data" });
      }
    },

    
    async addEducationData(req,res){
      try{
      const newData = new EducationDetails({
        userCnic: req.body.userCnic,
        qualificationLevel: req.body.qualificationLevel,
        education: req.body.education,
        startDate: req.body.startDate,
        currentlyEnrolled: req.body.currentlyEnrolled,
        expectedEndDate: req.body.expectedEndDate,
        nameOnDegree: req.body.nameOnDegree,
        country: req.body.country,
        degreeAwardInstitute: req.body.degreeAwardInstitute,
        programTitle: req.body.programTitle,
        universityName: req.body.universityName,
        campus: req.body.campus,
        department: req.body.department,
        degreeType: req.body.degreeType,
        sessionType: req.body.sessionType,
        areaOfResearch: req.body.areaOfResearch,
        rollNo: req.body.rollNo,
      });
      await newData.save();
      res.json({ message: "Education Data Added Created" });
    }
    catch(e){
      console.log(e);
    }
  }
  };
  
  module.exports = educationDataController;
  