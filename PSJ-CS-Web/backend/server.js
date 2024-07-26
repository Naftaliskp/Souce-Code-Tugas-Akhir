const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;
const JWT_SECRET = 'your_jwt_secret';

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tryagain'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/api/login', (req, res) => {
    const { email, pwd } = req.body;
    const query = 'SELECT * FROM user WHERE email = ?';
    console.log(query)

    db.query(query, [email], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        const user = results[0];

        if (pwd != user.password) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        const penghuniQuery = 'SELECT * FROM penghuni WHERE id = ?';
        db.query(penghuniQuery, [user.id_penghuni], (err, penghuniResults) => {
            if (err) throw err;

            if (penghuniResults.length === 0) {
                return res.status(401).json({ message: 'Penghuni not found' });
            }

            const penghuni = penghuniResults[0];
            const token = jwt.sign({ id: user.id, id_penghuni: user.id_penghuni }, JWT_SECRET, { expiresIn: '1h' });

            res.json({ token, data: penghuni });
        });
    });
});

app.get('/api/auth/data', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const penghuniQuery = 'SELECT * FROM penghuni WHERE id = ?';
        db.query(penghuniQuery, [decoded.id_penghuni], (err, results) => {
            if (err) throw err;

            if (results.length === 0) {
                return res.status(404).json({ message: 'Penghuni not found' });
            }

            res.json({ data: results[0] });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
