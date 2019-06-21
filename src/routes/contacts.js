let express = require('express');
let router = express.Router();
let contactsService = require('../services/contactsService');

router.get('/contacts', (req,res) => {
    res.send(contactsService.getAllContacts(req.query.firstname, req.query.lastname));
});

router.get('/contacts/:number', (req,res) => {
    res.send(contactsService.getContact(req.params.number));
});

module.exports = router;