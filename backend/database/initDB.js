const fs = require("fs");
const path = require("path");
const db = require("./db");

const schema = fs.readFileSync(
  path.join(__dirname, "schema.sql"),
  "utf8"
);

db.exec(schema, (err) => {
  if (err) {
    console.log("Error creating tables", err);
  } else {
    console.log("Tables created successfully");
  }
});