//namespace CSharpLearning;

//public class Abstraction
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== ABSTRACTION ==========");


//        // ==========================================
//        // 1. Abstract class + abstract method
//        // ==========================================

//        Animal dog = new Dog();

//        Animal cat = new Cat();

//        dog.Speak();

//        cat.Speak();


//        // ==========================================
//        // 2. Abstract class with normal method
//        // ==========================================

//        Developer developer = new Developer("Vijay");

//        developer.DisplayName();

//        developer.Work();


//        // ==========================================
//        // 3. Abstract property
//        // ==========================================

//        Console.WriteLine($"Developer Salary: " + $"{developer.Salary}");


//        // ==========================================
//        // 4. Payment abstraction
//        // ==========================================

//        Payment payment = new UpiPayment();

//        payment.Pay(1000);


//        payment = new CardPayment();

//        payment.Pay(2000);


//        // ==========================================
//        // 5. Interface abstraction
//        // ==========================================

//        //IPayment interfacePayment =new UpiPayment();

//        //interfacePayment.Pay(3000);
//    }
//}


//// ==================================================
//// ABSTRACT CLASS - ANIMAL
//// ==================================================

//public abstract class Animal
//{
//    // Abstract method
//    public abstract void Speak();
//}


//// ==================================================
//// DOG
//// ==================================================

//public class Dog : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Dog barks.");
//    }
//}


//// ==================================================
//// CAT
//// ==================================================

//public class Cat : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Cat meows.");
//    }
//}


//// ==================================================
//// ABSTRACT CLASS - EMPLOYEE
//// ==================================================

//public abstract class Employee
//{
//    public string Name { get; set; }


//    // Constructor

//    public Employee(string name)
//    {
//        Name = name;
//    }


//    // Abstract method

//    public abstract void Work();


//    // Normal method

//    public void DisplayName()
//    {
//        Console.WriteLine($"Employee Name: {Name}");
//    }


//    // Abstract property

//    public abstract double Salary { get; }
//}


//// ==================================================
//// DEVELOPER
//// ==================================================

//public class Developer : Employee
//{
//    public Developer(string name) : base(name)
//    {
//    }


//    public override void Work()
//    {
//        Console.WriteLine($"{Name} is writing code.");
//    }


//    public override double Salary => 50000;
//}


//// ==================================================
//// PAYMENT ABSTRACT CLASS
//// ==================================================

//public abstract class Payment
//{
//    public abstract void Pay(double amount);
//}


//// ==================================================
//// UPI PAYMENT
//// ==================================================

//public class UpiPayment : Payment
//{
//    public override void Pay(double amount)
//    {
//        Console.WriteLine($"Paid ₹{amount} using UPI.");
//    }
//}


//// ==================================================
//// CARD PAYMENT
//// ==================================================

//public class CardPayment : Payment
//{
//    public override void Pay(double amount)
//    {
//        Console.WriteLine($"Paid ₹{amount} using Card.");
//    }
//}


//// ==================================================
//// INTERFACE
//// ==================================================

//public interface IPayment
//{
//    void Pay(double amount);
//}