//using System;
//using Microsoft.Data.SqlClient;
//using System.Data;

//namespace CSharpLearning
//{
//    public class SqlConnectionDemo
//    {
//        public static void Run()
//        {
//            string connectionString = "" +
//                "Server=localhost;" +
//                "Database=CSharpADOTraining;" +
//                "Trusted_Connection=True;" +
//                "TrustServerCertificate=True;";

//            using SqlConnection connection = new SqlConnection(connectionString);

//            connection.Open();

//            Console.WriteLine("Database connection successfull");

//            Console.WriteLine();

//            /* Select Total employees count */

//            //string count_query = "SELECT COUNT(*) FROM Employees";

//            //using SqlCommand count_command = new SqlCommand(count_query, connection);

//            //object result = count_command.ExecuteScalar();

//            //Console.WriteLine($"\nTotal Employees : {result}");

//            /* Select all employees with details */

//            //string select_query = "SELECT * FROM Employees";

//            //using SqlCommand command = new SqlCommand(select_query, connection);

//            //using SqlDataReader reader = command.ExecuteReader();

//            //Console.WriteLine("\nEmployee Details");

//            //while (reader.Read())
//            //{
//            //    Console.WriteLine($"ID         : {reader["EmployeeId"]}");

//            //    Console.WriteLine($"Name       : {reader["EmployeeName"]}");

//            //    Console.WriteLine($"Email      : {reader["Email"]}");

//            //    Console.WriteLine($"Department : {reader["Department"]}");

//            //    Console.WriteLine($"Salary     : {reader["Salary"]}");

//            //    Console.WriteLine($"Is Active  : {reader["IsActive"]}");

//            //    Console.WriteLine("-------------------------------------------");
//            //}

//            /* Insert query using ExecuteNonQuery() */

//            //string insert_query = @"INSERT INTO Employees (EmployeeName, Email, Department, Salary, IsActive)
//            //                        VALUES('Suresh', 'suresh@gmail.com', 'Development', 48000, 1)";

//            //using SqlCommand insert_command = new SqlCommand(insert_query, connection);

//            //int rowsAffected = insert_command.ExecuteNonQuery();

//            //Console.WriteLine($"Rows affected: {rowsAffected}");

//            /* Update query using ExecuteNonQuery() */

//            //string update_query = @"UPDATE Employees
//            //                        SET Salary = 52000
//            //                        WHERE EmployeeId = 6";

//            //using SqlCommand update_command = new SqlCommand(update_query, connection);

//            //int rowsAffected = update_command.ExecuteNonQuery();

//            //Console.WriteLine($"Rows affected: {rowsAffected}");

//            /* Delete query using ExecuteNonQuery */

//            //string delete_query = @"DELETE FROM Employees WHERE EmployeeId = 6";

//            //using SqlCommand delete_command = new SqlCommand(delete_query, connection);

//            //int rowsAffected = delete_command.ExecuteNonQuery();

//            //Console.WriteLine($"Rows affected: {rowsAffected}");

//            /* Insert using Paraemeters */

//            //string name = "Rahul";

//            //string email = "rahul@gmail.com";

//            //string department = "Development";

//            //decimal salary = 46000;

//            //bool isActive = true;

//            //string param_query = @"INSERT INTO Employees(EmployeeName, Email, Department, Salary, IsActive)
//            //                       VALUES(@name, @email, @department, @salary, @isActive)";

//            //using SqlCommand param_command = new SqlCommand(param_query, connection);

//            //param_command.Parameters.AddWithValue("@name", name);

//            //param_command.Parameters.AddWithValue ("@email", email);

//            //param_command.Parameters.AddWithValue("@department", department);

//            //param_command.Parameters.AddWithValue("@salary", salary);

//            //param_command.Parameters.AddWithValue("@isActive", isActive);

//            //int rowsAffected = param_command.ExecuteNonQuery();

//            //Console.WriteLine($"Rows affected: {rowsAffected}");

//            /* Fetch particular employee using Add() parameter */

//            //Console.Write("Enter Employee ID : ");

//            //int employeeId = Convert.ToInt32(Console.ReadLine());

//            //string fetch_particular_emp_query = @"SELECT * FROM Employees WHERE EmployeeId = @employeeId";

//            //using SqlCommand fetch_particular_emp_command = new SqlCommand(fetch_particular_emp_query, connection);

