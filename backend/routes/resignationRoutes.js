const express = require("express");

const router = express.Router();

const {
  createResignation,
  getResignations,
} = require("../controllers/resignationController");

router.post("/", createResignation);

router.get("/", getResignations);

module.exports = router;