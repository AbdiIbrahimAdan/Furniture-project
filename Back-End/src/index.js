import express from 'express';
import cors from 'cors';
import userRouter from './routes/users.routes.js';
import contactRouter from './routes/contact.routes.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';



config();
const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRouter);
app.use("/api", contactRouter);
app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
