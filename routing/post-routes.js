const {getAllPosts, addPost} = require("../controllers/post-controllers");
const postRouter = require("express").Router();

postRouter.get("/", getAllPosts );
postRouter.post("/", addPost);

module.exports = postRouter;