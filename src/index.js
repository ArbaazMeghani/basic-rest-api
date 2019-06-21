let express = require('express')

let app = express();

let contactsRoute = require('./routes/contacts')
app.use('/api/v1', contactsRoute);

const port = process.env.port || 3000;
app.listen(port, () => console.log("Running Express Server on Port: " + port));