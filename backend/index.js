// const express = require ('express')
// const dotenv = require ('dotenv')
// const dbconnect = require ("./DB/dbconnect")

import express from 'express'
import dotenv from 'dotenv'
import dbconnect from "./DB/dbconnect.js"
import authRouter from "./Routes/authuser.route.js"
import messageRouter from "./Routes/message.route.js"
import cookieParser from 'cookie-parser'
import userRouter from "./Routes/user.route.js"
// import path from 'path'; //C.D

import {app,server} from './Socket/socket.js'

// const __dirname = path.resolve(); // C.D


dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)
app.use('/api/user', userRouter)

//CODE FOR DEPLOYMENT 
// to join frontend and backend
// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
// })

app.get('/',(req,res)=>{
    res.send("server is running successfully")
})

dbconnect().then(() => {
    server.listen(PORT, () => {
        console.log(`Server running at ${PORT}`)
    })
})