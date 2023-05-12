import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import {connectDatabase} from './src/config/database'

dotenv.config();
const app: Express = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api",require('./src/routes/routes'))

connectDatabase();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});