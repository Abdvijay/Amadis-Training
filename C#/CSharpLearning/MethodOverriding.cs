namespace CSharpLearning;

public class MethodOverriding
{
    public static void Run()
    {
        Console.WriteLine("========== METHOD OVERRIDING ==========");

        Animal animal = new Animal();

        animal.Sound();

        Dog dog = new Dog();

        dog.Sound();

        // Parent reference
        // Child object

        Animal animalDog = new Dog();

        animalDog.Sound();
    }
}


// Parent class
public class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal makes sound");
    }
}


// Child class
public class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Dog barks");
    }
}