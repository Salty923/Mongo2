var db = require("../models");

module.exports = {
    find: function (req, res) {
        db.meetup.find({}).limit(10).then(function (dbmeetup) {
            res.json(dbmeetup);
        });
    },
    create: function (req, res) {
        db.meetup.create({}).limit(10).then(function (dbmeetup) {
            res.json(dbmeetup);
        });
    }
}