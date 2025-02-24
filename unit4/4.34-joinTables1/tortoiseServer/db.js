const pg = require("pg");
const uuid = require("uuid");
const client = new pg.Client(
  "postgres://calbee:fish70@localhost:5432/acme_dining_db"
);


const fetchCustomers = async () => {
  const SQL = `SELECT * FROM customers`;
  const result = await client.query(SQL);
  return result.rows; // Return all customers, not just the first row
};

// fetchRestaurants: A method that returns an array of restaurants from the database.
const fetchRestaurants = async () => {
  const SQL = `SELECT * FROM restaurants`;
  const result = await client.query(SQL);
  return result.rows;
};

// fetchReservations -- having trouble with API call for delete, created this to fetch all reservations
const fetchReservations = async () => {
  const SQL = `SELECT * FROM reservations`;
  const result = await client.query(SQL);
  return result.rows; // Return all reservations, not just the first row
};

const createCustomer = async (customerName) => {
  // create a function that accepts the customer inside the database
  const SQL = `INSERT INTO customers(id, name) VALUES($1, $2) RETURNING*`;
  const result = await client.query(SQL, [uuid.v4(), customerName]);
  return result.rows[0];
};

const createRestaurant = async (restaurantName) => {
  const SQL = `INSERT INTO restaurants(id, name) VALUES($1, $2) RETURNING*`;
  const result = await client.query(SQL, [uuid.v4(), restaurantName]);
  return result.rows[0];
};

// createReservation: A method that creates a reservation in the database and then returns the created record.
const createReservation = async (
// The order of parameters must match the argument order 
// when the function is called (e.g., in index.js).
    customer_id,
    // customerName- no longer needed
    restaurantName,
    date,
    party_count

  ) => {
    const SQL = 
  // The order of the arguments below must match 
  // the positional placeholders in the SQL query.
    `
    INSERT INTO reservations
      (id, date, party_count, restaurant_id, customer_id) 
      VALUES(
          $1,   
          $2, 
          $3, 
          (SELECT id FROM restaurants WHERE name =$4), 
          $5
          ) 
      RETURNING*`;

    const result = await client.query(SQL, [
      uuid.v4(), // reservation ID
      date,
      party_count,
      restaurantName,
    // customerName- no longer needed
      customer_id
    ]);
    return result.rows[0];
  };



// destroyReservation: A method that deletes a reservation from the database.

const deleteReservation = async (deleteReservationId) => {
  const SQL = `
    DELETE FROM reservations
    WHERE id = $1
  `;
  const response = await client.query(SQL, [deleteReservationId])
  return response;
}


const init = async () => {
  await client.connect();

  // reservations is the child, customer and restaurants are parents
  // parent drop only matters if one is a parent to the other.
  const SQL = `
    DROP TABLE IF EXISTS reservations;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS restaurants;
    
    CREATE TABLE restaurants(
    id UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL
    );
    
    CREATE TABLE customers(
    id UUID PRIMARY KEY,
    name VARCHAR(50) NOT NULL
    );

    CREATE TABLE reservations(
    id UUID PRIMARY KEY,
    date DATE NOT NULL,
    party_count INTEGER NOT NULL,
    restaurant_id UUID REFERENCES restaurants(id) NOT NULL,
    customer_id UUID REFERENCES customers(id) NOT NULL
    );`;

  await client.query(SQL);

  // ["Bob", "Jan", "Jerry"].forEach(async (name) => {
  //   await createCustomer(name);
  //   console.log("customer created" + name);
  // });

  // ["Nobu", "76", "Chili's"].forEach(async (name) => {
  //   await createRestaurant(name);
  //   console.log("restaurant created" + name);
  // });

  // const reservation = await createReservation("Bob", "Nobu", "2025-02-14", 2);
  // console.log("reservation created:", reservation);
};

module.exports = {
  init,
  fetchCustomers,
  fetchRestaurants,
  fetchReservations,
  createCustomer,
  createRestaurant,
  createReservation,
  deleteReservation

};
