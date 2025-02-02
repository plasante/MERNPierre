const Post = require("../models/Post");
const req = require("express/lib/request");
const res = require("express/lib/response");

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

const addPost = async (req, res) => {
  // Destructure the request.body
  const { title, description, location, date, image, user } = req.body;

  // Validate the parameters inside the body (undefined null empty)
  if (
    isNullOrEmpty(title) ||
    isNullOrEmpty(description) ||
    isNullOrEmpty(location) ||
    isNullOrEmpty(date) ||
    isNullOrEmpty(image) ||
    isNullOrEmpty(user)
  )
  {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Save the new Post
  const newPost = new Post({ title, description, location, date: new Date(`${date}`), image, user });
    try {
      const savedPost = await newPost.save();

      if (!savedPost) {
        return res.status(500).json({ message: "Failed to save post" });
      } else {
        return res.status(201).json(savedPost);
      }

    } catch (err) {
      return res.status(400).json({ message: err.message });
    }

}

const getPost  = async (req, res) => {
  const id = req.params.id;

  let post;

  try {
    // Get a document by id in a collection
    post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      return res.status(200).json(post);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

function isNullOrEmpty(str) {
  return !str || str.trim() === "";
}

module.exports = { getAllPosts, addPost, getPost };