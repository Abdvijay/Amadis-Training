//namespace CSharpLearning;

//public class Polymorphism
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== POLYMORPHISM ==========");

//        // ==========================================
//        // 1. COMPILE-TIME POLYMORPHISM
//        //    METHOD OVERLOADING
//        // ==========================================

//        Console.WriteLine("\n1. Compile time polymorphism - Method overloading");

//        Calculator calculator = new Calculator();

//        Console.WriteLine(calculator.Add(10, 20));

//        Console.WriteLine(calculator.Add(10, 20, 30));

//        Console.WriteLine(calculator.Add(10.5, 20.5));


//        // ==========================================
//        // 2. RUNTIME POLYMORPHISM
//        //    METHOD OVERRIDING
//        // ==========================================

//        Console.WriteLine("\n2. Run time polymorphism - Method overrding");

//        Animal dog = new Dog();

//        Animal cat = new Cat();

//        Animal cow = new Cow();

//        dog.Speak();

//        cat.Speak();

//        cow.Speak();


//        // ==========================================
//        // 3. Same method call
//        //    Different behavior
//        // ==========================================

//        Console.WriteLine("\n3. Same method call with diff behaviour");

//        Animal[] animals =
//        {
//            new Dog(),
//            new Cat(),
//            new Cow()
//        };

//        foreach (Animal animal in animals)
//        {
//            animal.Speak();
//        }


//        // ==========================================
//        // 4. METHOD HIDING
//        // ==========================================

//        Console.WriteLine("\n4. Method hiding");

//        //Animal animalReference = new DogWithHiding();

//        //animalReference.Speak();


//        DogWithHiding dogReference = new DogWithHiding();

//        dogReference.Speak();


//        // ==========================================
//        // 5. INTERFACE POLYMORPHISM
//        // ==========================================

//        Console.WriteLine("\n5. Interface polymorphism");

//        IPayment payment = new CreditCardPayment();

//        payment.Pay();

//        payment = new UpiPayment();

//        payment.Pay();


//        // ==========================================
//        // 6. ABSTRACT CLASS POLYMORPHISM
//        // ==========================================

//        Console.WriteLine("\n6. Abstract class polymorphism");

//        Shape circle = new Circle();

//        Shape rectangle = new Rectangle();

//        circle.Draw();

//        rectangle.Draw();
//    }
//}


//// ==================================================
//// COMPILE-TIME POLYMORPHISM
//// METHOD OVERLOADING
//// ==================================================

//public class Calculator
//{
//    public int Add(int a, int b)
//    {
//        return a + b;
//    }


//    public int Add(int a, int b, int c)
//    {
//        return a + b + c;
//    }


//    public double Add(double a, double b)
//    {
//        return a + b;
//    }
//}


//// ==================================================
//// RUNTIME POLYMORPHISM
//// METHOD OVERRIDING
//// ==================================================

//public class Animal
//{
//    public virtual void Speak()
//    {
//        Console.WriteLine("Animal makes a sound.");
//    }
//}


//public class Dog : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Dog barks.");
//    }
//}


//public class Cat : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Cat meows.");
//    }
//}


//public class Cow : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Cow moos.");
//    }
//}


//// ==================================================
//// METHOD HIDING
//// ==================================================

//public class AnimalWithoutVirtual
//{
//    public void Speak()
//    {
//        Console.WriteLine("Animal speaks.");
//    }
//}


//public class DogWithHiding : AnimalWithoutVirtual
//{
//    public new void Speak()
//    {
//        Console.WriteLine("Dog barks.");
//    }
//}


//// ==================================================
//// INTERFACE POLYMORPHISM
//// ==================================================

//public interface IPayment
//{
//    void Pay();
//}


//public class CreditCardPayment : IPayment
//{
//    public void Pay()
//    {
//        Console.WriteLine("Payment using Credit Card.");
//    }
//}


//public class UpiPayment :
//    IPayment
//{
//    public void Pay()
//    {
//        Console.WriteLine("Payment using UPI.");
//    }
//}


//// ==================================================
//// ABSTRACT CLASS POLYMORPHISM
//// ==================================================

//public abstract class Shape
//{
//    public abstract void Draw();
//}


//public class Circle : Shape
//{
//    public override void Draw()
//    {
//        Console.WriteLine("Drawing Circle.");
//    }
//}


//public class Rectangle : Shape
//{
//    public override void Draw()
//    {
//        Console.WriteLine("Drawing Rectangle.");
//    }
//}