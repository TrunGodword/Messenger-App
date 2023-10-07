const express = require("express")
const app = express()
const connectDB = require("./config/db")
const dotenv = require("dotenv")

dotenv.config()
connectDB()


app.listen(process.env.PORT, (req, res)=>{
    console.log(`Port is live at ${process.env.PORT}`)
})