//namespace CSharpLearning;

//public class Interface
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== INTERFACE ==========");


//        // ==========================================
//        // 1. Basic interface implementation
//        // ==========================================

//        Console.WriteLine("\n1. Basic interface implementation");

//        UpiPayment upi = new UpiPayment();

//        upi.Pay(1000);


//        // ==========================================
//        // 2. Interface reference
//        // ==========================================

//        Console.WriteLine("\n2. Interface reference");

//        IPayment payment = new UpiPayment();

//        payment.Pay(2000);


//        // ==========================================
//        // 3. Change implementation
//        // ==========================================

//        Console.WriteLine("\n3. Change implementation");

//        payment = new CardPayment();

//        payment.Pay(3000);


//        // ==========================================
//        // 4. Multiple interfaces
//        // ==========================================

//        Console.WriteLine("\n4. Multiple interfaces");

//        FullStackDeveloper developer = new FullStackDeveloper();

//        developer.Code();

//        developer.Test();


//        // ==========================================
//        // 5. Interface references
//        // ==========================================

//        Console.WriteLine("\n5. Interface references");

//        ICoder coder = new FullStackDeveloper();

//        coder.Code();


//        ITester tester = new FullStackDeveloper();

//        tester.Test();


//        // ==========================================
//        // 6. Interface inheritance
//        // ==========================================

//        Console.WriteLine("\n6. Interface inheritance");

//        TeamManager manager = new TeamManager();

//        manager.Work();

//        manager.Manage();


//        // ==========================================
//        // 7. Explicit interface implementation
//        // ==========================================

//        Console.WriteLine("\n7. Explicit interface implementation");

//        PrinterReport report = new PrinterReport();

//        IPrinter printer = report;

//        printer.Print();


//        IReport reportInterface = report;

//        reportInterface.Print();
//    }
//}


//// ==================================================
//// BASIC INTERFACE
//// ==================================================

//public interface IPayment
//{
//    void Pay(double amount);
//}


//// ==================================================
//// UPI PAYMENT
//// ==================================================

//public class UpiPayment : IPayment
//{
//    public void Pay(double amount)
//    {
//        Console.WriteLine($"Paid Rs.{amount} using UPI.");
//    }
//}


//// ==================================================
//// CARD PAYMENT
//// ==================================================

//public class CardPayment : IPayment
//{
//    public void Pay(double amount)
//    {
//        Console.WriteLine($"Paid Rs.{amount} using Card.");
//    }
//}


//// ==================================================
//// MULTIPLE INTERFACES
//// ==================================================

//public interface ICoder
//{
//    void Code();
//}


//public interface ITester
//{
//    void Test();
//}


//public class FullStackDeveloper : ICoder, ITester
//{
//    public void Code()
//    {
//        Console.WriteLine("Developer is coding.");
//    }

//    public void Test()
//    {
//        Console.WriteLine("Developer is testing.");
//    }
//}


//// ==================================================
//// INTERFACE INHERITANCE
//// ==================================================

//public interface IEmployee
//{
//    void Work();
//}


//public interface IManager : IEmployee
//{
//    void Manage();
//}


//public class TeamManager : IManager
//{
//    public void Work()
//    {
//        Console.WriteLine("Manager is working.");
//    }

//    public void Manage()
//    {
//        Console.WriteLine("Manager is managing the team.");
//    }
//}


//// ==================================================
//// EXPLICIT INTERFACE IMPLEMENTATION
//// ==================================================

//public interface IPrinter
//{
//    void Print();
//}


//public interface IReport
//{
//    void Print();
//}


//public class PrinterReport :IPrinter, IReport
//{
//    void IPrinter.Print()
//    {
//        Console.WriteLine("Printing document.(Printer interface)");
//    }

//    void IReport.Print()
//    {
//        Console.WriteLine("Printing report.(Report interface)");
//    }
//}