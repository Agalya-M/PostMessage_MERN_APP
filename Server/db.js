import { application } from "express";
import mongoose from "mongoose";

const CONNECTION_URL=("mongodb://localhost:27017/PostMessage");

const dbconnection=mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
.then(console.log("Server connected to db"))
.catch(err=>{
    console.log(err);
})
 export default dbconnection;
