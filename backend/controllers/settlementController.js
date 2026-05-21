const db = require("../database/db");

exports.createSettlement = (req, res) => {
  const {
    employee_id,
    salary,
    bonus,
    deductions,
    final_amount,
  } = req.body;

  const query = `
    INSERT INTO settlement_records
    (
      employee_id,
      salary,
      bonus,
      deductions,
      final_amount
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(
    query,
    [
      employee_id,
      salary,
      bonus,
      deductions,
      final_amount,
    ],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message,
        });
      }

      res.json({
        message: "Settlement created successfully",
      });
    }
  );
};