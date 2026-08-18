//namespace CSharpLearning;

//public class Constructors
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== CONSTRUCTORS ==========");

//        // ==========================================
//        // 1. Default Constructor
//        // ==========================================

//        Console.WriteLine("\n1. Default Constructors");

//        Employee employee1 = new Employee();

//        Console.WriteLine($"Name: {employee1.Name}");

//        Console.WriteLine($"Age: {employee1.Age}");

//        Console.WriteLine($"Salary: {employee1.Salary}");


//        // ==========================================
//        // 2. Parameterized Constructor
//        // ==========================================

//        Console.WriteLine("\n2. Parameterized Constructors");

//        Employee employee2 = new Employee("Vijay", 25, 35000);

//        employee2.DisplayDetails();


//        // ==========================================
//        // 3. Constructor Overloading
//        // ==========================================

//        Console.WriteLine("\n3. Constructor Overloading with name");

//        Employee employee3 = new Employee("Arun");

//        employee3.DisplayDetails();

//        Console.WriteLine("\n4. Constructor Overloading with name and age");


//        Employee employee4 = new Employee("Kumar", 28);

//        employee4.DisplayDetails();


//        // ==========================================
//        // 4. Copy Constructor
//        // ==========================================

//        Console.WriteLine("\n5. Copy Constructor");

//        Employee employee5 = new Employee(employee2);

//        employee5.DisplayDetails();


//        // ==========================================
//        // 5. Static Constructor
//        // ==========================================

//        Console.WriteLine("\n6. Static Constructor");

//        StaticExample.Show();
//    }
//}


//// ==================================================
//// Employee Class
//// ==================================================

//public class Employee
//{
//    public string Name;
//    public int Age;
//    public double Salary;


//    // ==================================================
//    // 1. Default Constructor
//    // ==================================================

//    public Employee()
//    {
//        Name = "Unknown";
//        Age = 0;
//        Salary = 0;
//    }


//    // ==================================================
//    // 2. Parameterized Constructor
//    // ==================================================

//    public Employee(string name, int age, double salary)
//    {
//        Name = name;
//        Age = age;
//        Salary = salary;
//    }


//    // ==================================================
//    // 3. Constructor Overloading
//    // ==================================================

//    public Employee(string name)
//    {
//        Name = name;
//        Age = 0;
//        Salary = 0;
//    }


//    public Employee(string name, int age)
//    {
//        Name = name;
//        Age = age;
//        Salary = 0;
//    }


//    // ==================================================
//    // 4. Copy Constructor
//    // ==================================================

//    public Employee(Employee employee)
//    {
//        Name = employee.Name;
//        Age = employee.Age;
//        Salary = employee.Salary;
//    }


//    // ==================================================
//    // Method
//    // ==================================================

//    public void DisplayDetails()
//    {
//        Console.WriteLine($"Name: {Name}\nAge: {Age}\nSalary: {Salary}");
//    }
//}


//// ==================================================
//// 5. Static Constructor
//// ==================================================

//public class StaticExample
//{
//    static StaticExample()
//    {
//        Console.WriteLine("Static constructor executed");
//    }


//    public static void Show()
//    {
//        Console.WriteLine("Static method executed");
//    }
//}