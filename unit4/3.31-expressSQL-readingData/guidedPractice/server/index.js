// imports here for express and pg

const express = require ('express');
const app = express();
const path = require ('path');
const pg = require('pg');

// Create a pg client
const client = new pg.Client('postgres://calbee:Fish70@localhost:5432/acme_notes_db');

// static routes here (you only need these for deployment)

// app routes here

// Make app deployable by enabling Express to serve the generated code that Vite builds
// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Route for homepage
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../client/dist/index.html')));

// GET /api/employees - Returns all employees from the database
app.get('/api/notes', async (req, res, next) => {
    try {
      const SQL = `
        SELECT * from notes;
      `
      const response = await client.query(SQL)
      res.send(response.rows)
    } catch (ex) {
      next(ex)
    }
  })

// create your init function

const init = async () => {
      // Connect to pg client
    await client.connect();
      // Create the table and seed the data
  // Each employee has an id, a name, and an `is_admin` field

  // export DATABASE_URL='postgres://postgres:postgres@localhost:5432/acme_hr_db'
    const SQL = `
      DROP TABLE IF EXISTS notes;
      CREATE TABLE notes(
        id SERIAL PRIMARY KEY,
        txt VARCHAR(255),
       starred BOOLEAN DEFAULT FALSE
      );
      INSERT INTO notes(txt, starred) VALUES('learn express', false);
      INSERT INTO notes(txt, starred) VALUES('write SQL queries', true);
     INSERT INTO notes(txt) VALUES('create routes');
     INSERT INTO notes(txt) VALUES('erina');
    `
    await client.query(SQL)
  console.log('data seeded')
    const port = process.env.PORT || 3000
    app.listen(port, () => console.log(`listening on port ${port}`))
  }

  
// const init = async () => {
//     await client.connect()
//     const sql = `
//     `
//     await client.query(SQL)

//     console.log('data seeded');

//     const port = process.env.PORT || 3000
//   app.listen(port, () => console.log(`listening on port ${port}`))
// };

// init function invocation

init ();




