const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    role: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    nation: { type: String, required: true, trim: true, minlength: 2 },
    league: { type: String, required: true, trim: true, minlength: 2 },
    club: { type: String, required: true, trim: true, minlength: 2 },
    rating: { type: Number, required: true },
    cardImage: { type: String, required: true }
});

const squadSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    formation: { type: String, required: true },
    data: { type: String, required: true }
});


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {type: String, required: true},
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: /\S+@\S+\.\S+/
    },
    password: {type: String, required: true},
});

let Player = mongoose.model('Player', playerSchema);

let Squad = mongoose.model('Squad', squadSchema);

let User = mongoose.model('User', userSchema);

module.exports = {Player: Player, Squad: Squad, User: User}