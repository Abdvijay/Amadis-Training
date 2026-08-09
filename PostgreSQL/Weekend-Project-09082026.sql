-- TABLE CREATIONS

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE doctors (
    doctor_id INT PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    department_id INT NOT NULL,
    CONSTRAINT fk_doctor_department FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE patients (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    gender VARCHAR(10),
    date_of_birth DATE,
    phone VARCHAR(15)
);

CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_status VARCHAR(20) DEFAULT 'COMPLETED',
    CONSTRAINT fk_appointment_patient
        FOREIGN KEY (patient_id)
        REFERENCES patients(patient_id),
    CONSTRAINT fk_appointment_doctor
        FOREIGN KEY (doctor_id)
        REFERENCES doctors(doctor_id)
);

CREATE TABLE medicines (
    medicine_id INT PRIMARY KEY,
    medicine_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

CREATE TABLE prescriptions (
    prescription_id INT PRIMARY KEY,
    appointment_id INT NOT NULL,
    medicine_id INT NOT NULL,
    dosage VARCHAR(100),
    quantity INT,
    CONSTRAINT fk_prescription_appointment
        FOREIGN KEY (appointment_id)
        REFERENCES appointments(appointment_id),
    CONSTRAINT fk_prescription_medicine
        FOREIGN KEY (medicine_id)
        REFERENCES medicines(medicine_id)
);

CREATE TABLE bills (
    bill_id INT PRIMARY KEY,
    appointment_id INT NOT NULL,
    bill_amount DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'PAID',
    bill_date DATE NOT NULL,
    CONSTRAINT fk_bill_appointment
        FOREIGN KEY (appointment_id)
        REFERENCES appointments(appointment_id)
);

-- TABLE DATA INSERTED

INSERT INTO departments (department_id, department_name)
VALUES
(1, 'Cardiology'),
(2, 'Neurology'),
(3, 'Orthopedics'),
(4, 'Pediatrics'),
(5, 'General Medicine');

INSERT INTO doctors
    (doctor_id, doctor_name, specialization, department_id)
VALUES
(101, 'Dr. Rajesh', 'Cardiologist', 1),
(102, 'Dr. Priya', 'Neurologist', 2),
(103, 'Dr. Arun', 'Orthopedic Surgeon', 3),
(104, 'Dr. Meena', 'Pediatrician', 4),
(105, 'Dr. Karthik', 'General Physician', 5);

INSERT INTO patients
    (patient_id, patient_name, gender, date_of_birth, phone)
VALUES
(201, 'Vijay', 'Male', '2000-05-15', '9876543210'),
(202, 'Arun', 'Male', '1995-08-20', '9876543211'),
(203, 'Priya', 'Female', '1998-03-10', '9876543212'),
(204, 'Meena', 'Female', '2002-11-25', '9876543213'),
(205, 'Kiran', 'Male', '1990-07-18', '9876543214'),
(206, 'Divya', 'Female', '1997-01-30', '9876543215'),
(207, 'Rahul', 'Male', '1988-09-12', '9876543216'),
(208, 'Swathi', 'Female', '2001-06-05', '9876543217');

INSERT INTO appointments
    (appointment_id, patient_id, doctor_id, appointment_date, appointment_status)
VALUES
(1001,201,101,'2026-08-01','COMPLETED'),
(1002,202,101,'2026-08-02','COMPLETED'),
(1003,203,101,'2026-08-03','COMPLETED'),
(1004,204,101,'2026-08-04','COMPLETED'),
(1005,205,101,'2026-08-05','COMPLETED'),
(1006,206,101,'2026-08-06','COMPLETED'),
(1007,207,101,'2026-08-07','COMPLETED'),
(1008,208,101,'2026-08-08','COMPLETED'),
(1009,201,101,'2026-08-09','COMPLETED'),
(1010,202,101,'2026-08-09','COMPLETED'),
(1011,203,101,'2026-08-09','COMPLETED'),
(1012,204,101,'2026-08-09','COMPLETED'),
(1013,205,101,'2026-08-09','COMPLETED'),
(1014,206,101,'2026-08-09','COMPLETED'),
(1015,207,101,'2026-08-09','COMPLETED'),
(1016,208,101,'2026-08-09','COMPLETED'),
(1017,201,101,'2026-08-09','COMPLETED'),
(1018,202,101,'2026-08-09','COMPLETED'),
(1019,203,101,'2026-08-09','COMPLETED'),
(1020,204,101,'2026-08-09','COMPLETED'),
(1021,205,101,'2026-08-09','COMPLETED'),
(1022,206,101,'2026-08-09','COMPLETED');

INSERT INTO appointments
    (appointment_id, patient_id, doctor_id, appointment_date, appointment_status)
VALUES
-- Dr. Priya
(1023,201,102,'2026-08-02','COMPLETED'),
(1024,203,102,'2026-08-04','COMPLETED'),
(1025,205,102,'2026-08-06','COMPLETED'),
(1026,207,102,'2026-08-08','COMPLETED'),

-- Dr. Arun
(1027,202,103,'2026-08-03','COMPLETED'),
(1028,204,103,'2026-08-05','COMPLETED'),
(1029,206,103,'2026-08-07','COMPLETED'),

-- Dr. Meena
(1030,201,104,'2026-08-04','COMPLETED'),
(1031,204,104,'2026-08-06','COMPLETED'),
(1032,208,104,'2026-08-08','COMPLETED'),

-- Dr. Karthik
(1033,202,105,'2026-08-05','COMPLETED'),
(1034,205,105,'2026-08-07','COMPLETED');

INSERT INTO appointments
    (appointment_id, patient_id, doctor_id, appointment_date, appointment_status)
VALUES
(1035,201,102,'2025-02-10','COMPLETED'),
(1036,201,101,'2025-04-15','COMPLETED'),
(1037,201,103,'2025-06-20','COMPLETED'),
(1038,201,102,'2025-09-05','COMPLETED'),
(1039,201,101,'2025-12-10','COMPLETED');

INSERT INTO appointments
    (appointment_id, patient_id, doctor_id, appointment_date, appointment_status)
VALUES
(1040,202,105,'2025-03-12','COMPLETED'),
(1041,202,101,'2025-05-18','COMPLETED'),
(1042,202,102,'2025-08-22','COMPLETED'),
(1043,202,103,'2025-11-10','COMPLETED');

INSERT INTO appointments
    (appointment_id, patient_id, doctor_id, appointment_date, appointment_status)
VALUES
(1044,203,101,'2025-04-10','COMPLETED'),
(1045,204,104,'2025-06-15','COMPLETED'),
(1046,205,103,'2025-07-20','COMPLETED'),
(1047,206,102,'2025-09-12','COMPLETED');

INSERT INTO medicines
    (medicine_id, medicine_name, price)
VALUES
(301,'Paracetamol',50),
(302,'Amoxicillin',120),
(303,'Azithromycin',150),
(304,'Ibuprofen',80),
(305,'Cetirizine',40);

INSERT INTO prescriptions
    (prescription_id, appointment_id, medicine_id, dosage, quantity)
VALUES
(401,1001,301,'1 tablet twice daily',10),
(402,1002,302,'1 tablet once daily',5),
(403,1003,303,'1 tablet once daily',5),
(404,1023,304,'1 tablet twice daily',10),
(405,1027,305,'1 tablet at night',7),
(406,1030,301,'1 tablet twice daily',10);

INSERT INTO bills
    (bill_id, appointment_id, bill_amount, payment_status, bill_date)
VALUES
(501,1001,1500,'PAID','2026-08-01'),
(502,1002,1200,'PAID','2026-08-02'),
(503,1003,1800,'PAID','2026-08-03'),
(504,1004,1000,'PAID','2026-08-04'),
(505,1005,1600,'PAID','2026-08-05'),

(506,1023,2000,'PAID','2026-08-02'),
(507,1024,1800,'PAID','2026-08-04'),
(508,1027,1500,'PAID','2026-08-03'),
(509,1028,1700,'PAID','2026-08-05'),

(510,1030,1000,'PAID','2026-08-04'),
(511,1031,1200,'PAID','2026-08-06'),

(512,1033,800,'PAID','2026-08-05'),
(513,1034,900,'PAID','2026-08-07');

-- SELECT QUERIES FOR ALL TABLES

SELECT * FROM departments;
SELECT * FROM doctors;
SELECT * FROM patients;
SELECT * FROM appointments ORDER BY appointment_date;
SELECT * FROM medicines;
SELECT * FROM prescriptions;
SELECT * FROM bills;

-- VERIFY RELATIONSHIPS

-- 1. DEPARTMENTS -> DOCTORS

SELECT
    d.department_name,
    dr.doctor_name
FROM departments d
JOIN doctors dr
ON d.department_id = dr.department_id;

-- 2. DOCTORS -> APPOINTMENTS

SELECT
    dr.doctor_name,
    a.appointment_id,
    a.appointment_date
FROM doctors dr
JOIN appointments a
ON dr.doctor_id = a.doctor_id;

-- 3. PATIENTS -> APPOINTMENTS

SELECT
    p.patient_name,
    a.appointment_date
FROM patients p
JOIN appointments a
ON p.patient_id = a.patient_id;

-- 4. APPOINTMENTS -> BILLS

SELECT
    a.appointment_id,
    b.bill_amount,
    b.payment_status
FROM appointments a
JOIN bills b
ON a.appointment_id = b.appointment_id;

-- QUESTIONS AND ANSWERS :

-- 1. List doctors with more than 20 appointments this month ?

SELECT
	d.doctor_id,
	d.doctor_name,
	d.specialization,
	COUNT(a.appointment_id) AS appointment_count
FROM doctors d
JOIN appointments a
ON d.doctor_id = a.doctor_id
WHERE a.appointment_date >= DATE_TRUNC('month', CURRENT_DATE) AND a.appointment_date < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
GROUP BY d.doctor_id,d.doctor_name,d.specialization
HAVING COUNT(a.appointment_id) > 20;

-- 2. Patients Who Visited More Than 3 Times in the Last Year ?

SELECT
    p.patient_id,
    p.patient_name,
    COUNT(a.appointment_id) AS visit_count
FROM patients p
JOIN appointments a
    ON p.patient_id = a.patient_id
WHERE a.appointment_date >= CURRENT_DATE - INTERVAL '1 year'
GROUP BY
    p.patient_id,
    p.patient_name
HAVING COUNT(a.appointment_id) > 3
ORDER BY visit_count DESC;

-- 3. Department-Wise Patient Count ?

SELECT
    d.department_id,
    d.department_name,
    COUNT(DISTINCT a.patient_id) AS patient_count
FROM departments d
JOIN doctors dr
    ON d.department_id = dr.department_id
JOIN appointments a
    ON dr.doctor_id = a.doctor_id
GROUP BY
    d.department_id,
    d.department_name
ORDER BY
    d.department_id;

-- 4. Total Billing Collected By Each Department ?

SELECT
    d.department_id,
    d.department_name,
    SUM(b.bill_amount) AS total_billing
FROM departments d
JOIN doctors dr
    ON d.department_id = dr.department_id
JOIN appointments a
    ON dr.doctor_id = a.doctor_id
JOIN bills b
    ON a.appointment_id = b.appointment_id
WHERE b.payment_status = 'PAID'
GROUP BY
    d.department_id,
    d.department_name
ORDER BY
    d.department_id;