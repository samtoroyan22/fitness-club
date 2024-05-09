const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
require('dotenv').config();

if (!process.env.ACCESS_TOKEN_SECRET) {
  console.error('ERROR: ACCESS_TOKEN_SECRET environment variable is not set.');
  process.exit(1);
}

app.use(cors({ origin: "*" }));
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fitness_club',
  password: 'root',
  port: 5432,
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}


app.post("/register", async (req, res) => {
  const { firstName, lastName, birthdate, gender, phoneNumber, email, password } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = `
      INSERT INTO users (first_name, last_name, birth_date, gender, phone_number, email, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id;
    `;
    const values = [firstName, lastName, birthdate, gender, phoneNumber, email, hashedPassword];
    const result = await pool.query(query, values);
    res.json({ success: true, message: "User Registered", userId: result.rows[0].id });
  } catch (err) {
    console.error("Error saving user to database:", err);
    res.status(500).json({ success: false, message: "Database error during registration", detail: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const user = await pool.query(userQuery, [email]);

    if (user.rows.length > 0) {
      const isValid = await bcrypt.compare(password, user.rows[0].password);
      if (isValid) {
        const accessToken = jwt.sign(
          { email: user.rows[0].email, id: user.rows[0].id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '24h' }
        );
        res.json({ success: true, message: "You are logged in!", accessToken });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: "Database error during login" });
  }
});

app.post("/logout", authenticateToken, (req, res) => {
  res.json({ success: true, message: "You have been logged out." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});