//            //fetch_particular_emp_command.Parameters.Add("@employeeId", System.Data.SqlDbType.Int).Value = employeeId;

//            //using SqlDataReader particular_emp_data = fetch_particular_emp_command.ExecuteReader();

//            //Console.WriteLine("\nEmployee Details");

//            //Console.WriteLine("-----------------------------");

//            //if( particular_emp_data.Read())
//            //{
//            //    Console.WriteLine($"ID         : {particular_emp_data["EmployeeId"]}");

//            //    Console.WriteLine($"Name       : {particular_emp_data["EmployeeName"]}");

//            //    Console.WriteLine($"Email      : {particular_emp_data["Email"]}");

//            //    Console.WriteLine($"Department : {particular_emp_data["Department"]}");

//            //    Console.WriteLine($"Salary     : {particular_emp_data["Salary"]}");

//            //    Console.WriteLine($"Is Active  : {particular_emp_data["IsActive"]}");
//            //} else
//            //{
//            //    Console.WriteLine("Employee Not Found");
//            //}

//            //Console.WriteLine();

//            /* Using stored procedure */

//            //Console.Write("Enter Employee ID : ");

//            //int employeeId = Convert.ToInt32(Console.ReadLine());

//            //using SqlCommand st_command = new SqlCommand("GetEmployeeById", connection);

//            //st_command.CommandType = CommandType.StoredProcedure;

//            //st_command.Parameters.Add("@EmployeeId", SqlDbType.Int).Value = employeeId;

//            //using SqlDataReader st_reader = st_command.ExecuteReader();

//            //Console.WriteLine("\nEmployee Details");

//            //Console.WriteLine("-----------------------------");

//            //if(st_reader.Read())
//            //{
//            //    Console.WriteLine($"ID         : {st_reader["EmployeeId"]}");

//            //    Console.WriteLine($"Name       : {st_reader["EmployeeName"]}");

//            //    Console.WriteLine($"Email      : {st_reader["Email"]}");

//            //    Console.WriteLine($"Department : {st_reader["Department"]}");

//            //    Console.WriteLine($"Salary     : {st_reader["Salary"]}");

//            //    Console.WriteLine($"Is Active  : {st_reader["IsActive"]}");
//            //} else
//            //{
//            //    Console.WriteLine("Employee Not Found");
//            //}

//            /* Using Function - Scalar value */

//            //Console.Write("Enter Salary : ");

//            //decimal salary = Convert.ToDecimal(Console.ReadLine());

//            //string fn_query = @"SELECT dbo.CalculateBonusSalary(@salary)";

//            //using SqlCommand fn_command = new SqlCommand(fn_query, connection);

//            //fn_command.Parameters.Add("@salary", SqlDbType.Decimal).Value = salary;

//            //object result = fn_command.ExecuteScalar();

//            //decimal bonusSalary = Convert.ToDecimal(result);

//            //Console.WriteLine($"Salary after 10% bonus: {bonusSalary}");

//            /* Using Function - Table value */

//            //Console.Write("Enter Department : ");

//            //string department = Console.ReadLine();

//            //string table_fn_query = "SELECT * FROM dbo.GetEmployeesByDepartment(@department)";

//            //using SqlCommand table_fn_command = new SqlCommand(table_fn_query, connection);

//            //table_fn_command.Parameters.Add("@department", SqlDbType.VarChar, 50).Value = department;

//            //using SqlDataReader tvf_data = table_fn_command.ExecuteReader();

//            //bool employeeFound = false;

//            //Console.WriteLine("\nEmployee Details");

//            //while (tvf_data.Read())
//            //{
//            //    employeeFound = true;

//            //    Console.WriteLine("-------------------------");

//            //    Console.WriteLine($"ID         : {tvf_data["EmployeeId"]}");

//            //    Console.WriteLine($"Name       : {tvf_data["EmployeeName"]}");

//            //    Console.WriteLine($"Email      : {tvf_data["Email"]}");

//            //    Console.WriteLine($"Department : {tvf_data["Department"]}");

//            //    Console.WriteLine($"Salary     : {tvf_data["Salary"]}");

//            //    Console.WriteLine($"Is Active  : {tvf_data["IsActive"]}");
//            //}

//            //if(!employeeFound)
//            //{
//            //    Console.WriteLine("No employees found in this department.");
//            //}

//            connection.Close();

//            Console.WriteLine("Databse connection closed");
//        }
//    }
//}