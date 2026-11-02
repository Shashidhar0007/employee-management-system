const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.get("/employees", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM employees ORDER BY id"
  );

  res.json(result.rows);
});

app.post("/employees", async (req, res) => {
  const { name, email } = req.body;

  await pool.query(
    "INSERT INTO employees(name,email) VALUES($1,$2)",
    [name, email]
  );

  res.json({
    message: "Employee Added"
  });
});

app.delete("/employees/:id", async (req, res) => {
  await pool.query(
    "DELETE FROM employees WHERE id=$1",
    [req.params.id]
  );

  res.json({
    message: "Deleted"
  });
});

app.listen(5000, () => {
  console.log("Backend Running On Port 5000");
});