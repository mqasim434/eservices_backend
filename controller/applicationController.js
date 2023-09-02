const Application = require('../models/application');

const applicationController = {
    async submitApplication(req, res){
        try {
          const applicationData = req.body;
          const newApplication = await Application.create(applicationData);
          res.status(200).json(newApplication);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating user' });
        }
    },
    async getApplications(req,res){
      const { userCnic } = req.params;
      try{
        const applications = await Application.find({userCnic:userCnic});
        if(applications){
          res.json(applications);
        }
      }
      catch(error){
        res.status(500).json({error: "Error getting data"});
      }
    }
}

module.exports = applicationController;