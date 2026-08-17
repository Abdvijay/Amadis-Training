namespace CSharpLearning;

public class Recursion
{
    public static void Run()
    {
        Console.WriteLine("========== RECURSION ==========");

        // ============================================
        // 1. Print numbers
        // ============================================

        PrintNumbers(1, 5);

        // ============================================
        // 2. Countdown
        // ============================================

        Countdown(5);

        // ============================================
        // 3. Factorial
        // ============================================

        int factorial =
            Factorial(5);

        Console.WriteLine(
            $"Factorial: {factorial}"
        );

        // ============================================
        // 4. Sum of numbers
        // ============================================

        int sum =
            Sum(5);

        Console.WriteLine(
            $"Sum: {sum}"
        );

        // ============================================
        // 5. Fibonacci
        // ============================================

        int fibonacci =
            Fibonacci(6);

        Console.WriteLine(
            $"Fibonacci: {fibonacci}"
        );

        // ============================================
        // 6. Power
        // ============================================

        int power =
            Power(2, 5);

        Console.WriteLine(
            $"Power: {power}"
        );

        // ============================================
        // 7. Reverse string
        // ============================================

        string reversed =
            ReverseString("Vijay");

        Console.WriteLine(
            $"Reversed: {reversed}"
        );
    }

    // ============================================
    // Print numbers
    // ============================================

    static void PrintNumbers(int current, int limit)
    {
        // Base condition
        if (current > limit)
        {
            return;
        }

        Console.WriteLine(current);

        // Recursive call
        PrintNumbers(current + 1, limit);
    }


    // ============================================
    // Countdown
    // ============================================

    static void Countdown(int number)
    {
        if (number == 0)
        {
            return;
        }

        Console.WriteLine(number);

        Countdown(number - 1);
    }


    // ============================================
    // Factorial
    // ============================================

    static int Factorial(int number)
    {
        if (number <= 1)
        {
            return 1;
        }

        return number * Factorial(number - 1);
    }


    // ============================================
    // Sum
    // ============================================

    static int Sum(int number)
    {
        if (number == 0)
        {
            return 0;
        }

        return number + Sum(number - 1);
    }


    // ============================================
    // Fibonacci
    // ============================================

    static int Fibonacci(int number)
    {
        if (number <= 1)
        {
            return number;
        }

        return Fibonacci(number - 1) + Fibonacci(number - 2);
    }


    // ============================================
    // Power
    // ============================================

    static int Power( int number, int exponent)
    {
        if (exponent == 0)
        {
            return 1;
        }

        return number * Power(number, exponent - 1);
    }


    // ============================================
    // Reverse String
    // ============================================

    static string ReverseString(string text)
    {
        if (text.Length <= 1)
        {
            return text;
        }

        return ReverseString(text.Substring(1)) + text[0];
    }
}