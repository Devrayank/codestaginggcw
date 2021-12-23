const mongoose = require("mongoose");
//require("dotenv");
//require('dotenv').config();

 const DB = "mongodb+srv://Tis216:Tis216@cluster0.ufju5.mongodb.net/Gcw?retryWrites=true&w=majority, { useNewUrlParser: true, useUnifiedTopology: true }";

//const DB = process.env.DB;


//mongoose.connect("mongodb://localhost:27017/Gcwapp", {
  mongoose.connect(DB, {
}).then(() => {
console.log("Connection success to DB");
}).catch((e) =>{
    console.log("No connection");
});
