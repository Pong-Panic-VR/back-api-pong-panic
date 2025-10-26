const User = require('./users.model');
const bcryptjs = require('bcryptjs');
require('dotenv').config()

const pepper = process.env.PEPPER;

exports.createUser = async (req, res) => {
    try {
        const hash = bcryptjs.hashSync(req.body.password + pepper, 10);
        const newUser = new User ({
            email: req.body.email,
            password: hash,
            username: req.body.username
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}
