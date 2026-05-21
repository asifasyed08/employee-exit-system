const db = require("../database/db");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  db.run(query, [name, email, hashedPassword, role], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "User registered successfully",
    });
  });
};
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, user) => {
      if (!user) {
        return res.status(400).json({
          message: "User not found",
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        "secretkey",
        { expiresIn: "1d" }
      );

      res.json({
        token,
        role: user.role,
      });
    }
  );
};