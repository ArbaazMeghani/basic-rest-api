let express = require('express');
let router = express.Router();
let contactsService = require('../services/contactsService');

router.get('/contacts', (req,res) => {
    if(req.query.firstname && req.query.lastname) {
        res.send(`You have requested all contacts with the name: ${req.query.firstname} ${req.query.lastname}`);
    }
    else if(req.query.firstname) {
        res.send(`You have requested all contacts with the first name: ${req.query.firstname}`);
    }
    else if(req.query.lastname) {
        res.send(`You have requested all contacts with the last name: ${req.query.lastname}`);
    }
    else {
        res.send("You have requested all contacts");
    }
});

router.get('/contacts/:name', (req,res) => {
    res.send(`You have requested a contact with the name: ${req.params.name}`);
});

module.exports = router;