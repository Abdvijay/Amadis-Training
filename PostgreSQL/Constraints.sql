SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_type = 'BASE TABLE'
ORDER BY table_name;

DROP TABLE CTAS_SIMPLE_TABLE;
DROP TABLE DEPARTMENTS;
DROP TABLE SIMPLE_TABLE;
DROP TABLE EMPLOYEE;
DROP TABLE EMPLOYEE_MANAGER;
DROP TABLE EMPLOYEES;
DROP TABLE EMPLOYEE_DETAILS;
DROP VIEW SIMPLE_TABLE;

/* CONSTRAINTS */

CREATE TABLE employees (
    employee_id INT,
    employee_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    age INT,
    salary DECIMAL(10,2),
    department VARCHAR(50),
    joining_date DATE
);

INSERT INTO employees
VALUES
(101,'Vijay','vijay@gmail.com','9876543210',23,50000,'IT','2025-01-10'),
(102,'Arun','arun@gmail.com','9876543211',25,45000,'HR','2025-02-15'),
(103,'Priya','priya@gmail.com','9876543212',24,60000,'Finance','2025-03-20');

SELECT * FROM employees;

-- Setting Primary Key

ALTER TABLE employees
ADD CONSTRAINT pk_employee PRIMARY KEY(employee_id);

-- Checking Primary Key

SELECT * FROM information_schema.table_constraints
WHERE table_name='employees';

INSERT INTO employees
VALUES
(101,'Kiran','kiran@gmail.com','9999999999',27,70000,'IT','2025-05-10');

-- Setting Not Null Constraints

ALTER TABLE employees
ALTER COLUMN employee_name SET NOT NULL;

-- Checking adding null value to that column

INSERT INTO employees
VALUES
(104,NULL,'meena@gmail.com','9876543213',22,35000,'HR','2025-04-01');

-- Setting UNIQUE constraints

ALTER TABLE employees
ADD CONSTRAINT uq_email UNIQUE(email);

-- Checking Unique key contraints

INSERT INTO employees
VALUES
(104,'Meena','vijay@gmail.com','9876543213',22,35000,'HR','2025-04-01');

-- Setting CHECK constraints

ALTER TABLE employees
ADD CONSTRAINT chk_age CHECK(age >= 18);

ALTER TABLE employees
ADD CONSTRAINT chk_salary CHECK(salary > 0);

-- Checking CHECK constraints

INSERT INTO employees
VALUES
(104,'Meena','meena@gmail.com','9876543213',15,35000,'HR','2025-04-01');

INSERT INTO employees
VALUES
(104,'Meena','meena@gmail.com','9876543213',23,-1000,'HR','2025-04-01');

-- DEFAULT CONTRAINTS Setting

ALTER TABLE employees
ADD COLUMN status VARCHAR(20);

ALTER TABLE employees
ALTER COLUMN status SET DEFAULT 'ACTIVE';

INSERT INTO EMPLOYEES (EMPLOYEE_ID,EMPLOYEE_NAME,EMAIL,PHONE,AGE,SALARY,DEPARTMENT,JOINING_DATE)
VALUES
	(
		104,
		'Meena',
		'meena@gmail.com',
		'9876543213',
		22,
		35000,
		'HR',
		'2025-04-01'
	);

SELECT * FROM employees;

-- FOREIGN KEY CONTRAINTS

CREATE TABLE departments
(
	department_id INT PRIMARY KEY,
	department_name VARCHAR(50)
);

INSERT INTO departments
VALUES
(1,'IT'),
(2,'HR'),
(3,'Finance');

ALTER TABLE employees
ADD COLUMN department_id INT;

UPDATE employees
SET department_id=1
WHERE employee_id=101;
UPDATE employees
SET department_id=2
WHERE employee_id=102;
UPDATE employees
SET department_id=3
WHERE employee_id=103;
UPDATE employees
SET department_id=2
WHERE employee_id=104;

ALTER TABLE employees
ADD CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES departments(department_id);

INSERT INTO EMPLOYEES (
  EMPLOYEE_ID, EMPLOYEE_NAME, EMAIL, 
  PHONE, AGE, SALARY, DEPARTMENT, JOINING_DATE, 
  DEPARTMENT_ID
) 
VALUES (105, 'Rahul', 'rahul@gmail.com', '9999999999', 24, 45000, 'Testing', '2025-06-01', 10);

-- VIEW CONSTRAINTS

SELECT constraint_name,constraint_type FROM information_schema.table_constraints
WHERE table_name = 'employees';


-- INDEXES 

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees
VALUES
(101,'Vijay','vijay@gmail.com','IT',50000),
(102,'Arun','arun@gmail.com','HR',45000),
(103,'Priya','priya@gmail.com','Finance',60000),
(104,'John','john@gmail.com','IT',70000),
(105,'Meena','meena@gmail.com','HR',55000);

SELECT * FROM employees;

-- BEFORE INDEX
SELECT * FROM employees
WHERE employee_name='Vijay';

-- CREATE INDEX
CREATE INDEX idx_employee_name ON employees(employee_name);

-- AFTER INDEX
SELECT * FROM employees
WHERE employee_name='Vijay';

-- BEFORE INDEX
EXPLAIN
SELECT * FROM employees
WHERE department='IT' AND salary=70000;

-- CREATE MULTIPLE INDEX
CREATE INDEX idx_department_salary ON employees(department,salary);

-- AFTER INDEX
EXPLAIN
SELECT * FROM employees
WHERE department='IT' AND salary=70000;

-- BEFORE INDEX
SELECT * FROM employees
WHERE email = 'john@gmail.com';

-- CREATE INDEX
CREATE INDEX idx_email ON employees(email);

-- AFTER INDEX
SELECT * FROM employees
WHERE email = 'john@gmail.com';

-- DROP INDEX
DROP INDEX idx_department_salary;
DROP INDEX idx_employee_name;

-- VIEW INDEXES
SELECT * FROM pg_indexes
WHERE tablename='employees';

-- RENAME INDEX
ALTER INDEX idx_email RENAME TO idx_employee_email;

EXPLAIN ANALYZE
SELECT * FROM employees WHERE employee_name='Vijay';