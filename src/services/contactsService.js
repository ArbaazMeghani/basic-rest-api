let contactsModel = require('../models/contactsModel');

function getAllContacts(firstname, lastname) {
    return {
        first_name: firstname,
        last_name: lastname
    };
}

function getContact(number) {
    return {
        phone_number: number
    };
}

module.exports = {
    getAllContacts: getAllContacts,
    getContact: getContact
}