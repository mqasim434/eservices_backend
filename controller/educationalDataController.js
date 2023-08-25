const EducationDetails = require("../models/educationDetails");

const educationDataController = {
  async updateEducationData(req, res) {
    const { userCnic } = req.params;
    try {
      // Find the user by CNIC
      const educationData = await EducationDetails.findOne({
        userCnic: userCnic,
      });

      if (!educationData) {
        return res.status(404).json({ message: "Education Data not found" });
      } else {
        const updatedData = await EducationDetails.findOneAndUpdate(
          { userCnic: userCnic },
          req.body,
          { new: true }
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

  async addEducationData(req, res) {
    try {
      const newData = new EducationDetails({
        recordId: req.body.recordId,
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
    } catch (e) {
      console.log(e);
    }
  },

  async getEducationData(req, res) {
    try {
      const cnic = req.params.cnic;

      // Find all users with the provided CNIC
      const educationDetails = await EducationDetails.find({ userCnic: cnic });

      if (!educationDetails || educationDetails.length === 0) {
        return res
          .status(404)
          .json({ message: "No Record found with the given CNIC" });
      }

      // Return the array of user data
      return res.json(educationDetails);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // DELETE endpoint to delete an education record by CNIC and record ID
  async deleteEducationData(req, res) {
    const cnic = req.params.cnic;
    const recordId = req.params.recordId;

    try {
      // Find the education record by CNIC and record ID
      const educationRecord = await EducationDetails.findOneAndDelete({
        cnic: cnic,
        recordId: recordId,
      });

      if (!educationRecord) {
        return res.status(404).json({ message: "Education record not found" });
      }

      res.status(204).send(); // Respond with a 204 No Content status code if successful
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = educationDataController;
