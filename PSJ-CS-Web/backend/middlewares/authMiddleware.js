// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { getPenghuniById } = require('../models/User');

const protect = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  jwt.verify(token, 'yoursecretkey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }

    req.user = decoded;
    next();
  });
};

const getPenghuni = (req, res) => {
  getPenghuniById(req.user.id_penghuni, (err, penghuni) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching penghuni data' });
    }
    return res.json(penghuni);
  });
};

module.exports = { protect, getPenghuni };
