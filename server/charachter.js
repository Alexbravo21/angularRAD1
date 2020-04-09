const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let charachterSchema = new Schema({
    name: String,
    id: Number,
    realm: String,
    playable_class: String,
    playable_race: String,
    gender: String,
    faction: String,
    level: Number,
    avatar_url: String,
    bust_url: String,
    render_url: String
});

module.exports = mongoose.model('wowchars', charachterSchema, 'wowchars');