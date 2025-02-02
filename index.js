const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routing/user-routes");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// To make sure express has started
app.get('/', (req, res, next) => {
  return res.send('Welcome to the server Pierre!');
})

// middlewares
app.use("/user", userRouter);

// connections to MongoDB
mongoose.connect(
  `mongodb+srv://plasante:${process.env.MONGODB_PASSWORD}@cluster0.enctu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() =>
  app.listen(5000, () => console.log('Connection Successfull to MongoDB & Listening on port 5000.'))
)
.catch((err) => console.log(err));



