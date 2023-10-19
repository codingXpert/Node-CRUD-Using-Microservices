const express = require('express');
const router = express.Router();
const customerController = require("../controllers/customerController");

router.post("/create", customerController.create);
router.get("/getAll", customerController.getAll);
router.get("/get/:id", customerController.getById);

module.exports = router;