const express = require('express');
const app = express();

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //maybe needs to be "password"
    database: 'testSnickers' // same as the workbench
});

app.post('/create', (req, res) => {
    const { name, email, answer } = req.body;
    db.query(`INSERT INTO testSnickers (name, email, answer) VALUES ('${name}', '${email}', '${answer}')`, (err, results) => {
        if (err) { throw err; }
        res.send(results);
    });
});


app.listen( 3001, () => {
  console.log('Server is running on port 3001');
});