namespace CSharpLearning;

public class JaggedArray
{
    public static void Run()
    {
        Console.WriteLine("===== JAGGED ARRAY =====");

        int[][] numbers = new int[3][];

        numbers[0] = new int[] { 10, 20 };
        numbers[1] = new int[] { 30, 40, 50 };
        numbers[2] = new int[] { 60, 70, 80, 90 };

        // Accessing
        Console.WriteLine(numbers[0][0]); // 10
        Console.WriteLine(numbers[1][2]); // 50
        Console.WriteLine(numbers[2][3]); // 90

        // Length of outer array
        Console.WriteLine(numbers.Length);

        // Length of individual rows
        Console.WriteLine(numbers[0].Length);
        Console.WriteLine(numbers[1].Length);
        Console.WriteLine(numbers[2].Length);

        // Nested loop
        for (int row = 0; row < numbers.Length; row++)
        {
            for (int column = 0; column < numbers[row].Length; column++)
            {
                Console.Write(numbers[row][column] + " ");
            }

            Console.WriteLine();
        }
    }
}