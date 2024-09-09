import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import errorController from './controllers/errorController.js';
import apiRoutes from './routes/index.js';

const __dirname = path.resolve();

dotenv.config({ path: '../config.env' });
const app = express();

//Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'client/dist')));

// API routes
app.use(apiRoutes);

// Error handling middleware
app.use(errorController);

export default app;
