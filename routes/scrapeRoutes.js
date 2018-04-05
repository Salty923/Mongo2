const router = require('express').Router();


//cherrio for html scrape
const cheerio = require('cheerio');
const request = require('request');

router.get("/scrape", function (req, res) {
    // Make a request call to grab the HTML body from the site of your choice
    request("https://www.meetup.com/cities/us/il/chicago/tech/", function (error, response, html) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(html);
        var results = [];

        // Select each element in the HTML body from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("a.display-none").each(function (i, element) {
            // An empty array to save the data that we'll scrape

            var title = $(element).text();
            var link = $(element).attr('href');

            results.push({
                title,
                link
            });
        });
        db.MeetUps.insert(results);
        res.json(results);
    });
});

module.exports = router;