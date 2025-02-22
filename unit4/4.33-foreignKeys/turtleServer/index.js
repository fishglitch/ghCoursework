// imports here for express and pg
const express = require("express");
const app = express();
const path = require("path");
const pg = require("pg");

// Create a pg client
const client = new pg.Client(
  "postgres://calbee:fish70@localhost:5432/acme_hr_db"
);

// Use express middleware to parse JSON
app.use(express.json());


// Make app deployable by enabling Express to serve the generated code that Vite builds
// Middleware to serve static files
app.use(express.static(path.join(__dirname, "../client/dist")));
// Route for homepage
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
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

// GET /api/departments Returns an array of departments.
app.get("/api/departments", async (req, res, next) => {

  try {
    const SQL = `
      SELECT * FROM departments
      `;

    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

// POST /api/employees
// Returns a created employee. The payload is the employee to create.
app.post("/api/employees", async (req, res, next) => {

  try {
    const SQL = `
      INSERT INTO employees (name, department_id)
      VALUES ($1, (SELECT id FROM departments WHERE name=$2))
      RETURNING *
      `;


    const response = await client.query(SQL, [
        req.body.name, 
        req.body.departmentName
    ]);
    res.send(response.rows[0]);
    console.log("Request Body for post:", req.body)
  } catch (ex) {
    next(ex);
  }
});

// DELETE /api/employees/:id
// Returns nothing. The ID of the employee to delete is passed in the URL.
app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const SQL = `
      DELETE FROM employees
      WHERE id = $1
      `;
    const employeeId = req.params.id;
    const response = await client.query(SQL, [employeeId]);
    res.status(204).send();
    console.log("deleted", req.body)
  } catch (ex) {
    next(ex);
  }
});

// PUT /api/employees/:id
// Returns an updated employee. The payload is the employee to update.
app.put("/api/employees/:id", async (req, res, next) => {
  try {
    const SQL = `
      UPDATE employees
      SET name = $1
      WHERE id = $2
      RETURNING *;
      `;

    const { name } = req.body;
    const employeeId = req.params.id;
    const response = await client.query(SQL, [name, employeeId]);
    res.send(response.rows[0]);
    console.log("updated", req.body)
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
    DROP TABLE IF EXISTS departments;

    CREATE TABLE departments(
        id SERIAL PRIMARY KEY,
        name VARCHAR(50)
    );

    CREATE TABLE employees(
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      created_at TIMESTAMP DEFAULT now(),
      updated_at TIMESTAMP DEFAULT now(),
      department_id INTEGER REFERENCES departments(id) NOT NULL
    );
    INSERT INTO departments(name) 
        VALUES('accounting'), ('creative'), ('it'), ('hr');

    INSERT INTO employees(name, department_id) 
    VALUES
    ('Donna', (SELECT id from departments WHERE name='accounting')),
    ('Alistair', (SELECT id from departments WHERE name='creative')),
    ('Kinyani', (SELECT id from departments WHERE name='it')),
    ('Takeshi', (SELECT id from departments WHERE name='hr'));
  `;
  // Execute the SQL with the client
  await client.query(SQL);
  console.log("data seeded woohoo~");
  // Listen on the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

// Call init to start the server
init();
