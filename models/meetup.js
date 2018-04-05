var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var meetupSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    link: {
        type: String,
        required: true
    }
});

var meetup = mongoose.model("meetup", meetupSchema);

module.exports = meetup;