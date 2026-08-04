CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    department VARCHAR(30),
    salary DECIMAL(10,2),
    age INT
);

INSERT INTO employees
VALUES
(101,'Vijay','IT',50000,23),
(102,'Arun','HR',45000,25),
(103,'Priya','IT',70000,24),
(104,'John','Finance',60000,29),
(105,'Meena','HR',55000,22),
(106,'Kiran','IT',65000,27),
(107,'Divya','Finance',80000,30),
(108,'Rahul','HR',40000,21);

SELECT * FROM employees;

SELECT * FROM employees WHERE department = 'IT';
SELECT * FROM employees WHERE department <> 'IT';
SELECT * FROM employees WHERE NOT department = 'IT';
SELECT * FROM employees WHERE department != 'IT';
SELECT * FROM employees WHERE salary > 60000;
SELECT * FROM employees WHERE salary < 60000;
SELECT * FROM employees WHERE salary >= 60000;
SELECT * FROM employees WHERE salary <= 50000;
SELECT * FROM employees WHERE salary BETWEEN 50000 AND 70000;
SELECT * FROM employees WHERE salary >= 50000 AND salary <= 70000;
SELECT * FROM employees WHERE salary NOT BETWEEN 50000 AND 70000;
SELECT * FROM employees WHERE department IN ('IT','HR');
SELECT * FROM employees WHERE department = 'IT' OR department = 'HR';
SELECT * FROM employees WHERE department NOT IN ('IT','HR');
SELECT * FROM employees WHERE employee_name LIKE 'V%';
SELECT * FROM employees WHERE employee_name LIKE '%a';
SELECT * FROM employees WHERE employee_name LIKE '%ar%';
SELECT * FROM employees WHERE employee_name LIKE '_i%';
SELECT * FROM employees WHERE employee_name LIKE '_____';
SELECT * FROM employees WHERE employee_name ILIKE 'vijay';
SELECT * FROM employees WHERE employee_name NOT LIKE 'V%';
SELECT * FROM employees WHERE employee_name NOT ILIKE 'v%';
SELECT * FROM employees WHERE salary IS NULL;
SELECT * FROM employees WHERE salary IS NOT NULL;
SELECT * FROM employees WHERE department='IT' AND salary > 60000;
SELECT * FROM employees WHERE department='IT' OR department='Finance';
SELECT * FROM employees WHERE salary > ANY (SELECT salary FROM employees WHERE department='HR');
SELECT * FROM employees WHERE salary > ALL (SELECT salary FROM employees WHERE department='HR');
SELECT * FROM employees e WHERE EXISTS ( SELECT 1 FROM employees WHERE department='Finance');
SELECT * FROM employees e WHERE NOT EXISTS ( SELECT 1 FROM employees WHERE department='Testing');
SELECT DISTINCT department FROM employees;
SELECT employee_name, salary, salary + 1000 AS increment FROM employees;
SELECT salary - 5000 FROM employees;
