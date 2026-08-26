//namespace CSharpLearning;

//public class ClassAndObject
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== CLASS AND OBJECT ==========");

//        // ==========================================
//        // 1. Creating first object
//        // ==========================================

//        Employee employee1 = new Employee();

//        // Assigning values
//        employee1.Name = "Vijay";
//        employee1.Age = 25;
//        employee1.Salary = 35000;

//        // Reading values
//        Console.WriteLine($"Name: {employee1.Name}");
//        Console.WriteLine($"Age: {employee1.Age}");
//        Console.WriteLine($"Salary: {employee1.Salary}");

//        Console.WriteLine();

//        // Calling method
//        employee1.DisplayDetails();

//        employee1.Work();


//        // ==========================================
//        // 2. Creating second object
//        // ==========================================

//        Employee employee2 = new Employee();

//        employee2.Name = "Arun";
//        employee2.Age = 28;
//        employee2.Salary = 45000;

//        employee2.DisplayDetails();

//        employee2.Work();

//        Console.WriteLine();


//        // ==========================================
//        // 3. Objects have separate data
//        // ==========================================

//        employee1.Name = "Vijay Kumar";

//        Console.WriteLine($"Employee 1: {employee1.Name}");

//        Console.WriteLine($"Employee 2: {employee2.Name}");

//        Console.WriteLine();

//        // ==========================================
//        // 4. Student class
//        // ==========================================

//        Student s = new Student();

//        s.SetStudentDetails();

//        s.DisplayDetails();

//        Console.WriteLine();

//        // ==========================================
//        // 5. Calculator
//        // ==========================================

//        Console.WriteLine();

//        Calculation calc = new();

//        Console.Write("Enter a value : ");
//        int a = Convert.ToInt32(Console.ReadLine());
//        Console.Write("Enter b value : ");
//        int b = Convert.ToInt32(Console.ReadLine());

//        Console.WriteLine($"1.Addttion      of {a} and {b} is {calc.Addition(a, b)}");
//        Console.WriteLine($"2.Subtraction   of {a} and {b} is {calc.Subtract(a, b)}");
//        Console.WriteLine($"3.Multiplcation of {a} and {b} is {calc.Multiply(a, b)}");
//        Console.WriteLine($"4.Division      of {a} and {b} is {calc.Divide(a, b)}");


//    }
//}


//// ==============================================
//// Employee Class
//// ==============================================

//public class Employee
//{
//    // Fields

//    public string Name;
//    public int Age;
//    public double Salary;


//    // Method

//    public void DisplayDetails()
//    {
//        Console.WriteLine($"Name: {Name}, Age: {Age}, Salary: {Salary}");
//    }


//    // Another Method

//    public void Work()
//    {
//        Console.WriteLine($"{Name} is working.");
//    }
//}

//public class Student
//{
//    public int Id;
//    public string Name;

//    public void SetStudentDetails()
//    {
//        Id = 1;
//        Name = "Swathi";
//    }
//    public void DisplayDetails()
//    {
//        Console.Write($"Student Id : {Id} and Student Name : {Name}");
//    }
//}

//public class Calculation()
//{
//    public int Addition(int a, int b)
//    {
//        return a + b;
//    }

//    public int Subtract(int a, int b)
//    {
//        return a - b;
//    }

//    public int Multiply(int a, int b)
//    {
//        return a * b;
//    }

//    public double Divide(int a, int b)
//    {
//        return (double)a / b;
//    }
//}