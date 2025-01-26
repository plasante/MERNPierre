const {getAllUsers} = require("../controllers/user-controllers");
const userRouter = require("express").Router();

userRouter.get("/", getAllUsers);

// userRouter.get("/", (req, res) => {
//   res.send("User route is working");
// });

module.exports = userRouter;