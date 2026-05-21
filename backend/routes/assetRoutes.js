const express = require("express");

const router = express.Router();

const {
  returnAsset,
} = require("../controllers/assetController");

router.post("/return", returnAsset);

module.exports = router;