const {
  client,
  createTables,
  createUser,
  createProduct,
  createFavorite,
  fetchUsers,
  fetchProducts,
  fetchFavorites,
  destroyFavorite,
  authenticate,
  findUserWithToken
} = require('./db');
const express = require('express');
const app = express();
app.use(express.json());

//for deployment only
const path = require('path');
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../client/dist/index.html')));
app.use('/assets', express.static(path.join(__dirname, '../client/dist/assets'))); 

// middleware to ensure a logged in user
const isLoggedIn = async(req, res, next)=> {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return next({status: 403, message: 'No authorization token provided'})
  }
  try { // try to find user by token
    const user = await findUserWithToken(authHeader);

    // if user not found, token is invalid
    if (!user) {
      return next({ status: 403, message: 'Invalid authorization token' });
    }

    req.user = user;
    next();
  }
  catch(ex){
    next(ex);
  }
};


app.post('/api/auth/login', async(req, res, next)=> {
  try {
    console.log("inside login");
    console.log(req.body);
    res.send(await authenticate(req.body));
  }
  catch(ex){
    next(ex);
  }
});


app.post('/api/auth/register', async(req, res, next)=> {
  try {
    res.send(await createUser(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/auth/me', isLoggedIn, async(req, res, next)=> { //requireToken
  try {
    const user = await findUserWithToken(req.headers.authorization);
    res.send(user);
  }
  catch(ex){
    res.status(ex.status || 500).send({error: ex.message});
    next(ex);
  }
});

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await fetchUsers());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/users/:id/favorites', isLoggedIn, async(req, res, next)=> {
  try {
    res.send(await fetchFavorites(req.params.id));
  }
  catch(ex){
    next(ex);
  }
});

app.post('/api/users/:id/favorites', isLoggedIn, async(req, res, next)=> {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).send({error: 'Unauthorized access'})
    }
    res.status(201).send(await createFavorite({ user_id: req.params.id, product_id: req.body.product_id}));
  } // bc this returns a json string, App.jsx can console.log json
  catch(ex){
    next(ex);
  }
});

app.delete('/api/users/:user_id/favorites/:id', isLoggedIn, async(req, res, next)=> {
  try {
    await destroyFavorite({user_id: req.params.user_id, id: req.params.id });
    res.sendStatus(204); // this form of send status cannot use json
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/products', async(req, res, next)=> {
  try {
    res.send(await fetchProducts());
  }
  catch(ex){
    next(ex);
  }
});

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err.message ? err.message : err });
});

const init = async()=> {
  const port = process.env.PORT || 3000;
  await client.connect();
  console.log('connected to database');

  await createTables();
  console.log('tables created');

  const [moe, lucy, ethyl, curly, foo, bar, bazz, quq, fip] = await Promise.all([
    createUser({ username: 'moe', password: 'm_pw'}),
    createUser({ username: 'lucy', password: 'l_pw'}),
    createUser({ username: 'ethyl', password: 'e_pw'}),
    createUser({ username: 'curly', password: 'c_pw'}),
    createProduct({ name: 'foo' }),
    createProduct({ name: 'bar' }),
    createProduct({ name: 'bazz' }),
    createProduct({ name: 'quq' }),
    createProduct({ name: 'fip' })
  ]);

  console.log(await fetchUsers());
  console.log(await fetchProducts());

  console.log(await fetchFavorites(moe.id));
  const favorite = await createFavorite({ user_id: moe.id, product_id: foo.id });
  app.listen(port, ()=> console.log(`listening on port ${port}`));
};

init();

