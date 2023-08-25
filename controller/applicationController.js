const Application = require('../models/application');

const applicationController = {
    async submitApplication(req, res){
        try {
          const userData = req.body;
          const newUser = await User.create(userData);
          res.status(201).json(newUser);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error creating user' });
        }
    }
}