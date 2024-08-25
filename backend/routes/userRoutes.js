const express = require('express');
const { registerUser, loginUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const { validateUserRegistration, validateResults } = require('../validations/userValidation');
const router = express.Router();

// Register Route
router.post('/register', validateUserRegistration, validateResults, registerUser);

// Login Route
router.post('/login', loginUser);

// User Management Routes
router.get('/users', auth, getAllUsers);
router.put('/users/:userId', auth, updateUser);
router.delete('/users/:userId', auth, deleteUser);

module.exports = router;
