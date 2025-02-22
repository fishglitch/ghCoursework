const express = require("express");
const db = require("./db");
const app = express();
app.use(express.json());

// our routes

// GET /api/customers: Returns an array of customers
app.get("/api/customers", async (req, res, next) => {
  try {
    const result = await db.fetchCustomers();
    res.send(result);
    console.log("result", result);
  } catch (ex) {
    next(ex);
  }
});

// GET /api/restaurants: Returns an array of restaurants
app.get("/api/restaurants", async (req, res, next) => {
  try {
    const result = await db.fetchRestaurants();
    res.send(result);
    console.log("result", result);
  } catch (ex) {
    next(ex);
  }
});

// GET /api/reservations: Returns an array of reservations
// how do I write this without a corresponding function in db.js?
app.get("/api/reservations", async (req, res, next) => {
    try {
      const result = await db.fetchReservations();
      res.send(result);
      console.log("result", result);
    } catch (ex) {
      next(ex);
    }
  });


app.post("/api/customers", async (req, res, next) => {
  try {
    const result = await db.createCustomer(req.body.name);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// POST /api/customers/:id/reservations: 
// Has an object containing a valid restaurant_id, date, and party_count 
// as the payload, and returns the created reservation 
// with a status code of 201.


// DELETE /api/customers/:customer_id/reservations/:id:  
// In the URL, gets passed the id of the reservation to delete 
// and the customer_id, and returns nothing with a status code of 204.

//As a bonus, an added error handling route that 
// returns an object with an error property.


const init = async () => {
  await db.init();
  app.listen(3000, () => {
    console.log("listening to port 3000");
  });
};

init();
