import { Router } from "express";
import connectMysql from "../connect.js";

//Router
const router = Router()

router.get('/usuarios', (req,res)=>{
    connectMysql.query('SELECT * FROM usuarios',(err,results)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(results);
    })
})

export default router;