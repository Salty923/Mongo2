const router = require('express').Router();
const htmlRouter = require("./htmlRoutes");
const apiRouter = require("./apiRoutes");
const scrapeRoutes = require('./scrapeRoutes');

router.use("/", htmlRouter);
router.use("/scrape", scrapeRoutes);

module.exports = router;