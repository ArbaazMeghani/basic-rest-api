let express = require('express');
let router = express.Router();
let contactsService = require('../services/contactsService');

router.get('/contacts', (req,res) => {
    contactsService.getAllContacts(req.query.firstname, req.query.lastname)
    .then(data => {
        res.status(data.status).send(data.doc);
    });
});

router.get('/contacts/:number', (req,res) => {
    contactsService.getContact(req.params.number)
    .then( data => {
        res.status(data.status).send(data.doc);
    })
});

router.post('/contacts', (req, res) => {
    if(!req.body || !req.body.number) {
        res.status(400).send("Missing Request Body");
        return;
    }
    contactsService.createContact(req.body)
    .then( data => {
        res.status(data.status).send(data.doc);
    });
});

router.put('/contacts/:number', (req, res) => {
    if(!req.body || !req.body.number) {
        res.status(400).send("Missing Request Body");
        return;
    }
    contactsService.updateContact(req.params.number, req.body)
    .then( data => {
        res.status(data.status).send(data.doc);
    });
});

router.delete('/contacts/:number', (req, res) => {
    contactsService.deleteContact(req.params.number)
    .then( data => {
        res.status(data.status).send(data.doc);
    });
});

module.exports = router;