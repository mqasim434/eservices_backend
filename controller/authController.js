const Joi = require("joi");
const User = require("../models/user");
const express = require("express");


const authController = {
  async register(req, res, next) {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      identityType: req.body.identityType,
      cnic: req.body.cnic,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.password,
    });
    await newUser.save();
    res.json({ message: "New User Created" });
  },

  async login(req, res) {
    try {
      const { cnic, password } = req.body;
  
      // Find the user by CNIC
      const user = await User.findOne({ cnic });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the stored password
      if(password==user.password){
        isPasswordMatch = true;
      }
      else{
        isPasswordMatch = false;
      }
  
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid CNIC or password' });
      }
  
      // Return success message or additional data if needed
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'An error occurred during login' });
    }
  },
};

module.exports = authController;
