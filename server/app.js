import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import mongoose from 'mongoose';

import router from "./routes/artsRoutes.js"
dotenv.config()

// create an express app
const app  = express();


// middleware
app.use(express.json())
app.disabled('x-powered-by') //hide my stack

app.use( (req,res, next)=>{
    console.log(req.path,req.method);
    next();
});

// API routes
app.use('/api/arts', router)


// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log(`Connected to Db and listening on port ${process.env.PORT}`)
    })
}).catch(error=>{console.log(error)})
