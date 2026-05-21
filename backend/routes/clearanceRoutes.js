const express = require("express");

const router = express.Router();

const {
  updateClearanceStatus,
} = require("../controllers/clearanceController");

router.put("/:id/status", updateClearanceStatus);

module.exports = router;