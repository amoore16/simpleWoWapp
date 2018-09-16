const mongoose = require('mongoose');

var Character = mongoose.model('Character', {
    name: { type: String },
    realm: { type: String },
    locale: { type: String }
});

module.exports = { Character };