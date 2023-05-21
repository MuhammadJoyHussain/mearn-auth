import express, { Application } from "express";
import {errorHandler, notFound} from './middleware/errorMiddleware'
import { PORT } from "./config/env";
import connectDB from "./config/db";
const port:number = PORT || 5000;

import userRoutes from './routes/userRoutes';

connectDB();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server stared on port ${port}`)
)