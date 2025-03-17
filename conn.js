const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appointment_details'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

app.post('/submit', (req, res) => {
    const { username, lastname, email, mob, gender, appdate, mess } = req.body;
    
    if (!username || !lastname || !email || !mob || !gender || !appdate || !mess) {
        return res.status(400).send('ERROR!!!!!');
    }

    const sql = 'INSERT INTO appointment (username, lastname, email, mob, gender, appdate, mess) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [username, lastname, email, mob, gender, appdate, mess];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error: ' + err.message);
            return res.status(500).send('Database insertion failed');
        }
        res.redirect('/index.html');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
