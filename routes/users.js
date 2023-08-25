const express = require('express');
const authController = require('../controller/authController');
const userDataController = require('../controller/userDataController');
const educationalDataController = require('../controller/educationalDataController');
const router = express.Router();
const user = require('../models/user');
const complaintController = require('../controller/complaintController');

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


router.get('/userlist',async function(req,res){
    const users = await user.find();
    res.json(users);
});


module.exports = router;