const express = require('express');
const app = express();
const db = require('./config/mongoose');
db();

app.use(express.json());
app.use("/", require("./routes"));

app.listen(8000, (err) => {
    if(err){
        console.log("Error while running the server", err);
    }
    console.log("Server is running on the port 8000");
});