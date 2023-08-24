const { getProduct, getProduct100 } = require("../controllers/product")

const router = require("express").Router();


router.get("/", getProduct);
router.get("/less100", getProduct100);


module.exports = router;