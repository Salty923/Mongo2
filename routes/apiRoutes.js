var router = require("express").Router();
var linkController = require("../controllers/linkController");

// localhost/products/
router.get("/", linkController.find);


module.exports = router;