let mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 2
    },
    pref_position: {
        type: String,
    },
    game1Status: {
        type: String,
    },
    game2Status: {
        type: String,
    },
    game3Status: {
        type: String,
    },
},{ timestamps : true })

var Player = mongoose.model('Player', PlayerSchema);