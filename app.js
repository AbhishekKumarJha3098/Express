const express = require("express");

const user = require ("app.json");
const app = express();

app.use(express.json());




app.get("", (req, res)  => {

     res.send({user});
});

app.listen(2345, function() {

    console.log("Listening to port 2345");



});

app.post("/", (req, res) => {

const newusers = [...user, req.body];


res.send(newuser);


});


app.patch("/:author", (req, res) => {
const newuser = user.map((user) => {

    if (req.params.author === user) {



        
return req.body;
}
return user; 



});

res .send(newuser);
});

app.delete("/:author", (req, res) => {
    const newuser = user.filter((user) => user.author != req.params.author);

    res.send(newuser);
});
    
       
    