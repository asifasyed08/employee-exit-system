CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    department TEXT,
    designation TEXT,
    joining_date TEXT
);

CREATE TABLE IF NOT EXISTS resignation_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    reason TEXT,
    resignation_date TEXT,
    status TEXT DEFAULT 'Submitted'
);

CREATE TABLE IF NOT EXISTS clearance_tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    resignation_id INTEGER,
    department TEXT,
    status TEXT DEFAULT 'Pending',
    remarks TEXT
);

CREATE TABLE IF NOT EXISTS asset_returns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    laptop_returned TEXT,
    id_card_returned TEXT,
    charger_returned TEXT,
    remarks TEXT
);

CREATE TABLE IF NOT EXISTS settlement_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    salary REAL,
    bonus REAL,
    deductions REAL,
    final_amount REAL
);

CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT,
    status TEXT DEFAULT 'Unread'
);