//namespace CSharpLearning;

//public class VirtualMethods
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== VIRTUAL METHODS ==========");


//        // ==========================================
//        // 1. Basic virtual method
//        // ==========================================

//        Console.WriteLine("\n1. Base virtual method");

//        Animal animal = new Animal();

//        animal.Speak();


//        // ==========================================
//        // 2. Override virtual method
//        // ==========================================

//        Console.WriteLine("\n2. Override virtual method");

//        Dog dog = new Dog();

//        dog.Speak();


//        // ==========================================
//        // 3. Runtime polymorphism
//        // ==========================================

//        Console.WriteLine("\n3. Runtime polymorphism");

//        Animal dogAnimal = new Dog();

//        Animal catAnimal = new Cat();

//        Animal cowAnimal = new Cow();

//        dogAnimal.Speak();

//        catAnimal.Speak();

//        cowAnimal.Speak();


//        // ==========================================
//        // 4. Virtual method without override
//        // ==========================================

//        Console.WriteLine("\n4. Virtual method without override");

//        Animal elephant = new Elephant();

//        elephant.Speak();


//        // ==========================================
//        // 5. Calling base method
//        // ==========================================

//        Console.WriteLine("\n5. Calling base method");

//        Developer developer = new Developer();

//        developer.Work();


//        // ==========================================
//        // 6. Virtual property
//        // ==========================================

//        Console.WriteLine("\n6. Virtual property");

//        Employee employee = new DeveloperEmployee();

//        Console.WriteLine($"Salary: {employee.Salary}");
//    }
//}


//// ==================================================
//// BASE CLASS
//// ==================================================

//public class Animal
//{
//    public virtual void Speak()
//    {
//        Console.WriteLine("Animal makes a sound.");
//    }
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
//// COW
//// ==================================================

//public class Cow : Animal
//{
//    public override void Speak()
//    {
//        Console.WriteLine("Cow moos.");
//    }
//}


//// ==================================================
//// NO OVERRIDE
//// ==================================================

//public class Elephant : Animal
//{
//    // No override

//    // It automatically uses
//    // Animal.Speak()
//}


//// ==================================================
//// BASE METHOD + OVERRIDE
//// ==================================================

//public class Employee
//{
//    public virtual double Salary
//    {
//        get
//        {
//            return 30000;
//        }
//    }

//    public virtual void Work()
//    {
//        Console.WriteLine("Employee is working.");
//    }
//}


//public class Developer : Employee
//{
//    public override void Work()
//    {
//        base.Work();

//        Console.WriteLine("Developer is writing code.");
//    }
//}


//// ==================================================
//// VIRTUAL PROPERTY
//// ==================================================

//public class DeveloperEmployee : Employee
//{
//    public override double Salary
//    {
//        get
//        {
//            return 50000;
//        }
//    }
//}