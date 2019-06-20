let express = require('express')

let app = express();
var port = process.env.port || 3000;

app.get('/', (req,res) => res.send("Hello World!"));

app.listen(port, () => console.log("Running Express Server on Port: " + port));