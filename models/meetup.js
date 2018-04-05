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

var Meetup = mongoose.model("Meetup", meetupSchema);

module.exports = Meetup;