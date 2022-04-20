const express = require("express");
const app = express();
const mysql2 = require("mysql2");



const cors = require("cors");
app.use(cors());
app.use(express.json());


const db = mysql2.createConnection({
  user: "root",
  host: "localhost",
  database: "testDB", // same as the workbench
  
});

app.post("/create", (req, res) => {
  const { name, email, answer } = req.body;
  db.query(
    `INSERT INTO data_in (name, email, answer) VALUES ('${name}', '${email}', '${answer}')`
  ),
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    };
});

// app.post("/create", (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const answer = req.body.answer;
//     db.query( `INSERT INTO testSnickers (name, email, answer) VALUES ('${name}', '${email}', '${answer}')`),



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
