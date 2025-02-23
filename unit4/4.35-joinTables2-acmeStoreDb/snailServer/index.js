const db = require("./db");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/users", async (req, res, next) => {
  try {
    const result = await db.fetchUsers();
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/products", async (req, res, next) => {
  try {
    const result = await db.fetchProducts();
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.get("/api/favorites", async (req, res, next) => {
  try {
    const result = await db.fetchFavorites();
    res.send(result);
  } catch (error) {
    next(error);
  }
});

// POST /api/users/:id/favorites:
// Has a product_id as the payload, and
// returns the created favorite with a status code of 201.
app.get("/api/users/:user_id/favorites", async (req, res, next) => {
  try {
    const product_id = req.params.id;
    const {username, productName} = req.body;
    const result = await db.createFavorite(username, productName);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/api/users/:id/favorites", async (req, res, next) => {
  try {
    const deleteFavoriteId = req.params.id;

    // check if favorite exists before deleting
    const existingFavorite = await db.fetchFavorites();
    const favoriteExists = existingFavorite.some(
      (favorite) => favorite.id === deleteFavoriteId
    );

    if (!favoriteExists) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    await db.destroyFavorite(deleteFavoriteId);
    res.status(204).send();
    console.log("deleted reservation", deleteFavoriteId);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  app.listen(3000, () => console.log("listening on port 3000"));
  console.log("init api");
  db.init();
};

init();
