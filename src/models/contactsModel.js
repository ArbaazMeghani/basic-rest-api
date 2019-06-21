let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    number: {
        type: String,
        required: true,
        unique: true
    }
});

modules.exports = mongoose.model("contacts", contactSchema);