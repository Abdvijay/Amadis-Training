namespace CSharpLearning;

public class TwoDimensionalArray
{
    public static void Run()
    {
        Console.WriteLine("===== TWO DIMENSIONAL ARRAY =====");

        int[,] numbers = 
        {
            { 10, 20, 30 },
            { 40, 50, 60 },
            { 70, 80, 90 }
        };

        // Indexing
        Console.WriteLine(numbers[0, 0]); // 10
        Console.WriteLine(numbers[1, 2]); // 60
        Console.WriteLine(numbers[2, 1]); // 80

        // Rows and columns
        Console.WriteLine($"Rows: {numbers.GetLength(0)}");
        Console.WriteLine($"Columns: {numbers.GetLength(1)}");

        // Length
        Console.WriteLine($"Total elements: {numbers.Length}");

        // Rank
        Console.WriteLine($"Rank: {numbers.Rank}");

        // Nested loop
        for (int row = 0; row < numbers.GetLength(0); row++)
        {
            for (int column = 0; column < numbers.GetLength(1); column++)
            {
                Console.Write(numbers[row, column] + " ");
            }

            Console.WriteLine();
        }

        // Updating
        numbers[1, 1] = 500;

        Console.WriteLine(numbers[1, 1]);
    }
}