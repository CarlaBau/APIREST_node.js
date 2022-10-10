import mysql from "mysql"
import dotenv from "dotenv"

//.env
dotenv.config()

//conexion a db

const connectMysql = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

connectMysql.connect((err)=>{
    if(err)console.log(err)
    console.log('Conectado a la BD')
})

export default connectMysql;