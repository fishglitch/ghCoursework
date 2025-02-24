// imports here for express and pg
const express = require("express");
const app = express();
const path = require("path");
const pg = require("pg");

app.use(express.json());
// Create a pg client

const client = new pg.Client(
  "postgres://calbee:fish70@localhost:5432/acme_ice_cream_db"
);

// Make app deployable by enabling Express to serve the generated code that Vite builds
// Middleware to serve static files
app.use(express.static(path.join(__dirname, "../client/dist"))); // if we come in to create a react frontend
// Route for homepage
// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

// GET - Returns all flavors from the database
app.get("/api/flavors", async (req, res, next) => {
  try {
    const SQL = `SELECT * FROM flavors`;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next();
  }
});

// GET /api/flavors/:id Returns a single flavor
app.get("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
    SELECT * FROM flavors 
    WHERE id = $1
    `;
    const flavorId = req.params.id;
    const response = await client.query(SQL, [flavorId]);
    res.send(response.rows[0]);
  } catch (ex) {
    next();
  }
});

// POST /api/flavors Returns the created flavor
app.post("/api/flavors", async (req, res, next) => {
  try {
    const SQL = `
    INSERT INTO flavors (name, is_favorite)
    VALUES ($1, $2)
    RETURNING *
    `;

    const {name, is_favorite} = req.body;
    const response = await client.query(SQL, [name, is_favorite]);
    res.send(response.rows[0]);
  } catch (ex) {
    next();
  }
});

// DELETE /api/flavors/:id Returns nothing
app.delete("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
    DELETE FROM flavors
    WHERE id = $1
    `;
    const flavorId = req.params.id;
    const response = await client.query(SQL, [flavorId]);
    res.status(204).send();
    console.log("deleted", req.body)
  } catch (ex) {
    next();
  }
});

// PUT /api/flavors/:id Returns the updated flavor
app.put("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
    UPDATE flavors
    SET name = $1, is_favorite = $2
    WHERE id = $3
    RETURNING *;
    `;

    const {name, is_favorite} = req.body;
    const flavorId = req.params.id;
    const response = await client.query(SQL, [name, is_favorite, flavorId]);
    res.send(response.rows[0]);
    console.log("updated", req.body)
  } catch (ex) {
    next();
  }
});

const init = async () => {
  // Connect to pg client
  await client.connect();
  const SQL = `
  DROP TABLE IF EXISTS flavors;
  CREATE TABLE flavors(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

INSERT INTO flavors(name, is_favorite) VALUES('vanilla', true), ('chocolate', true), ('strawberry', false);
  `;
  await client.query(SQL);
  //   const DATA = `INSERT`
  console.log("data seeded");

  // Listen on the server
  app.listen(3000, () => console.log(`listening on port 3000!`));
};

// Call init to start the server
init();
