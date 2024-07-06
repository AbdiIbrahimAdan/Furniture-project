import express from 'express';
import userRouter from './routes/users.routes.js';
import {config} from 'dotenv';
config();
const app = express();
app.use(express.json());
app.use("/api/users", userRouter);
app.listen(3000, () =>{
    console.log("Server Running in port 3000......");
})