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
const port = process.env.PORT || 5000;
mongoose.connect(
  `mongodb+srv://plasante:${process.env.MONGODB_PASSWORD}@cluster0.enctu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() =>
  app.listen(port, () => console.log(`Connection Successfull to MongoDB & Listening on port ${port}.`))
)
.catch((err) => console.log(err));



