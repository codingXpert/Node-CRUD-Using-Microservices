const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/getAll", bookController.getAll);
router.post("/create", bookController.create);

module.exports = router;