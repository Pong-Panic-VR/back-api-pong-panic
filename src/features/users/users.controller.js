const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
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
