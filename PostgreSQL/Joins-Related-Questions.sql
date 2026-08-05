CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO departments VALUES
(101,'IT'),
(102,'HR'),
(103,'Finance'),
(104,'Testing'),
(105,'Admin');

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary DECIMAL(10,2),
    department_id INT
);

INSERT INTO employees VALUES
(1,'Vijay',50000,101),
(2,'Arun',45000,102),
(3,'Priya',70000,101),
(4,'John',60000,103),
(5,'Meena',55000,NULL),
(6,'Kiran',65000,106);

CREATE TABLE projects (
    project_id INT PRIMARY KEY,
    project_name VARCHAR(50),
    employee_id INT
);

INSERT INTO projects VALUES
(1,'Payroll',1),
(2,'CRM',3),
(3,'ERP',4),
(4,'Inventory',7);

CREATE TABLE employee_manager (
    employee_id INT,
    employee_name VARCHAR(50),
    manager_id INT
);

INSERT INTO employee_manager VALUES
(1,'Vijay',3),
(2,'Arun',3),
(3,'Priya',NULL),
(4,'John',3),
(5,'Meena',4);

SELECT * FROM departments;
SELECT * FROM employees;
SELECT * FROM projects;
SELECT * FROM employee_manager;

-- 1. INNER JOIN QURIES

SELECT e.employee_name, d.department_name
FROM employees e INNER JOIN departments d
ON e.department_id = d.department_id;

SELECT e.employee_name, d.department_name, e.salary FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;

SELECT e.employee_name FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
WHERE d.department_name = 'IT';

SELECT e.*, d.department_name FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
WHERE e.salary > 50000;

SELECT d.department_name,COUNT(*) FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id
GROUP BY d.department_name;

-- 2. LEFT JOIN QUERIES

SELECT e.* FROM employees e
LEFT JOIN departments d
USING(department_id);

SELECT e.* FROM employees e
LEFT JOIN departments d
USING(department_id)
WHERE d.department_id IS NULL;

SELECT e.employee_name,p.project_name FROM employees e
LEFT JOIN projects p
ON e.employee_id = p.employee_id;

SELECT e.employee_name,p.project_name FROM employees e
LEFT JOIN projects p
ON e.employee_id = p.employee_id
WHERE p.employee_id IS NULL;

-- 3. RIGHT JOIN QUERIES

SELECT d.department_name, e.employee_name FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id;

SELECT d.department_name FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id
WHERE e.department_id IS NULL;

-- 4. FULL JOIN

SELECT e.*, d.* FROM employees e
FULL JOIN departments d
ON e.department_id = d.department_id;

SELECT e.employee_name, d.department_name FROM employees e
FULL JOIN departments d
ON e.department_id = d.department_id
WHERE e.employee_id IS NULL OR d.department_id IS NULL;

-- 5. CROSS JOIN

SELECT e.employee_name,d.department_name FROM employees e
CROSS JOIN departments d;

SELECT COUNT(*) FROM employees e CROSS JOIN departments d;

-- 6. SELF JOIN

SELECT f.employee_name as Employee_name, s.employee_name as Manager_name FROM employee_manager f
LEFT JOIN employee_manager s
ON f.manager_id = s.employee_id;

SELECT f.employee_name as Employee_name, s.employee_name as Manager_name FROM employee_manager f
JOIN employee_manager s
ON f.manager_id = s.employee_id
WHERE s.employee_name = 'Priya';

SELECT s.employee_name as Employee_name, COUNT(*) FROM employee_manager f
JOIN employee_manager s
ON f.manager_id = s.employee_id
GROUP BY s.employee_name
HAVING COUNT(*) > 1;

-- 7. MULTIPLE JOIN

SELECT e.employee_name, d.department_name, p.project_name FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN projects p ON e.employee_id = p.employee_id;

SELECT e.employee_name, d.department_name, p.project_name FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
LEFT JOIN projects p ON e.employee_id = p.employee_id;