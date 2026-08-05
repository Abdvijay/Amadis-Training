CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

INSERT INTO departments
VALUES
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

INSERT INTO employees
VALUES
(1,'Vijay',50000,101),
(2,'Arun',45000,102),
(3,'Priya',70000,101),
(4,'John',60000,103),
(5,'Meena',55000,NULL),
(6,'Kiran',65000,106);

SELECT * FROM departments;

department_id	department_name
101				"IT"
102				"HR"
103				"Finance"
104				"Testing"
105				"Admin"

SELECT * FROM employees;

employee_id	employee_name	salary		department_id
1			"Vijay"			50000.00	101
2			"Arun"			45000.00	102
3			"Priya"			70000.00	101
4			"John"			60000.00	103
5			"Meena"			55000.00	null
6			"Kiran"			65000.00	106


-- INNER JOIN

SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e INNER JOIN departments d
ON e.department_id = d.department_id;

employee_id	employee_name	department_name
1			"Vijay"			"IT"
2			"Arun"			"HR"
3			"Priya"			"IT"
4			"John"			"Finance"

SELECT e.employee_id, e.employee_name, d.department_name
FROM employees e INNER JOIN departments d
USING(department_id);

employee_id	employee_name	department_name
1			"Vijay"			"IT"
2			"Arun"			"HR"
3			"Priya"			"IT"
4			"John"			"Finance"

-- LEFT JOIN

SELECT e.employee_name, d.department_name
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id;

employee_name	department_name
"Vijay"			"IT"
"Arun"			"HR"
"Priya"			"IT"
"John"			"Finance"
"Meena"			null
"Kiran"			null

-- RIGHT JOIN

SELECT e.employee_name, d.department_name
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id;

employee_name	department_name
"Vijay"			"IT"
"Arun"			"HR"
"Priya"			"IT"
"John"			"Finance"
null			"Testing"
null			"Admin"

-- FULL OUTER JOIN

SELECT e.employee_name, d.department_name
FROM employees e FULL OUTER JOIN departments d
ON e.department_id = d.department_id;

employee_name	department_name
"Vijay"			"IT"
"Arun"			"HR"
"Priya"			"IT"
"John"			"Finance"
"Meena"			null
"Kiran"			null
null			"Testing"
null			"Admin"

-- CROSS JOIN

SELECT employee_name, department_name FROM employees
CROSS JOIN departments;

-- SELF JOIN

CREATE TABLE employee_manager(
	employee_id INT,
	employee_name VARCHAR(50),
	manager_id INT
);

INSERT INTO employee_manager
VALUES
(1,'Vijay',3),
(2,'Arun',3),
(3,'Priya',NULL),
(4,'John',3),
(5,'Meena',4);

SELECT e.employee_name AS employee, m.employee_name AS manager 
FROM employee_manager e LEFT JOIN employee_manager m
ON e.manager_id=m.employee_id;

employee	manager
"Vijay"		"Priya"
"Arun"		"Priya"
"Priya"		null
"John"		"Priya"
"Meena"		"John"

-- MULTIPLE TABLE JOINED

CREATE TABLE projects(
	project_id INT PRIMARY KEY,
	project_name VARCHAR(50),
	employee_id INT
);

INSERT INTO projects
VALUES
(1,'Payroll',1),
(2,'CRM',3),
(3,'ERP',4);

SELECT e.employee_name, d.department_name, p.project_name 
FROM employees e JOIN departments d ON e.department_id=d.department_id
JOIN projects p ON e.employee_id=p.employee_id;

employee_name	department_name		project_name
"Vijay"			"IT"				"Payroll"
"Priya"			"IT"				"CRM"
"John"			"Finance"			"ERP"

-- LEFT ANTI JOIN - Employees without a department.

SELECT e.employee_name, d.department_name
FROM employees e LEFT JOIN departments d
ON e.department_id=d.department_id
WHERE d.department_id IS NULL;

employee_name	department_name
"Meena"			null
"Kiran"			null

-- RIGHT ANTI JOIN - Departments without employees.

SELECT d.department_name
FROM employees e RIGHT JOIN departments d
ON e.department_id=d.department_id
WHERE e.employee_id IS NULL;

department_name
"Testing"
"Admin"

-- FULL ANTI JOIN - Rows that don't match on either side.

SELECT e.employee_name, d.department_name
FROM employees e FULL OUTER JOIN departments d
ON e.department_id=d.department_id
WHERE e.employee_id IS NULL OR d.department_id IS NULL;

employee_name	department_name
"Meena"			null
"Kiran"			null
null			"Testing"
null			"Admin"

-- NATURAL JOIN - Automatically joins using the common column: department_id

SELECT * FROM employees
NATURAL JOIN departments;

department_id	employee_id		employee_name	salary		department_name
101				1				"Vijay"			50000.00	"IT"
102				2				"Arun"			45000.00	"HR"
101				3				"Priya"			70000.00	"IT"
103				4				"John"			60000.00	"Finance"

-- LEFT SEMI JOIN USING EXISTS

SELECT d.department_name FROM departments d
WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);

department_name
"IT"
"HR"
"Finance"

SELECT d.department_name FROM departments d
WHERE d.department_id IN (SELECT e.department_id FROM employees e);

department_name
"IT"
"HR"
"Finance"

-- DIFF BETWEEN JOIN AND SEMI JOIN

SELECT d.department_name FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;

SELECT d.department_name FROM departments d
WHERE EXISTS (
	SELECT 1 FROM employees e WHERE e.department_id = d.department_id
);