CREATE TABLE employees_chennai (
    employee_id INT,
    employee_name VARCHAR(50),
    department VARCHAR(30)
);

INSERT INTO employees_chennai
VALUES
(101,'Vijay','IT'),
(102,'Arun','HR'),
(103,'Priya','Finance'),
(104,'John','Testing'),
(105,'Meena','IT');

CREATE TABLE employees_bangalore (
    employee_id INT,
    employee_name VARCHAR(50),
    department VARCHAR(30)
);

INSERT INTO employees_bangalore
VALUES
(103,'Priya','Finance'),
(104,'John','Testing'),
(105,'Meena','IT'),
(106,'Kiran','HR'),
(107,'Divya','Finance');

SELECT * FROM employees_chennai;

employee_id		employee_name	department
101				"Vijay"			"IT"
102				"Arun"			"HR"
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"

SELECT * FROM employees_bangalore;

employee_id		employee_name	department
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"
106				"Kiran"			"HR"
107				"Divya"			"Finance"

SELECT * FROM employees_chennai
UNION
SELECT * FROM employees_bangalore
ORDER BY employee_id ASC;

employee_id		employee_name	department
101				"Vijay"			"IT"
102				"Arun"			"HR"
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"
106				"Kiran"			"HR"
107				"Divya"			"Finance"

SELECT * FROM employees_chennai
UNION ALL
SELECT * FROM employees_bangalore;

employee_id		employee_name	department
101				"Vijay"			"IT"
102				"Arun"			"HR"
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"
106				"Kiran"			"HR"
107				"Divya"			"Finance"

SELECT * FROM employees_chennai
INTERSECT
SELECT * FROM employees_bangalore
ORDER BY employee_id ASC;

employee_id		employee_name	department
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"


-- If both tables had Priya twice, INTERSECT ALL would return Priya twice.
INSERT INTO employees_chennai VALUES(103, 'Priya', 'Finance');
INSERT INTO employees_bangalore VALUES(103, 'Priya', 'Finance');

SELECT * FROM employees_chennai
INTERSECT ALL
SELECT * FROM employees_bangalore
ORDER BY employee_id ASC;

employee_id		employee_name	department
103				"Priya"			"Finance"
103				"Priya"			"Finance"
104				"John"			"Testing"
105				"Meena"			"IT"

SELECT * FROM employees_chennai
EXCEPT
SELECT * FROM employees_bangalore;

employee_id		employee_name	department
101				"Vijay"			"IT"
102				"Arun"			"HR"

SELECT * FROM employees_bangalore
EXCEPT
SELECT * FROM employees_chennai;

employee_id		employee_name	department
106				"Kiran"			"HR"
107				"Divya"			"Finance"

INSERT INTO employees_chennai VALUES(101,'Vijay','IT');

SELECT * FROM employees_chennai
EXCEPT ALL
SELECT * FROM employees_bangalore;

employee_id		employee_name	department
101				"Vijay"			"IT"
101				"Vijay"			"IT"
102				"Arun"			"HR"