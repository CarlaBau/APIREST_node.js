import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectMysql from "./connect.js" //conexion a la bd
import routes from "./routes/api.js"
//use .env
dotenv.config()

//App
const app = express()
//confing

//middleare



//rutas
app.use('/api', routes)

//server
app.listen(process.env.PORT, ()=>{
    console.log('Server on port: ', process.env.PORT)
})
