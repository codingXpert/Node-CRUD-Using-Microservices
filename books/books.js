const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("This is book service");
})


app.listen(8000, (err) => {
    if(err){
        console.log("Error while running the server", err);
    }
    console.log("Server is running on the port 8000");
});