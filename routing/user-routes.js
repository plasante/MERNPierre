const {getAllUsers, signup, login} = require("../controllers/user-controllers");
const userRouter = require("express").Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;