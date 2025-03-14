/*
file provides a clean and organized utility function for user authentication in an Express.js application
promotes code reuse and helps manage access control more efficiently across your API endpoints
*/
const jwt = require('jsonwebtoken');
require('dotenv').config()
async function requireUser(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify;
    next();
  }
  catch(ex){
    next(ex);
}}
module.exports = {
  requireUser
}



/* commented-out function serves a similar purpose but takes a different approach to verify the user's authentication status
It checks if the Authorization header is present and returns an error if not.
This version assumes the existence of a hypothetical function findUserWithToken, 
which retrieves the user associated with the provided token. 
If the user is not found, it responds with an error indicating that the token is invalid
User Assignment: If the user is found, it assigns the user object to req.user
*/ 

// middleware to ensure a logged in user
// const isLoggedIn = async(req, res, next)=> {
//   const authHeader = req.headers.authorization;
  
//   if (!authHeader) {
//     return next({status: 403, message: 'No authorization token provided'})
//   }
//   try { // try to find user by token
//     const user = await findUserWithToken(authHeader);

//     // if user not found, token is invalid
//     if (!user) {
//       return next({ status: 403, message: 'Invalid authorization token' });
//     }

//     req.user = user;
//     next();
//   }
//   catch(ex){
//     next(ex);
//   }
// };