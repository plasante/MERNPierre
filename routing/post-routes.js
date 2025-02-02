const {getAllPosts} = require("../controllers/post-controllers");
const postRouter = require("express").Router();

postRouter.get("/", getAllPosts );

module.exports = postRouter;