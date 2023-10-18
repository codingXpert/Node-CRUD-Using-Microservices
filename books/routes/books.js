const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/getAll", bookController.getAll);
router.get("/get/:id", bookController.getById);
router.post("/create", bookController.create);
router.delete("/delete/:id", bookController.remove);

module.exports = router;