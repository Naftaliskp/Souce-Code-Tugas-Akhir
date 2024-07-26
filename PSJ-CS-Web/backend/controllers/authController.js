// controllers/authController.js
const bcrypt = require('bcryptjs');
const { findUserByEmail, getPenghuniById } = require('../models/User');
const generateToken = require('../utils/generateToken');

const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    getPenghuniById(user.id_penghuni, (err, penghuni) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching penghuni data' });
      }

      res.cookie('token', token, { httpOnly: true });
      return res.json({ message: 'Login successful', token, penghuni });
    });
  });
};

module.exports = { login };
