namespace CSharpLearning;

public class OptionalParameters
{
    public static void Run()
    {
        Console.WriteLine("========== OPTIONAL PARAMETERS ==========");

        // ============================================
        // 1. Default value
        // ============================================

        Greet("Vijay");

        Greet("Vijay","Good Morning");

        // ============================================
        // 2. Multiple optional parameters
        // ============================================

        DisplayUser("Vijay");

        DisplayUser("Vijay",25);

        DisplayUser("Vijay",25,"Chennai");

        // ============================================
        // 3. Named arguments
        // ============================================

        DisplayUser(age: 25, name: "Vijay", city: "Chennai");

        // ============================================
        // 4. Optional calculation
        // ============================================

        Console.WriteLine(Calculate(10));

        Console.WriteLine(Calculate(10, 20));

        Console.WriteLine(Calculate(10, 20, 30));
    }

    static void Greet(string name, string message = "Welcome")
    {
        Console.WriteLine($"{message}, {name}");
    }

    static void DisplayUser(string name, int age = 18, string city = "Unknown")
    {
        Console.WriteLine($"Name: {name}, Age: {age}, City: {city}");
    }

    static int Calculate(int a, int b = 10, int c = 20)
    {
        return a + b + c;
    }
}