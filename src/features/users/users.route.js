const express = require('express');
const router = express.Router();
const userController = require('./users.controller');

router.post('/register', userController.createUser);
router.get('/', userController.getAllUser);
router.post('/login', userController.login);

module.exports = router;