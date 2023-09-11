import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';

import router from "./routes/arts.js"
dotenv.config()

// create an express app
const app  = express();


// middleware
app.use(express.json())
app.disabled('x-powered-by') //hide my stack

// global middleware
app.use( (req,res, next)=>{
    console.log(req.path,req.method);
    next();
});

// API routes
app.use('api/', router)


// listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})