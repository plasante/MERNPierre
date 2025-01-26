const User = require("../models/User");

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

module.exports = { getAllUsers };