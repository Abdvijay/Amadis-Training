//namespace CSharpLearning;

//public class Inheritance
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== INHERITANCE ==========");


//        // ==========================================
//        // 1. SINGLE INHERITANCE
//        // ==========================================

//        Console.WriteLine("\n1. Single Level Inheritance");

//        Manager manager = new Manager();

//        manager.Name = "Vijay";

//        manager.Work();

//        manager.Manage();


//        // ==========================================
//        // 2. MULTILEVEL INHERITANCE
//        // ==========================================

//        Console.WriteLine("\n2. Multi Level Inheritance");

//        SeniorManager seniorManager = new SeniorManager();

//        seniorManager.Name = "Arun";

//        seniorManager.Work();

//        seniorManager.Manage();

//        seniorManager.Plan();


//        // ==========================================
//        // 3. HIERARCHICAL INHERITANCE
//        // ==========================================

//        Console.WriteLine("\n3. Hierarchical Level Inheritance");

//        Developer developer = new Developer();

//        developer.Name = "Kumar";

//        developer.Work();

//        developer.Code();


//        Tester tester = new Tester();

//        tester.Name = "Rahul";

//        tester.Work();

//        tester.Test();


//        // ==========================================
//        // 4. MULTIPLE INTERFACES
//        // ==========================================

//        Console.WriteLine("\n4. Multiple Level Inheritance");

//        FullStackDeveloper fullStackDeveloper = new FullStackDeveloper();

//        fullStackDeveloper.Code();

//        fullStackDeveloper.Test();


//        // ==========================================
//        // 5. BASE KEYWORD
//        // ==========================================

//        Console.WriteLine("\n5. Base Keyword");

//        DeveloperWithSalary developerSalary = new DeveloperWithSalary("Vijay", 50000);

//        developerSalary.Display();


//        // ==========================================
//        // 6. Protected member
//        // ==========================================

//        Console.WriteLine("\n6. Protected Member");

//        ManagerWithSalary managerSalary = new ManagerWithSalary();

//        managerSalary.DisplaySalary();
//    }
//}


//// ==================================================
//// BASE CLASS
//// ==================================================

//public class Employee
//{
//    public string Name { get; set; }


//    public void Work()
//    {
//        Console.WriteLine($"{Name} is working.");
//    }
//}


//// ==================================================
//// SINGLE INHERITANCE
//// ==================================================

//public class Manager : Employee
//{
//    public void Manage()
//    {
//        Console.WriteLine($"{Name} is managing the team.");
//    }
//}


//// ==================================================
//// MULTILEVEL INHERITANCE
//// ==================================================

//public class SeniorManager : Manager
//{
//    public void Plan()
//    {
//        Console.WriteLine($"{Name} is planning.");
//    }
//}


//// ==================================================
//// HIERARCHICAL INHERITANCE
//// ==================================================

//public class Developer : Employee
//{
//    public void Code()
//    {
//        Console.WriteLine($"{Name} is writing code.");
//    }
//}


//public class Tester : Employee
//{
//    public void Test()
//    {
//        Console.WriteLine($"{Name} is testing the application.");
//    }
//}


//// ==================================================
//// MULTIPLE INTERFACES
//// ==================================================

//public interface IDeveloper
//{
//    void Code();
//}


//public interface ITester
//{
//    void Test();
//}


//public class FullStackDeveloper : IDeveloper, ITester
//{
//    public void Code()
//    {
//        Console.WriteLine("Full Stack Developer is coding.");
//    }

//    public void Test()
//    {
//        Console.WriteLine("Full Stack Developer is testing.");
//    }
//}


//// ==================================================
//// BASE KEYWORD EXAMPLE
//// ==================================================

//public class DeveloperWithSalary : Employee
//{
//    public double Salary { get; set; }


//    public DeveloperWithSalary(string name, double salary)
//    {
//        Name = name;

//        Salary = salary;
//    }


//    public void Display()
//    {
//        Console.WriteLine($"Name: {Name}");

//        Console.WriteLine($"Salary: {Salary}");
//    }
//}


//// ==================================================
//// PROTECTED MEMBER EXAMPLE
//// ==================================================

//public class EmployeeWithSalary
//{
//    protected double Salary = 50000;
//}


//public class ManagerWithSalary : EmployeeWithSalary
//{
//    public void DisplaySalary()
//    {
//        Console.WriteLine($"Salary: {Salary}");
//    }
//}