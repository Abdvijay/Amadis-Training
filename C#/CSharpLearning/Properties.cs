//namespace CSharpLearning;

//public class Properties
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== PROPERTIES ==========");

//        // ==========================================
//        // 1. Basic property
//        // ==========================================

//        Employee employee = new Employee();

//        employee.Name = "Vijay";
//        employee.Age = 25;
//        employee.Salary = 35000;

//        Console.WriteLine($"Name: {employee.Name}");

//        Console.WriteLine($"Age: {employee.Age}");

//        Console.WriteLine($"Salary: {employee.Salary}");


//        // ==========================================
//        // 2. Read-only property
//        // ==========================================

//        Console.WriteLine($"Employee ID: {employee.EmployeeId}");


//        // ==========================================
//        // 3. Write-only style property
//        // ==========================================

//        employee.Password = "12345";


//        // ==========================================
//        // 4. Property with validation
//        // ==========================================

//        employee.Age = 30;

//        Console.WriteLine($"Updated Age: {employee.Age}");


//        // Invalid age
//        employee.Age = -10;

//        Console.WriteLine($"Age after invalid value: {employee.Age}");


//        // ==========================================
//        // 5. Computed property
//        // ==========================================

//        employee.BasicSalary = 30000;
//        employee.Bonus = 5000;

//        Console.WriteLine($"Total Salary: {employee.TotalSalary}");


//        // ==========================================
//        // 6. init-only property
//        // ==========================================

//        Product product = new Product
//        {
//            Id = 101,
//            Name = "Laptop"
//        };

//        Console.WriteLine($"Product: {product.Name}");


//        // ==========================================
//        // 7. Property with private set
//        // ==========================================

//        BankAccount account = new BankAccount();

//        account.Deposit(5000);

//        Console.WriteLine($"Balance: {account.Balance}");


//        // ==========================================
//        // 8. Property with expression body
//        // ==========================================

//        Person person = new Person
//        {
//            FirstName = "Vijay",
//            LastName = "Kumar"
//        };

//        Console.WriteLine($"Full Name: {person.FullName}");
//    }
//}


//// ==================================================
//// Employee Class
//// ==================================================

//public class Employee
//{
//    // ==========================================
//    // Auto Properties
//    // ==========================================

//    public string Name { get; set; }

//    public double Salary { get; set; }


//    // ==========================================
//    // Property with private setter
//    // ==========================================

//    public int EmployeeId { get; private set; }


//    // ==========================================
//    // Property with validation
//    // ==========================================

//    private int age;

//    public int Age
//    {
//        get
//        {
//            return age;
//        }

//        set
//        {
//            if (value >= 0)
//            {
//                age = value;
//            }
//            else
//            {
//                Console.WriteLine("Age cannot be negative.");
//            }
//        }
//    }


//    // ==========================================
//    // Write-only style example
//    // ==========================================

//    private string password;

//    public string Password
//    {
//        set
//        {
//            password = value;
//        }
//    }


//    // ==========================================
//    // Computed properties
//    // ==========================================

//    public double BasicSalary { get; set; }

//    public double Bonus { get; set; }

//    public double TotalSalary
//    {
//        get
//        {
//            return BasicSalary + Bonus;
//        }
//    }
//}


//// ==================================================
//// Product Class - init
//// ==================================================

//public class Product
//{
//    public int Id { get; init; }

//    public string Name { get; init; }
//}


//// ==================================================
//// BankAccount - private set
//// ==================================================

//public class BankAccount
//{
//    public double Balance { get; private set; }

//    public void Deposit(double amount)
//    {
//        if (amount > 0)
//        {
//            Balance += amount;
//        }
//    }
//}


//// ==================================================
//// Person - Computed Property
//// ==================================================

//public class Person
//{
//    public string FirstName { get; set; }

//    public string LastName { get; set; }

//    public string FullName => $"{FirstName} {LastName}";
//}