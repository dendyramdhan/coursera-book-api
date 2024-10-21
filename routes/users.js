const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// Task 6: Register new user
router.post('/register', userController.registerUser);

// Task 7: Login as a registered user
router.post('/login', userController.loginUser);

module.exports = router;
