const express = require("express");
const app = express();



app.get("", (req, res)  => {

    const a = {};
    a.name = "Abhishek jha"
     return  res.send(a);
});

app.listen(2345, function() {

    console.log("Listening to port 2345");



});