CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

INSERT INTO customers
VALUES
(101,'Vijay','Chennai'),
(102,'Arun','Madurai'),
(103,'Priya','Coimbatore');

-- SCD - TYPE 0 - NOTHING CHANGED

SELECT * FROM customers;

customer_id		customer_name 	city
102				"Arun"			"Madurai"
103				"Priya"			"Coimbatore"
101				"Vijay"			"Chennai"

-- SCD - TYPE - 1 - OVERWRITE

UPDATE customers
SET city = 'Bangalore'
WHERE customer_id = 101;

SELECT * FROM customers;

customer_id		customer_name 	city
102				"Arun"			"Madurai"
103				"Priya"			"Coimbatore"
101				"Vijay"			"Bangalore"

-- SCD - TYPE - 2 - Keep history by inserting a new row

CREATE TABLE customer_history(
    customer_key SERIAL PRIMARY KEY,
    customer_id INT,
    customer_name VARCHAR(50),
    city VARCHAR(50),
    start_date DATE,
    end_date DATE,
    is_current BOOLEAN
);

INSERT INTO customer_history(customer_id,customer_name,city,start_date,end_date,is_current)
VALUES
(101,'Vijay','Chennai','2024-01-01',NULL,TRUE);

UPDATE customer_history
SET end_date='2025-01-31',is_current=FALSE
WHERE customer_id=101 AND is_current=TRUE;

INSERT INTO customer_history(customer_id,customer_name,city,start_date,end_date,is_current)
VALUES
(101,'Vijay','Bangalore','2025-02-01',NULL,TRUE);

SELECT * FROM customer_history;

customer_key	customer_id		customer_name	city		start_date		end_date		is_current
1				101				"Vijay"			"Chennai"	"2024-01-01"	"2025-01-31"	false
2				101				"Vijay"			"Bangalore"	"2025-02-01"	null			true

-- SCD - TYPE - 3 - PREVIOUS VALUES STORE

CREATE TABLE customer_type3(
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    current_city VARCHAR(50),
    previous_city VARCHAR(50)
);

INSERT INTO customer_type3 VALUES(101, 'VIJAY', 'CHENNAI', NULL);

SELECT * FROM customer_type3;

customer_id		customer_name	current_city	previous_city
101				"VIJAY"			"CHENNAI"		null

-- SCD - TYPE - 4 - Current data and history are stored in separate tables

-- SCD - TYPE - 6 - HYBRID IT COMBINES TYPE 1,2,3

| ID  | Current City | Previous City | Start Date | End Date | Current Flag |
| --- | ------------ | ------------- | ---------- | -------- | ------------ |
| 101 | Bangalore    | Chennai       | 2025-02-01 | NULL     | TRUE         |
