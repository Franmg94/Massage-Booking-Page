import dotenv from 'dotenv';
dotenv.config();

// ℹ️ Connects to the database
import "../src/db/index";

// Handles HTTP requests (express is node js framework)
import express from 'express';
import { json } from 'body-parser';

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
import config from './config/index';
config(app);

// 👇 Apply body-parser middleware
app.use(json());

// 👇 Start handling routes here
import indexRoute from '../src/routes/index';
import appointmentRoutes from './routes/appointments';

app.use('/api', indexRoute);
app.use('/appointments', appointmentRoutes);

// Error handling middleware
import errorHandler from './error-handling/index';
errorHandler(app);

export default app;
