const Joi = require("joi");
const User = require("../models/user");

const updateUserData = {
  async updateData(req, res){
    const { cnic } = req.params;

    try {
      // Find the user by CNIC
      const user = await User.findOne({ cnic });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }else{
        const updatedUser = await User.findOneAndUpdate(
          {cnic:cnic},
          req.body,
          {new:true}
          );
        return res.json({
          message: "User updated successfully",
          // user: updatedUser,
        });
      }

    } catch (error) {
      console.error("Error updating user:", error.message);
      return res.status(500).json({ message: "Error updating user" });
    }
  },
  async updatePassword(req, res){
    const { email } = req.params;

    try {
      // Find the user by CNIC
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }else{
        const updatedUser = await User.findOneAndUpdate(
          {email:email},
          req.body,
          {new:true}
          );
        return res.json({
          message: "Password updated successfully",
          // user: updatedUser,
        });
      }

    } catch (error) {
      console.error("Error updating Password:", error.message);
      return res.status(500).json({ message: "Error updating Password" });
    }
  },
};

module.exports = updateUserData;
