const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customerController");

router.post("/create", customerController.create);

module.exports = router;