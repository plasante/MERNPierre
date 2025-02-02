const User = require("../models/User");
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  if (!users) {
    return res.status(401).json({ message: "Something unexpected happened" });
  } else {
    return res.status(200).json(users);
  }
}

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || name.trim() === "" || !email || email.trim() === "" || !password || password.length < 6) {
    return res.status(422).json({message: "Invalid Data"});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let user;
  try {
    user = new User({email, name, password: hashedPassword});
    await user.save();
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }

  if (!user) {
    return res.status(500).json({ message: "Unexpected Error" });
  }

  return res.status(201).json(user);
}

module.exports = { getAllUsers, signup };