// routes/authRoutes.js
const express = require('express');
const { login } = require('../controllers/authController');
const { protect, getPenghuni } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/login', login);
router.get('/penghuni', protect, getPenghuni);

module.exports = router;
