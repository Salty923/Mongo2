const router = require('express').Router();
//cherrio for html scrape
const cheerio = require('cheerio');
const request = require('request');
const db = require("../models");



router.get('/', (req, res) =>{
    request("https://www.meetup.com/cities/us/il/chicago/tech/", function (error, response, html) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(html);
        const results = [];

        // Select each element in the HTML body from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("a.display-none").each(function (i, element) {
            // An empty array to save the data that we'll scrape
            if (i > 10) {
                return false;
            }else{
                let title = $(element).text();
                let link = $(element).attr('href');

                results.push({
                    title,
                    link
                });
            }
        });
        db.meetup.create(results);
    });
    db.meetup.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var hbsObject = {
                meetup: data
            }
            console.log(hbsObject);
            res.render('index', hbsObject)
        }
    })

});

module.exports = router;