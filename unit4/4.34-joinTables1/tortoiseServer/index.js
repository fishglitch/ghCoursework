const express = require('express')
const db = require('./db')
const app = express();
app.use(express.json())

// how do we set up our routes?

app.get('api/customers', async (req, res, next) => {
    const result = await db.getCustomers();
    res.send(result);
    
})

app.post('api/customers', async (req, res, next) => {
    const result = await db.createCustomer(req.body.name);
    res.send(result);
})

const init = async () => {
    await db.init();
    app.listen(3000, () => {console.log("listening to port 3000")})
}

init();