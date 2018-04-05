var db = require("../models");

module.exports = {
    find: function (req, res) {
        db.meetup.find().then(function (dbmeetup) {
            res.json(dbmeetup);
        });
    },
    create: function (req, res) {
        db.meetup.create().then(function (dbmeetup) {
            res.json(dbmeetup);
        });
    }
}