const { getAllPosts, addPost, getPost, updatePost, deletePost } = require("../controllers/post-controllers");
const postRouter = require("express").Router();

postRouter.get("/", getAllPosts );
postRouter.post("/", addPost );
postRouter.get("/:id", getPost );
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;