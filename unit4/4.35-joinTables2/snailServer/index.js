const db = require('./db')
const express = require('express')
const app = express();

app.use(express.json());

app.get('/api/users', async (req, res, next) => {
    try {
        const result = await db.fetchUsers();
        res.send(result);

    } catch (error) {
        next(error);
    }
});

const init = async () => {
    app.listen(3000, ()  => console.log('listening on port 3000'));
    console.log("init api")
    db.init();

}

init();