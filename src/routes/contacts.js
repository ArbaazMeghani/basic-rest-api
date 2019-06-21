let express = require('express')
let router = express.Router();

router.get('/contacts', (req,res) => {
    res.send("You have requested all contacts")
});

module.exports = router