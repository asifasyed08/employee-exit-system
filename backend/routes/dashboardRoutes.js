const express = require("express");

const router = express.Router();

const {
  getDashboardData,
} = require("../controllers/dashboardController");

router.get("/exits", getDashboardData);

module.exports = router;