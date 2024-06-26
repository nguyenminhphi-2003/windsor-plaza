import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js'; // Ensure the app module is exported as ESM

dotenv.config({ path: './config.env' });
// CONNECT TO DATABASE
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => console.log('Database connection successful!'));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
