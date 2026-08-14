namespace CSharpLearning;

public class ThreeDimensionalArray
{
    public static void Run()
    {
        Console.WriteLine("===== THREE DIMENSIONAL ARRAY =====");

        int[,,] numbers = new int[2, 3, 4];

        int value = 1;

        for (int layer = 0; layer < numbers.GetLength(0); layer++)
        {
            for (int row = 0; row < numbers.GetLength(1); row++)
            {
                for (int column = 0; column < numbers.GetLength(2); column++)
                {
                    numbers[layer, row, column] = value;
                    value++;
                }
            }
        }

        // Accessing
        Console.WriteLine(numbers[0, 0, 0]);
        Console.WriteLine(numbers[1, 2, 3]);

        // Length
        Console.WriteLine($"Total elements: {numbers.Length}");

        // Rank
        Console.WriteLine($"Rank: {numbers.Rank}");

        // Dimensions
        Console.WriteLine($"Layers: {numbers.GetLength(0)}");
        Console.WriteLine($"Rows: {numbers.GetLength(1)}");
        Console.WriteLine($"Columns: {numbers.GetLength(2)}");

        // Loop
        for (int layer = 0; layer < numbers.GetLength(0); layer++)
        {
            Console.WriteLine($"Layer {layer}");

            for (int row = 0; row < numbers.GetLength(1); row++)
            {
                for (int column = 0; column < numbers.GetLength(2); column++)
                {
                    Console.Write(
                        numbers[layer, row, column] + " "
                    );
                }

                Console.WriteLine();
            }

            Console.WriteLine();
        }
    }
}