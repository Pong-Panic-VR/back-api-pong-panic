const express = require('express');
const router = express.Router();
const userController = require('./users.controller');

router.post('/register', userController.createUser);
router.get('/', userController.getAllUser);

module.exports = router;