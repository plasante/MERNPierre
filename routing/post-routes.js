const { getAllPosts, addPost, getPost } = require("../controllers/post-controllers");
const postRouter = require("express").Router();

postRouter.get("/", getAllPosts );
postRouter.post("/", addPost );
postRouter.get("/:id", getPost );

module.exports = postRouter;