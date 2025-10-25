const express = require('express');
const User = require('./features/users/users.model');
require('dotenv').config();
const path = require("path");
const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app;

