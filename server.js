const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

// CONNECT TO DATABASE
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => console.log('Database connection successful!'));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
