namespace CSharpLearning;

public class ExceptionHandling
{
    public static void Run()
    {
        Console.WriteLine(
            "========== EXCEPTION HANDLING =========="
        );


        // ==========================================
        // 1. Basic try-catch
        // ==========================================

        try
        {
            int a = 10;
            int b = 0;

            int result = a / b;

            Console.WriteLine(result);
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Cannot divide by zero.");
        }


        // ==========================================
        // 2. Exception object
        // ==========================================

        try
        {
            int[] numbers = { 10, 20, 30 };

            Console.WriteLine(numbers[10]);
        }
        catch (Exception ex)
        {
            Console.WriteLine();

            Console.WriteLine($"Exception: {ex.Message}");

            Console.WriteLine($"Type: {ex.GetType().Name}");
        }


        // ==========================================
        // 3. FormatException
        // ==========================================

        try
        {
            string input = "abc";

            int number = Convert.ToInt32(input);

            Console.WriteLine(number);
        }
        catch (FormatException)
        {
            Console.WriteLine();

            Console.WriteLine("Invalid number format.");
        }


        // ==========================================
        // 4. Multiple catch
        // ==========================================

        try
        {
            //int number = Convert.ToInt32("abc");

            Console.WriteLine();

            int num = 0;

            int result = 100 / num;

            Console.WriteLine(result);
        }
        catch (FormatException)
        {
            Console.WriteLine("Input is not a valid number.");
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Cannot divide by zero.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }


        // ==========================================
        // 5. finally
        // ==========================================

        try
        {
            Console.WriteLine();
            Console.WriteLine("Inside try");
        }
        catch
        {
            Console.WriteLine("Inside catch");
        }
        finally
        {
            Console.WriteLine("Inside finally");
        }


        // ==========================================
        // 6. throw
        // ==========================================

        try
        {
            CheckAge(15);
        }
        catch (Exception ex)
        {
            Console.WriteLine();

            Console.WriteLine($"Age Error: {ex.Message}");
        }


        // ==========================================
        // 7. Custom exception
        // ==========================================

        try
        {
            CheckSalary(500);
        }
        catch (InvalidSalaryException ex)
        {
            Console.WriteLine();

            Console.WriteLine($"Salary Error: {ex.Message}");
        }

        // 8. TryFinally Example

        Console.WriteLine();

        Console.WriteLine(TryFinallyExample.TrySample());
    }


    // ==========================================
    // Method using throw
    // ==========================================

    public static void CheckAge(int age)
    {
        if (age < 18)
        {
            throw new Exception("Age must be 18 or above.");
        }

        Console.WriteLine("Age is valid.");
    }


    // ==========================================
    // Method using custom exception
    // ==========================================

    public static void CheckSalary(double salary)
    {
        if (salary < 1000)
        {
            throw new InvalidSalaryException("Salary must be at least 1000.");
        }

        Console.WriteLine("Salary is valid.");
    }
}


// ==================================================
// Custom Exception
// ==================================================

public class InvalidSalaryException : Exception
{
    public InvalidSalaryException(string message) : base(message)
    {
    }
}

public class TryFinallyExample
{
    public static string TrySample()
    {
        try
        {
            return "True";
        }
        finally
        {
            Console.WriteLine("Finally executed");
        }
    }
}