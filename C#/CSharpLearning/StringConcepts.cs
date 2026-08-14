namespace CSharpLearning;

public class StringConcepts
{
    public static void Run()
    {
        Console.WriteLine("===== STRING CONCEPTS =====");

        // char
        char letter = 'A';

        // string
        string name = "Vijay";

        Console.WriteLine(letter);
        Console.WriteLine(name);

        // Indexing
        Console.WriteLine(name[0]);
        Console.WriteLine(name[^1]);

        // Length
        Console.WriteLine(name.Length);

        // Loop
        for (int i = 0; i < name.Length; i++)
        {
            Console.WriteLine(name[i]);
        }

        // foreach
        foreach (char character in name)
        {
            Console.WriteLine(character);
        }

        // Regular string
        // string message = "Hello World";

        // Escape characters
        string escaped = "Hello\nWorld";

        Console.WriteLine(escaped);

        // Verbatim string
        string path = @"C:\Users\Vijay\Documents";

        Console.WriteLine(path);

        // Interpolation
        int age = 25;

        string info = $"Name: {name}, Age: {age}";

        Console.WriteLine(info);

        // Interpolated verbatim
        string userPath = $@"C:\Users\{name}\Documents";

        Console.WriteLine(userPath);

        // Raw string
        string json = """
        {
            "name": "Vijay",
            "age": 25
        }
        """;

        Console.WriteLine(json);

        // String comparison
        string first = "hello";
        string second = "hello";

        Console.WriteLine(first == second);
        Console.WriteLine(string.Equals(first, second));
        Console.WriteLine(string.Compare(first, second));

        // Null and empty
        string? value = null;

        Console.WriteLine(
            string.IsNullOrEmpty(value)
        );

        Console.WriteLine(
            string.IsNullOrWhiteSpace(value)
        );

        // Immutability
        string original = "vijay";

        string upper = original.ToUpper();

        Console.WriteLine(original);
        Console.WriteLine(upper);
    }
}