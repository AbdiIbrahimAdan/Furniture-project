import express from 'express';
import {config} from 'dotenv';
config();
const app = express()

app.listen(3000, (req, res) =>{
    console.log("Server Running in port 3000......");
})