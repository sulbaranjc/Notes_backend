const userCtrl = {};

const User = require("../models/user");

userCtrl.getUser = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.json("User Created");
};

userCtrl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted");
};

module.exports = userCtrl;
