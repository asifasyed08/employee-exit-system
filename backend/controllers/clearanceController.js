const db = require("../database/db");

exports.updateClearanceStatus = (req, res) => {
  const { id } = req.params;

  const { status, remarks } = req.body;

  const query = `
    UPDATE clearance_tasks
    SET status = ?, remarks = ?
    WHERE id = ?
  `;

  db.run(query, [status, remarks, id], function (err) {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    res.json({
      message: "Clearance updated successfully",
    });
  });
};