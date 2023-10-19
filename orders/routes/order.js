const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/create", orderController.create);

module.exports = router;