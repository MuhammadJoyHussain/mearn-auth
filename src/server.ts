import express, { Application } from "express";
import * as dotenv from'dotenv';
dotenv.config();

const port = 5000;

const app: Application = express();

app.listen(port, ()=> console.log(`Server stared on port ${port}`)
)