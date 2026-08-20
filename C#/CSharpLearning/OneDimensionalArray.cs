//namespace CSharpLearning;

//public class OneDimensionalArray
//{
//    public static void Run()
//    {
//        Console.WriteLine("===== ONE DIMENSIONAL ARRAY =====");

//        // 1. Declaration
//        int[] numbers;
//        Console.WriteLine("\n1. Declaration : int[] numbers;");

//        // 2. Creating array with fixed size
//        numbers = new int[5];

//        Console.WriteLine("\n2. Creating array with fixed size : numbers = new int[5];");

//        numbers[0] = 10;
//        numbers[1] = 20;
//        numbers[2] = 30;
//        numbers[3] = 40;
//        numbers[4] = 50;

//        // Console.WriteLine(numbers[0]);
//        Console.WriteLine("\n3. Array start with 0 index : Console.WriteLine(numbers[0]);");
//        // Console.WriteLine(numbers[4]);

//        // 3. Direct initialization
//        int[] marks = { 80, 90, 75, 88, 95 };
//        Console.WriteLine("\n4. Direct initialization : int[] marks = { 80, 90, 75, 88, 95 };");

//        // 4. Using new
//        int[] values = new int[] { 100, 200, 300 };
//        Console.WriteLine("\n5. Using new keyword : int[] values = new int[] { 100, 200, 300 };");

//        // 5. Indexing
//        // Console.WriteLine($"First mark: {marks[0]}");
//        // Console.WriteLine($"Third mark: {marks[2]}");
//        Console.WriteLine("\n6. Array indexing : marks[2]");

//        // 6. Updating value
//        marks[1] = 100;
//        Console.WriteLine("\n7. Array value updating : marks[1] = 100;");

//        // Console.WriteLine($"Updated second mark: {marks[1]}");

//        // 7. Length
//        // Console.WriteLine($"Length: {marks.Length}");
//        Console.WriteLine("\n8. Finding array Length : marks.Length");

//        // 8. Last element
//        // Console.WriteLine($"Last element: {marks[marks.Length - 1]}");
//        Console.WriteLine("\n9. Finding array last element : marks[marks.Length - 1]");

//        // 9. Forward loop
//        Console.Write("\n10. Printing array using for : ");
//        for (int i = 0; i < marks.Length; i++)
//        {
//            Console.Write(marks[i] + " ");
//        }
//        Console.WriteLine();

//        // 10. foreach loop
//        Console.Write("\n11. Printing array using foreach : ");
//        foreach (int mark in marks)
//        {
//            Console.Write(mark + " ");
//        }
//        Console.WriteLine();

//        // 11. Different data types
//        string[] names = { "Vijay", "Arun", "Kumar" };

//        double[] salary = { 25000.50, 30000.75, 40000.25 };

//        bool[] status = { true, false, true };

//        // 12. Array with default values
//        int[] defaultValues = new int[5];
//        Console.Write("\n12. Array with default values : ");
//        foreach (int value in defaultValues)
//        {
//            Console.Write(value + " ");
//        }
//        Console.WriteLine();

//        //13. Negative indexing
//        Console.WriteLine("\n13. Negative indexing : numbers[^1]");
//        // Console.WriteLine(numbers[^1]);
//    }
//}