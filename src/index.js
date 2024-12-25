//require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
import connectDB from './db/index.js'
import app from "./app.js";

dotenv.config({
    path: './.env',
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB Connection Failed:", err);
    });
    

// import express from "express";
// const app = express()
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.error("Error",error);
            
//         })

//         app.listen(process.env.PORT,()=>console.log(`Server Runnnig on ${process.env.PORT}`))
//     } catch (error) {
//         console.log(error);
//         throw error
        
        
//     }
// })()