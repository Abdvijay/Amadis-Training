using System.Text;

namespace CSharpLearning;

public class StringBuilderConcepts
{
    public static void Run()
    {
        Console.WriteLine("===== STRING BUILDER =====");

        // 1. Create StringBuilder
        StringBuilder builder = new StringBuilder();

        builder.Append("Hello");

        Console.WriteLine($"1. After creating builder : {builder}");


        // 2. Append
        builder.Append(" World");

        Console.WriteLine($"\n2. After using append : {builder}");


        // 3. AppendLine
        builder.AppendLine();
        builder.AppendLine("Welcome to C#");

        Console.WriteLine($"\n3. After using appendLine : {builder}");


        // 4. AppendFormat
        builder.AppendFormat(
            "Name: {0}, Age: {1}",
            "Vijay",
            25
        );

        Console.WriteLine($"\n4. After appendFormat : {builder}");


        // 5. Insert
        builder.Clear();
        builder.AppendLine("Hello World");
        builder.Insert(0, "Start: ");

        Console.WriteLine($"\n5. After insert : {builder}");


        // 6. Replace
        builder.Replace(
            "Hello",
            "Hi"
        );

        Console.WriteLine($"6. After replace : {builder}");


        // 7. Remove
        builder.Remove(0, 7);

        Console.WriteLine($"7. After remove : {builder}");


        // 8. Indexing
        Console.WriteLine($"8. Indexing : {builder[0]}");


        // 9. Updating character
        builder[0] = 'X';

        Console.WriteLine($"\n9. Updating using indexing : {builder}");


        // 10. Length
        Console.WriteLine(
            $"10. Length: {builder.Length}"
        );


        // 11. Capacity
        Console.WriteLine(
            $"\n11. Capacity: {builder.Capacity}"
        );


        // 12. MaxCapacity
        Console.WriteLine(
            $"\n12. Max Capacity: {builder.MaxCapacity}"
        );


        // 13. Clear
        builder.Clear();

        Console.WriteLine(
            $"\n13. After Clear: '{builder}'"
        );


        // 14. Building large text
        StringBuilder report = new StringBuilder();

        Console.WriteLine("\n14. After building large text : ");

        for (int i = 1; i <= 5; i++)
        {
            report.AppendLine(
                $"Employee {i}"
            );
        }

        Console.WriteLine(report);


        // 15. Constructor with initial text
        StringBuilder message =
            new StringBuilder("Hello");

        message.Append(" Vijay");

        Console.WriteLine($"\n15. Initial text : {message}");


        // 16. Constructor with capacity
        StringBuilder capacityBuilder =
            new StringBuilder(100);

        Console.WriteLine($"\n16. With initial capacity : {
            capacityBuilder.Capacity}"
        );


        // 17. Convert to string
        string finalResult =
            report.ToString();

        Console.WriteLine($"\n17. After toString : {finalResult}");
    }
}