import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";

import connectToSocket from "./controllers/socketManager.js";
import cors from "cors";

const app=express();

const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000));

app.get("/home",(req,res)=>{
    return res.json({"hello":"wolrd"});
});

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

import usersRoutes from './routes/users.routes.js';
app.use('/api/v1/users', usersRoutes);

const start=async()=>{
    app.set("mongo_user")
const connectionDb=await mongoose.connect
("mongodb+srv://riteshyadav8995:Ritesh%4089%239%215@cluster0.qtohjog.mongodb.net/UserDB");

    console.log(`MONGO Connected DB Host:${connectionDb.connection.host}`);
    server.listen(app.get("port"),()=>{
       console.log(`LISTENING ON PORT ${app.get("port")}`);
    });
}
start();
