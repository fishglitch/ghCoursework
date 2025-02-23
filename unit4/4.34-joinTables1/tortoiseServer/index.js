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

app.post("/api/restaurant", async (req, res, next) => {
  try {
    const result = await db.createRestaurant(req.body.name);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// POST /api/customers/:id/reservations: 
// Has an object containing a valid restaurant_id, date, and party_count 
// as the payload, and returns the created reservation 
// with a status code of 201.

app.post("/api/customers/:id/reservations", async (req, res, next) => {
  try {
    const customer_id = req.params.id; 
    const {restaurantName, date, party_count} = req.body;
    const result = await db.createReservation(req.params.id, restaurantName, date, party_count);
    res.status(201).send(result);
    console.log("Your reservation:", result)
  } catch (ex) {
    next(ex);
  }
});

// DELETE /api/customers/:customer_id/reservations/:id:  
// In the URL, gets passed the id of the reservation to delete 
// and the customer_id, and returns nothing with a status code of 204.

app.delete("/api/customers/:customer_id/reservations/:id", async (req, res, next)=> {
  try {
    const deleteReservationId = req.params.id;

    // check if reservation exists before deleting
    const existingReservation = await db.fetchReservations();
    const reservationExists = existingReservation.some(reservation => reservation.id === deleteReservationId);
    
    if(!reservationExists) {
      return res.status(404).json({message: 'Reservation not found'});
    }

    await db.deleteReservation(deleteReservationId);
    res.status(204).send();
    console.log("deleted reservation", deleteReservationId)

  } catch (ex) {
    next (ex);
  }
});

//As a bonus, an added error handling route that 
// returns an object with an error property.


const init = async () => {
  await db.init();
  app.listen(3000, () => {
    console.log("listening to port 3000");
  });
};

init();
