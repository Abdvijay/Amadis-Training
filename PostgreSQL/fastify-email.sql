INSERT INTO departments
(name, "createdAt", "updatedAt")
VALUES
('IT', NOW(), NOW()),
('CSE', NOW(), NOW()),
('ECE', NOW(), NOW());

SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM employee_profiles;

INSERT INTO employee_profiles (
  "employeeId", phone, designation, 
  "createdAt", "updatedAt"
) 
VALUES(1, '9876543210', 'Software Engineer',NOW(), NOW());

INSERT INTO projects (name, description, "createdAt", "updatedAt") 
VALUES 
  ('Railway App', 'Train booking application',NOW(), NOW()),
  ('Employee Portal', 'Employee management application',NOW(), NOW()), 
  ('Training Project', 'Fastify training project',NOW(), NOW());

SELECT * FROM projects;

INSERT INTO employee_projects ("employeeId", "projectId", "createdAt","updatedAt") 
VALUES 
(1, 1, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(1, 3, NOW(), NOW());

-- INSERT INTO employee_projects ("employeeId", "projectId", "createdAt","updatedAt") 
-- VALUES 
-- (2, 1, NOW(), NOW()),
-- (2, 3, NOW(), NOW());

SELECT * FROM employee_projects;

SELECT
    e.id,
    e.name,
    e.email,
    e."departmentId",
    d.name AS department
FROM employees e
LEFT JOIN departments d
    ON e."departmentId" = d.id;

-- VIEW

CREATE OR REPLACE VIEW employee_details_view AS
SELECT
    e.id,
    e.name,
    e.email,
    e."departmentId",
    d.name AS department
FROM employees e
LEFT JOIN departments d
    ON e."departmentId" = d.id;

SELECT * FROM employee_details_view;