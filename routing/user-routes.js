const {getAllUsers, signup} = require("../controllers/user-controllers");
const userRouter = require("express").Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);

module.exports = userRouter;