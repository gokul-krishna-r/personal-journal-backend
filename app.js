const express = require("express");
const mongoose = require('mongoose');
const router = require("./router/api");
require("dotenv").config();
// set up our express app
const app = express();
const port = 8080;

//Setting Up MongoDB
//austriarocksbutpeopledie

const uri = process.env.DB_URI;
mongoose.connect(uri,
    { useNewUrlParser: true },
    () => console.log('Connected to db'));

let db=mongoose.connection;

if(db){
    console.log("Database Connection Succesfull,");
}else{
    console.log("Connection Failed");
}

// initialize routes

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api",router);

// listen for requests
app.listen(process.env.port || port, () => {
    console.log("Running on Port 8080");
})

