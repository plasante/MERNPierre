const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routing/user-routes");

const app = express();
dotenv.config();

// To make sure express has started
app.get('/', (req, res, next) => {
  return res.send('Welcome to the server Pierrot!');
})

// middlewares
app.use("/user", userRouter);


// connections to MongoDBB
mongoose.connect(
  `mongodb+srv://plasante:${process.env.MONGODB_PASSWORD}@cluster0.enctu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() =>
  app.listen(5000, () => console.log('Connection Successfull to MongoDB & Listening on port 5000.'))
)
.catch((err) => console.log(err));



