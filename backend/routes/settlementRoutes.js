const express = require("express");

const router = express.Router();

const {
  createSettlement,
} = require("../controllers/settlementController");

router.post("/", createSettlement);

module.exports = router;