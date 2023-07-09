const express = require('express');
const authController = require('../controller/authController');
const router = express.Router();
const user = require('../models/user');

router.get('/test',(req,res) => res.json({msg:'Working!'}));

router.post('/register',authController.register);

router.get('/userlist',async function(req,res){
    const users = await user.find();
    res.json(users);
});

router.post('/login',authController.login);



module.exports = router;