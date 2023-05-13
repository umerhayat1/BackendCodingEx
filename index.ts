import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connectDatabase } from "./src/config/database";

import { port } from "./src/config/constants";
const app: Express = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", require("./src/routes/routes"));

connectDatabase();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
