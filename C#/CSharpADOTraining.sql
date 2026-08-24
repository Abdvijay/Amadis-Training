CREATE DATABASE CSharpADOTraining;

USE CSharpADOTraining;
GO

SELECT name FROM sys.tables;

CREATE TABLE Employees
(
    EmployeeId INT PRIMARY KEY IDENTITY(1,1),
    EmployeeName VARCHAR(100) NOT NULL,
    Email VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2),
    IsActive BIT
);

INSERT INTO Employees
(
    EmployeeName,
    Email,
    Department,
    Salary,
    IsActive
)
VALUES
('Vijay', 'vijay@gmail.com', 'Development', 45000.00, 1),
('Arun', 'arun@gmail.com', 'Testing', 40000.00, 1),
('Priya', 'priya@gmail.com', 'HR', 35000.00, 1),
('Karthik', 'karthik@gmail.com', 'Development', 50000.00, 0),
('Divya', 'divya@gmail.com', 'Finance', 42000.00, 1);

SELECT * FROM Employees;

CREATE PROCEDURE GetEmployeeById
    @EmployeeId INT
AS
BEGIN
    SELECT
        EmployeeId,
        EmployeeName,
        Email,
        Department,
        Salary,
        IsActive
    FROM Employees
    WHERE EmployeeId = @EmployeeId;
END;

EXEC GetEmployeeById 1;
EXEC GetEmployeeById @EmployeeId = 2;

CREATE FUNCTION CalculateBonusSalary(@Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Result DECIMAL(10,2);
    SET @Result = @Salary + (@Salary * 0.10);
    RETURN @Result;
END;

SELECT dbo.CalculateBonusSalary(45000);

CREATE FUNCTION GetEmployeesByDepartment(@Department VARCHAR(50))
RETURNS TABLE
AS
RETURN
(
    SELECT
        EmployeeId,
        EmployeeName,
        Email,
        Department,
        Salary,
        IsActive
    FROM Employees
    WHERE Department = @Department
);

SELECT * FROM dbo.GetEmployeesByDepartment('Development');