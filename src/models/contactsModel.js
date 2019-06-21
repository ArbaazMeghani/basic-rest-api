let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    number: {
        type: String,
        require: true
    }
});

mongoose.model("contacts", contactSchema);