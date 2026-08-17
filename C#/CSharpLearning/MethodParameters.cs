namespace CSharpLearning;

public class MethodParameters
{
    public static void Run()
    {
        Console.WriteLine("========== METHOD PARAMETERS ==========");

        // ============================================
        // 1. Normal parameter
        // ============================================

        int number = 10;

        ChangeValue(number);

        Console.WriteLine($"After normal parameter: {number}");


        // ============================================
        // 2. ref parameter
        // ============================================

        int refNumber = 10;

        ChangeUsingRef(ref refNumber);

        Console.WriteLine($"After ref: {refNumber}");


        // ============================================
        // 3. out parameter
        // ============================================

        int result;

        GetNumber(out result);

        Console.WriteLine($"Out result: {result}");


        // ============================================
        // 4. Multiple out parameters
        // ============================================

        int sum;
        int difference;

        Calculate(20, 10, out sum, out difference);

        Console.WriteLine($"Sum: {sum}");

        Console.WriteLine($"Difference: {difference}");


        // ============================================
        // 5. in parameter
        // ============================================

        int inNumber = 100;

        DisplayUsingIn(in inNumber);

        Console.WriteLine($"Original value: {inNumber}");
    }

    // Normal parameter
    static void ChangeValue(int number)
    {
        number = 100;
    }

    // ref
    static void ChangeUsingRef(ref int number)
    {
        number = 100;
    }

    // out
    static void GetNumber(out int number)
    {
        number = 500;
    }

    // Multiple out
    static void Calculate(int a, int b, out int sum, out int difference)
    {
        sum = a + b;
        difference = a - b;
    }

    // in
    static void DisplayUsingIn(in int number)
    {
        Console.WriteLine(number);
    }
}