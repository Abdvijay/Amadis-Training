//namespace CSharpLearning;

//public class AccessModifiers
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== ACCESS MODIFIERS ==========");

//        // ==========================================
//        // PUBLIC
//        // ==========================================

//        PublicExample publicObject = new PublicExample();

//        publicObject.Name = "Vijay";

//        publicObject.Display();


//        // ==========================================
//        // PRIVATE
//        // ==========================================

//        PrivateExample privateObject = new PrivateExample();

//        // Cannot directly access private field
//        // privateObject.Salary = 50000; // ❌

//        privateObject.SetSalary(50000);

//        privateObject.Display();


//        // ==========================================
//        // PROTECTED
//        // ==========================================

//        Manager manager = new Manager();

//        manager.DisplayEmployeeName();


//        // ==========================================
//        // INTERNAL
//        // ==========================================

//        InternalExample internalObject = new InternalExample();

//        internalObject.Name = "Arun";

//        internalObject.Display();


//        // ==========================================
//        // PROTECTED INTERNAL
//        // ==========================================

//        DerivedProtectedInternal derived = new DerivedProtectedInternal();

//        derived.Display();


//        // ==========================================
//        // PRIVATE PROTECTED
//        // ==========================================

//        DerivedPrivateProtected privateProtected =new DerivedPrivateProtected();

//        privateProtected.Display();
//    }
//}


//// ==================================================
//// PUBLIC
//// ==================================================

//public class PublicExample
//{
//    public string Name;

//    public void Display()
//    {
//        Console.WriteLine($"Public Name: {Name}");
//    }
//}


//// ==================================================
//// PRIVATE
//// ==================================================

//public class PrivateExample
//{
//    private double Salary;

//    public void SetSalary(double salary)
//    {
//        Salary = salary;
//    }

//    public void Display()
//    {
//        Console.WriteLine(
//            $"Private Salary: {Salary}"
//        );
//    }
//}


//// ==================================================
//// PROTECTED
//// ==================================================

//public class Employee
//{
//    protected string Name = "Vijay";
//}


//public class Manager : Employee
//{
//    public void DisplayEmployeeName()
//    {
//        Console.WriteLine($"Protected Name: {Name}");
//    }
//}


//// ==================================================
//// INTERNAL
//// ==================================================

//internal class InternalExample
//{
//    internal string Name;

//    internal void Display()
//    {
//        Console.WriteLine($"Internal Name: {Name}");
//    }
//}


//// ==================================================
//// PROTECTED INTERNAL
//// ==================================================

//public class ProtectedInternalExample
//{
//    protected internal string Name = "Protected Internal";
//}


//public class DerivedProtectedInternal : ProtectedInternalExample
//{
//    public void Display()
//    {
//        Console.WriteLine(Name);
//    }
//}


//// ==================================================
//// PRIVATE PROTECTED
//// ==================================================

//public class PrivateProtectedExample
//{
//    private protected string Name = "Private Protected";
//}


//public class DerivedPrivateProtected : PrivateProtectedExample
//{
//    public void Display()
//    {
//        Console.WriteLine(Name);
//    }
//}