let express = require('express');
let router = express.Router();
let contactsService = require('../services/contactsService');

router.get('/contacts', (req,res) => {
    contactsService.getAllContacts(req.query.firstname, req.query.lastname)
    .then(doc => {
        res.send(doc);
    });
});

router.get('/contacts/:number', (req,res) => {
    contactsService.getContact(req.params.number)
    .then(doc => {
        res.send(doc);
    })
});

router.post('/contacts', (req, res) => {
    contactsService.createContact(req.body)
    .then( (doc, status) => {
        res.status(status).sendStatus(doc);
    });
});

router.put('/contacts/:number', (req, res) => {
    contactsService.updateContact(req.params.number, req.body)
    .then( (doc, status) => {
        res.status(status).sendStatus(doc);
    });
});

module.exports = router;