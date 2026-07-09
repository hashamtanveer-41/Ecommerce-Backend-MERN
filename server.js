import app from './app.js'
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";

// Handling Uncaught Exceptions
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err}`)
    console.log("Shutting Down the server due to Uncaught Promise Rejection")
        process.exit(1);
})

dotenv.config({path: ".env"})
connectDatabase();
const PORT = process.env.PORT || 3000;

const server  = app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});

// unhandled Promise Rejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err}`)
    console.log("Shutting Down the server due to Unhandled Promise Rejection")
    server.close(()=>{
        process.exit(1);
    })
})