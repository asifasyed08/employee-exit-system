const db = require("../database/db");

exports.returnAsset = (req, res) => {
  const {
    employee_id,
    laptop_returned,
    id_card_returned,
    charger_returned,
    remarks,
  } = req.body;

  const query = `
    INSERT INTO asset_returns
    (
      employee_id,
      laptop_returned,
      id_card_returned,
      charger_returned,
      remarks
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [
      employee_id,
      laptop_returned,
      id_card_returned,
      charger_returned,
      remarks,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Asset return recorded",
      });
    }
  );
};