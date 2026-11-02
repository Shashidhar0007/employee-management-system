CREATE TABLE IF NOT EXISTS employees
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO employees(name,email)
VALUES
('Shashidhar','shash@test.com'),
('Rahul','rahul@test.com');