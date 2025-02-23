const pg = require("pg");
const uuid = require("uuid");
const bcrypt = require("bcrypt");

const client = new pg.Client(
  "postgres://calbee:fish70@localhost:5432/acme_store_db"
);

// we don't want a user to create new tables so we are not invoking it in init,
// this is only our database layer will do this.
// modular, scalable, secure.
//  Constraint: The combination of user_id and product_id should be unique.
// createTables: A method that drops and creates the tables for your application.
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
    name VARCHAR(50)
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

// createProduct: A method that creates a product in the database and then returns the created record.
const createProduct = async (productName) => {
  const SQL = `
    INSERT INTO products(id, name) 
    VALUES ($1, $2)
    RETURNING *
    `;
  const result = await client.query(SQL, [uuid.v4(), productName]);
  return result.rows[0];
};

// createUser: A method that creates a user in the database and then returns the created record. The password of the user should be hashed by using Bcrypt.
const createUser = async (username, password) => {
  const SQL = `
    INSERT INTO users(id, username, password) 
    VALUES($1, $2, $3) 
    RETURNING * 
    `;
  const hashedPassword = await bcrypt.hash(password, 5); // password hashing uses 5 salt rounds
  result = await client.query(SQL, [uuid.v4(), username, hashedPassword]);
  return result.rows[0];
};
// createFavorite: A method that creates a favorite in the database and then returns the created record,
const createFavorite = async (username, productName) => {
  const SQL = `
  INSERT INTO favorites(id, user_id, product_id) 
  VALUES(
    $1, 
    (SELECT id FROM users WHERE username = $2), 
    (SELECT id FROM products WHERE productName = $3)
    ) 
    RETURNING *
`;
  const response = await client.query(SQL, [uuid.v4(), username, productName]);
  return response.rows[0];
};

// fetchUsers: A method that returns an array of users in the database.
const fetchUsers = async () => {
  const SQL = `SELECT * FROM users;`;
  result = await client.query(SQL);
  console.log("fetchUsers working", result);
  return result.rows;
};
// fetchProducts: A method that returns an array of products in the database.
const fetchProducts = async () => {
  const SQL = `SELECT * from products;`;
  result = await client.query(SQL);
  console.log("fetchProducts", result);
  return result.rows;
};
// fetchFavorites: A method that returns an array of favorites for a user
const fetchFavorites = async () => {
  const SQL = `SELECT * from favorites;`;
  result = await client.query(SQL);
  console.log("fetch favorites", result);
  return result.rows;
};

// destroyFavorite: A method that deletes a favorite in the database.
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
  await createUser("swimmingJoe", "password");
  await createUser("frowingFrank", "password");
  console.table(await fetchUsers());
};

// AGAIN -- we don't want a user to create new tables so we are not invoking it in init,
// this is only our database layer will do this.
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
