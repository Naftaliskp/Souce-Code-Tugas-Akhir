// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user.id, id_penghuni: user.id_penghuni }, 'yoursecretkey', { expiresIn: '30d' });
};

module.exports = generateToken;
