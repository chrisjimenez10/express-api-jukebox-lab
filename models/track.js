//Import
const mongoose = require("mongoose");

//Schema
const trackSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    coverArtUrl: {
        type: String,
        required: false,
    },
    soundClipUrl: {
        type: String,
        required: false,
    }
});

//Model
const Track = mongoose.model("Track", trackSchema);

//Export
module.exports = Track;