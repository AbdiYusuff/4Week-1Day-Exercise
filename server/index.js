const express = require('express') 

//import the cors package 
const cors = require("cors");

//Create a variable called app and set its value equal to express invoked
const app = express() // extantiating or creating an instance of the class 'express'

//Set your server up to accept JSON object responses
app.use(express.json()) // When we want to be able to accept JSON.


app.use(cors());

//cors - credit approval, or a vetter that tells the shopkeeper that the shopper will not run away with the money
//express - the shopkeeper - the server
//axios (front-end) - the shopper  the client
//req - the list - request, the information about the request, it also an object
//res - the bag full of the items on the list - also an object. 

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });

//param - placeholder = :temperature. The ":" indicates the param.  

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });



//Set your express server to listen to requests on port 4000, test with nodemon
app.listen(4000, () => console.log("Server running on port 4000"));

