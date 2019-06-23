let contactsModel = require('../models/contactsModel');

function getAllContacts(firstname, lastname) {
    return contactsModel.find().then(doc => {
        return {
            doc: doc,
            status: 200
        };
    });
}

function getContact(number) {
    let query = {number: number.toString()};
    return contactsModel.findOne(query)
    .then(doc => {
        let status = 200;
        if(!doc || doc.length == 0) {
            status = 404;
        }
        return {
            doc: doc,
            status: status
        };
    });
}

function createContact(body) {
    let model = new contactsModel(body);
    return model.save()
    .then(doc => {
        let status = 201;
        if(!doc || doc.length == 0) {
            status = 500;
        }
        return {
            doc: doc, 
            status: status
        };
    })
    .catch(err => {
        let status = 400;
        if(err.code == 11000) {
            status = 500;
        }
        return {
            doc: err,
            status: status
        }
    });
}

function updateContact(number, body) {
    let query = {number: number.toString()};
    return contactsModel.findOneAndUpdate(query, body)
    .then(doc => {
        let status = 200;
        if(!doc || doc.length == 0) {
            status = 404;
        }
        return {
            doc: doc,
            status: status
        };
    })
    .catch(err => {
        return {
            doc: err,
            status: 500
        };
    });
}

function deleteContact(number) {
    console.log(number);
    let query = {number: number.toString()};
    return contactsModel.findOneAndDelete(query)
    .then(doc => {
        let status = 200;
        if(!doc || doc.length == 0) {
            status = 404;
        }
        return {
            doc: doc,
            status: status
        };
    })
    .catch(err => {
        return {
            doc: err,
            status: 500
        }
    });
}

module.exports = {
    getAllContacts: getAllContacts,
    getContact: getContact,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
}