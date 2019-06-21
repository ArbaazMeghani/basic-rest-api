let express = require('express');
let keys = require('../config/keys');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');

let app = express();
mongoose.connect(keys.mongoURI);

let contactsRoute = require('./routes/contacts');

app.use((req, res, next) => {
    console.log(` ${new Date().toString()} => ${req.method} ${req.originalUrl}`);
    next();
});
app.use('/api/v1', contactsRoute);

app.use((req, res, next) => {
    res.status(404).send("404 Resource Not Found");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log("Running Express Server on Port: " + port));