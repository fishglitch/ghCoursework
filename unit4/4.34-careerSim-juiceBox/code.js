// code shared by Tracey and Laigha

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
    if (user && (await bcrypt.compare(password, user.password) == true)) {
      const token = jwt.sign({ 
        id: user.id, 
        username
      }, JWT_SECRET, {
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
})

// Token middleware:
require("dotenv").config();
const jwt = require('jsonwebtoken');
const  JWT_SECRET = process.env.JWT || "shhh";