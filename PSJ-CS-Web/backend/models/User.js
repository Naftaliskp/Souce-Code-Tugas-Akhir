// models/User.js
const db = require('../config/db');

const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM user WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};

const getPenghuniById = (id, callback) => {
  const query = 'SELECT * FROM penghuni WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};

module.exports = { findUserByEmail, getPenghuniById };
