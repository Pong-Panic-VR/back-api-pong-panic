const express = require('express');
const userRoute = require('./features/users/users.route');

require('dotenv').config();
const path = require("path");
const app = express();

app.use(express.json());

app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app;

