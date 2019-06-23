let contactsModel = require('../models/contactsModel');

function getAllContacts(firstname, lastname) {
    return contactsModel.find().then(doc => {
        return doc;
    });
}

function getContact(number) {
    return contactsModel.findOne({number: number.toString()})
    .then(doc => {
        return doc;
    });
}

function createContact(body) {
    let model = new contactsModel(body);
    return model.save()
    .then(doc => {
        if(!doc || doc.length == 0) {
            return (doc, 500);
        }
        else {
            return (doc, 201);
        }
    })
    .catch(err => {
        if(err.code == 11000) {
            return (err, 400);
        }
        return (err, 500);
    });
}

function updateContact(number, body) {
    let query = {number: number};
    return contactsModel.findOneAndUpdate(query, body)
    .then(doc => {
        if(!doc || doc.length == 0) {
            return (doc, 404);
        }
        else {
            return (doc, 200);
        }
    })
    .catch(err => {
        console.log(err);
        return (err, 500);
    });
}

module.exports = {
    getAllContacts: getAllContacts,
    getContact: getContact,
    createContact: createContact,
    updateContact: updateContact
}