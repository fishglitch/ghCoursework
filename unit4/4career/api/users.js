/*
defines the routes for handling user-related API requests in an Express.js application
file interacts with the database via the following functions:
1. createUser: To create a new user in the database.
2. getAllUsers: To retrieve all users from the database.
3. getUserByUsername: To fetch user details based on the username for login verification.
file utilizes JWT for user authentication. 
- Upon successful registration and login, it generates tokens that can be used for authenticated requests
router handles all user-related requests
*/
const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');

const { 
  createUser,
  getAllUsers,
  getUserByUsername,
  getUserById,
} = require('../db');


// GET http://localhost:3000/api/users/
usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await getAllUsers();
  
    res.send({
      users
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// GET http://localhost:3000/api/users/:userId
usersRouter.get('/:userId', async (req, res, next) => {
  const { userId } = req.params; //access userId from req.params

  try {
    const user = await getUserById(userId);
  
    res.send({
      user
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

// POST http://localhost:3000/api/users/login tested using {"username": "albert","password": "bertie99"}
usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUserByUsername(username);

    if (user && (await bcrypt.compare(password, user.password )== true )) {
      const token = jwt.sign({ 
        id: user.id, 
        username
      }, process.env.JWT_SECRET, {
        expiresIn: '1w'
      });

      res.send({ 
        message: "you're logged in!",
        token 
      });
    } else {
      next({ 
        name: 'IncorrectCredentialsError', 
        message: 'Username or password is incorrect'
      });
    }
  } catch(error) {
    console.log(error);
    next(error);
  }
});

// CURRENTLY NOT WORKING POST http://localhost:3000/api/users/register
usersRouter.post('/register', async (req, res, next) => {
  const { username, password, name, location } = req.body;

  try {

    // check if user already exists

    const existingUser = await getUserByUsername(username);
  
    if (existingUser) {
      return next({
        name: 'UserExistsError',
        message: 'A user by that username already exists'
      });
    }

    // create new user 

    const user = await createUser({
      username,
      password, // check if hased the pw in createUser
      name,
      location,
    });

     // generate token

    const token = jwt.sign({ 
      id: user.id, 
      username
    }, process.env.JWT_SECRET, {
      expiresIn: '1w'
    });

    res.send({ 
      message: "thank you for signing up",
      token 
    });
  } catch (error) {
    next({ name: error.name, message: error.message }); // improve error handling
  } 
});

module.exports = usersRouter;