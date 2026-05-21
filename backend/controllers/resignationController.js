const db = require("../database/db");

exports.createResignation = (req, res) => {
  const {
    employee_id,
    reason,
    resignation_date,
  } = req.body;

  const checkQuery = `
    SELECT * FROM resignation_requests
    WHERE employee_id = ?
    AND status != 'Completed'
  `;

  db.get(checkQuery, [employee_id], (err, row) => {
    if (row) {
      return res.status(400).json({
        message: "Active resignation already exists",
      });
    }

    const insertQuery = `
      INSERT INTO resignation_requests
      (employee_id, reason, resignation_date)
      VALUES (?, ?, ?)
    `;

    db.run(
      insertQuery,
      [employee_id, reason, resignation_date],
      function (err) {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }

        res.json({
          message: "Resignation submitted successfully",
        });
      }
    );
  });
};

exports.getResignations = (req, res) => {
  const query = `
    SELECT * FROM resignation_requests
    LIMIT 10 OFFSET 0
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(rows);
  });
};