const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors');
const usersRoute = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('OnlineSystem API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});