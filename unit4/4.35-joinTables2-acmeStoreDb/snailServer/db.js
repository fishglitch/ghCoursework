const pg = require("pg");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const client = new pg.Client(
  "postgres://calbee:fish70@localhost:5432/acme_store_db"
);

/* CreateTables function here instead of invoking within 'init' function
 * this prevents users from inadvertently creating new tables
 * only predefined tables to exist for modularity, scalability and security
 *
 * Note: user_id and product_id combo should be unique.
 * createTables: A method that drops and creates the tables for your application.
 */

const createTables = async () => {
  const SQL = `
    DROP TABLE IF EXISTS favorites;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;

    CREATE TABLE users(
    id UUID PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(100)
    );

    CREATE TABLE products(
    id UUID PRIMARY KEY,
    productName VARCHAR(50)
    );

    CREATE TABLE favorites(
    id UUID PRIMARY KEY,
    product_id UUID REFERENCES products(id),
    user_id UUID REFERENCES users(id) NOT NULL,
    CONSTRAINT unique_product_user UNIQUE (product_id, user_id)
    );

    `;

  await client.query(SQL);
};

// createProduct:
// A method that creates a product in the database and then returns the created record.
const createProduct = async (productName) => {
  const SQL = `
    INSERT INTO products(id, productName) 
    VALUES ($1, $2)
    RETURNING *
    `;
  const result = await client.query(SQL, [uuid.v4(), productName]);
  return result.rows[0];
};

// createUser:
// A method that creates a user in the database and then returns the created record. The password of the user should be hashed by using Bcrypt.
const createUser = async (username, password) => {
  const existingUser = await client.query(
    `SELECT * FROM users WHERE username = $1`,
    [username]
  );

  if (existingUser.rows.length > 0) {
    throw new Error(`Username '${username}' already exists.`);
  }
  const SQL = `
    INSERT INTO users(id, username, password) 
    VALUES($1, $2, $3) 
    RETURNING * 
    `;
  const hashedPassword = await bcrypt.hash(password, 5); // password hashing uses 5 salt rounds
  result = await client.query(SQL, [uuid.v4(), username, hashedPassword]);
  return result.rows[0];
};

const createFavorite = async (username, productName) => {
  // Check if the user exists
  const userResult = await client.query(
    `SELECT id FROM users WHERE username = $1`,
    [username]
  );

  if (userResult.rows.length === 0) {
    throw new Error(`User '${username}' does not exist.`);
  }

  const userId = userResult.rows[0].id;

  // Check if the product exists
  const productResult = await client.query(
    `SELECT id FROM products WHERE productName = $1`,
    [productName]
  );

  if (productResult.rows.length === 0) {
    throw new Error(`Product '${productName}' does not exist.`);
  }

  const productId = productResult.rows[0].id;

  // Now insert the favorite
  const SQL = `
    INSERT INTO favorites(id, user_id, product_id) 
    VALUES($1, $2, $3) 
    RETURNING *
  `;
  const response = await client.query(SQL, [uuid.v4(), userId, productId]);
  return response.rows[0];
};

// fetchUsers:
// A method that returns an array of users in the database.
const fetchUsers = async () => {
  const SQL = `SELECT * FROM users;`;
  result = await client.query(SQL);
  console.log("fetchUsers working", result);
  return result.rows;
};
// fetchProducts:
// A method that returns an array of products in the database.
const fetchProducts = async () => {
  const SQL = `SELECT * from products;`;
  result = await client.query(SQL);
  console.log("fetchProducts", result);
  return result.rows;
};
// fetchFavorites:
// A method that returns an array of favorites for a user
const fetchFavorites = async () => {
  const SQL = `SELECT * from favorites;`;
  result = await client.query(SQL);
  console.log("fetch favorites", result);
  return result.rows;
};

// destroyFavorite:
// A method that deletes a favorite in the database.
const destroyFavorite = async (deleteFavoriteId) => {
  const SQL = `
  DELETE FROM favorites
  WHERE id = $1
`;
  const response = await client.query(SQL, [deleteFavoriteId]);
  return response;
};

const init = async () => {
  console.log("init db layer");
  await client.connect();
  createTables();
  // await createUser("swimmingJoe", "password");
  // await createUser("frowningFrank", "password");
  await createUser("surferPaulene", "password");
  await createProduct("surf wax");
  await createProduct("comb");
  await createFavorite("surferPaulene", "surf wax");
  
// Fetch and log users
const users = await fetchUsers();
console.table(users);

// Fetch and log products
const products = await fetchProducts();
console.table(products);

// Fetch and log favorites
const favorites = await fetchFavorites();
console.table(favorites);
};

// ! The `createTables` function is intentionally not invoked in the `init` method
// prevents creation/modification of database schema
module.exports = {
  init,
  createUser,
  createProduct,
  createFavorite,
  fetchUsers,
  fetchProducts,
  fetchFavorites,
  destroyFavorite,
};
