// imports here for express and pg
const express = require("express");
const app = express();
const path = require("path");
const pg = require("pg");

// Create a pg client
const client = new pg.Client('postgres://calbee:Fish70@localhost:5432/acme_hr_db');

// Make app deployable by enabling Express to serve the generated code that Vite builds
// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));
// Route for homepage
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// GET /api/employees - Returns all employees from the database
app.get("/api/employees", async (req, res, next) => {
  try {
    const SQL = `
      SELECT *
      FROM employees
    `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  // Connect to pg client
  await client.connect();
  // Create the table and seed the data
  // Each employee has an id, a name, and an `is_admin` field
  const SQL = `
    DROP TABLE IF EXISTS employees;
    CREATE TABLE employees(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      is_admin BOOLEAN DEFAULT FALSE
    );
    INSERT INTO employees(name, is_admin) VALUES('Sonny', true);
    INSERT INTO employees(name, is_admin) VALUES('Lucius', false);
    INSERT INTO employees(name) VALUES('Esther');
    INSERT INTO employees(name) VALUES('Shimon');
    INSERT INTO employees(name, is_admin) VALUES('Chester The Turtle', true);
  `;
  // Execute the SQL with the client
  await client.query(SQL);
  console.log("data seeded");
  // Listen on the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

// Call init to start the server
init();
