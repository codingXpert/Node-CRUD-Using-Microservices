const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDB = async () => {
    try {
      const db = await mongoose.connect("mongodb://localhost/bookService");
      console.log(`connected to mongoDb ${mongoose.connection.host}`);
    } catch (error) {
      console.log(`MongoDB Error ${error}`);
    }
  };
connectDB();
app.get("/", (req, res) => {
    res.send("This is book service");
})


app.listen(8000, (err) => {
    if(err){
        console.log("Error while running the server", err);
    }
    console.log("Server is running on the port 8000");
});