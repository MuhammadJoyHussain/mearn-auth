import express, { Application } from "express";
import {errorHandler, notFound} from './middleware/errorMiddleware'
const port:number = 5000;

import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server stared on port ${port}`)
)