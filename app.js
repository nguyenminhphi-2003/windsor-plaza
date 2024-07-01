import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import errorController from './controllers/errorController.js';

import indexRoute from './routes/index.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: './config.env' });
const app = express();

// View engine setup
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });

// ROUTES
app.use(indexRoute);

// Error handling middleware
app.use(errorController);

export default app;
