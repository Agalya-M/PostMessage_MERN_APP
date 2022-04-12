import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dbconnection from './db.js';
import bodyParser from "body-parser";
import Postmessage from './controllers/Postmessagecontroller.js';
import usermessage from './controllers/usercontroller.js';

const app=express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/post',Postmessage);
app.use('/user',usermessage);


const port=4000;
//const CONNECTION_URL="mongodb://localhost:27017/PostMessage";

app.listen(port,()=>console.log("Server connected"))







