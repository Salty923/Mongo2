const router = require('express').Router();
var htmlRouter = require("./htmlRoutes");

router.use("/", htmlRouter);

module.exports = router;