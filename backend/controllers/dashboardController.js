const db = require("../database/db");

exports.getDashboardData = (req, res) => {
  const query = `
    SELECT
    COUNT(*) as total_exits
    FROM resignation_requests
  `;

  db.get(query, [], (err, row) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json(row);
  });
};