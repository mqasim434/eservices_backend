const express = require('express');
const authController = require('../controller/authController');
const userDataController = require('../controller/userDataController');
const educationalDataController = require('../controller/educationalDataController');
const router = express.Router();
const user = require('../models/user');
const Dropdown = require('../models/dropdowns');
const complaintController = require('../controller/complaintController');
const templateController = require('../controller/templateController');
const applicationController = require('../controller/applicationController');

router.post('/register',authController.register);

router.get('/getUser/:cnic', authController.getUser);

router.post('/login',authController.login);

router.patch('/update/:cnic',userDataController.updateData);

router.post('/addEducationData',educationalDataController.addEducationData);

router.get('/getEducationData/:cnic',educationalDataController.getEducationData);

router.patch('/updateEducationData/:userCnic',educationalDataController.updateEducationData);

router.delete('/deleteEducationData/:cnic/:id',educationalDataController.deleteEducationData);

router.post('/addComplaint',complaintController.addComplaint);

router.get('/getComplaint/:cnic',complaintController.getComplaints);

router.post('/submitApplication',applicationController.submitApplication);

router.get('/getApplications/:userCnic',applicationController.getApplications);

router.get('/getDropdowns',async function(req,res){
    try {
        const dropdowns = await Dropdown.findOne({});
        
        if (!dropdowns) {
          return res.status(404).json({ message: 'Data not found' });
        }
    
        res.json(dropdowns);
      } catch (error) {  
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

router.get('/getTemplates',templateController.getTemplates);

router.get('/userlist',async function(req,res){
    const users = await user.find();
    res.json(users);
});


module.exports = router;