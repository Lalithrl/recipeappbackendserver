import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'

const app = express();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);

app.listen(PORT, ()=> console.log("SERVER STARTED ON PORT....!!"));


