const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  if (!posts) {
    return res.status(500).json({ message: "Something unexpected happened" });
  } else {
    return res.status(200).json({posts});
  }
}

module.exports = { getAllPosts };