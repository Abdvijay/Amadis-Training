//namespace CSharpLearning;

//public class BaseKeyword
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== BASE KEYWORD ==========");

//        Developer developer = new Developer("Vijay");

//        // Parent variable
//        developer.DisplayName();

//        // Parent + child method
//        developer.Work();
//    }
//}


//// ==========================================
//// PARENT CLASS
//// ==========================================

//public class Employee
//{
//    protected string Name;

//    public Employee(string name)
//    {
//        Name = name;

//        Console.WriteLine("Employee constructor called");
//    }

//    public virtual void Work()
//    {
//        Console.WriteLine("Employee is working");
//    }
//}


//// ==========================================
//// CHILD CLASS
//// ==========================================

//public class Developer : Employee
//{
//    public Developer(string name): base(name)
//    {
//        Console.WriteLine("Developer constructor called");
//    }


//    // Access parent variable

//    public void DisplayName()
//    {
//        Console.WriteLine($"Employee Name: {base.Name}");
//    }


//    // Override parent method

//    public override void Work()
//    {
//        // Call parent method

//        base.Work();

//        // Child implementation

//        Console.WriteLine("Developer is writing code");
//    }
//}