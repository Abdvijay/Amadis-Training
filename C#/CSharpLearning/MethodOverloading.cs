namespace CSharpLearning;

public class MethodOverloading
{
    public static void Run()
    {
        Console.WriteLine("========== METHOD OVERLOADING ==========");

        // Same method name
        // Different number/type of parameters

        Console.WriteLine(Add(10, 20));

        Console.WriteLine(Add(10, 20, 30));

        Console.WriteLine(Add(10.5, 20.5));

        Console.WriteLine(Add("Hello ", "Vijay"));

        // Different parameter types
        Print(10);

        Print("Hello");

        Print(10, 20);
    }

    // Overload 1
    static int Add(int a, int b)
    {
        return a + b;
    }

    // Overload 2
    static int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    // Overload 3
    static double Add(double a, double b)
    {
        return a + b;
    }

    // Overload 4
    static string Add(string a, string b)
    {
        return a + b;
    }

    // Overload 5
    static void Print(int number)
    {
        Console.WriteLine($"Integer: {number}");
    }

    // Overload 6
    static void Print(string text)
    {
        Console.WriteLine($"String: {text}");
    }

    // Overload 7
    static void Print(int a, int b)
    {
        Console.WriteLine($"A: {a}, B: {b}");
    }
}