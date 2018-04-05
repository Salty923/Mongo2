var router = require("express").Router();
var linkController = require("../controllers/linkController");

// localhost/products/
router.get("/find", linkController.find);
router.post('/new',linkController.create);


module.exports = router;