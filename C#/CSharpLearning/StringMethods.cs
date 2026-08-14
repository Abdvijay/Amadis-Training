namespace CSharpLearning;

public class StringMethods
{
    public static void Run()
    {
        Console.WriteLine("===== STRING METHODS =====");

        string text = "  Hello World Hello  ";

        // 1. Length
        Console.WriteLine($"\n1. String length : {text.Length}");


        // 2. ToUpper
        Console.WriteLine($"\n2. toUpper() : {text.ToUpper()}");


        // 3. ToLower
        Console.WriteLine($"\n3. toLower() : {text.ToLower()}");


        // 4. Trim
        Console.WriteLine($"\n4. trimming : {text.Trim()}");


        // 5. TrimStart
        Console.WriteLine($"\n5. trim at starting : {text.TrimStart()}");


        // 6. TrimEnd
        Console.WriteLine($"\n6. trim at ending : {text.TrimEnd()}");


        // 7. Contains
        Console.WriteLine($"\n7. contains : {text.Contains("World")}");


        // 8. StartsWith
        Console.WriteLine($"\n8. startswith :{text.Trim().StartsWith("Hello")}");


        // 9. EndsWith
        Console.WriteLine($"\n9. endswith : {text.Trim().EndsWith("Hello")}");


        // 10. IndexOf
        Console.WriteLine($"\n10. indexOf : {text.IndexOf("World")}");


        // 11. LastIndexOf
        Console.WriteLine($"\n11. lastIndexof : {text.LastIndexOf("Hello")}");


        // 12. Substring
        string name = "Vijay";

        Console.WriteLine($"\n12. substring : {name.Substring(0, 3)}");


        // 13. Replace
        Console.WriteLine($"\n13. replace : {text.Replace("Hello", "Hi")}");


        // 14. Remove
        Console.WriteLine($"\n14. remove : {name.Remove(2)}");


        // 15. Insert
        Console.WriteLine($"\n15. insert : {name.Insert(5, " Kumar")}");


        // 16. Contains
        Console.WriteLine($"\n16. contains : {name.Contains("Vij")}");


        // 17. Equals
        string a = "Hello";
        string b = "Hello";

        Console.WriteLine($"\n17. equals : {a.Equals(b)}");


        // 18. Compare
        Console.WriteLine($"\n18. compare : {string.Compare(a, b)}");


        // 19. Split
        string fruits = "Apple,Banana,Mango";
        Console.WriteLine("\n19. split using : ");

        string[] fruitArray = fruits.Split(',');

        foreach (string fruit in fruitArray)
        {
            Console.WriteLine(fruit);
        }


        // 20. Join
        string joined = string.Join(" - ",fruitArray);

        Console.WriteLine($"\n20. join using : {joined}");


        // 21. Concat
        string fullName = string.Concat("Vijay"," ","Narayanan");

        Console.WriteLine($"\n21. concat : {fullName}");


        // 22. IsNullOrEmpty
        string empty = "";

        Console.WriteLine($"\n22. IsNullOrEmpty : {string.IsNullOrEmpty(empty)}");


        // 23. IsNullOrWhiteSpace
        string spaces = "   ";

        Console.WriteLine($"\n23. IsNullOrWhiteSpace : {string.IsNullOrWhiteSpace(spaces)}");


        // 24. PadLeft
        Console.WriteLine($"\n24. PaddingLeft : {"123".PadLeft(5, '0')}");


        // 25. PadRight
        Console.WriteLine($"\n25. PaddingRight : {"123".PadRight(5, '0')}");


        // 26. Replace with character
        string word = "banana";

        Console.WriteLine($"\n26. replace : {word.Replace('a', 'o')}");


        // 27. ToCharArray
        char[] characters = name.ToCharArray();

        Console.Write("\n27. ToCharArray : \n");

        foreach (char character in characters)
        {
            Console.WriteLine(character);
        }


        // 28. CopyTo
        char[] target = new char[5];

        name.CopyTo(0,target,0,name.Length);

        Console.Write("\n28. CopyTo : ");

        foreach (char character in target)
        {
            Console.Write(character);
        }

        Console.WriteLine();


        // 29. CompareOrdinal
        Console.WriteLine($"\n29 . CompareOrdinal : {string.CompareOrdinal("A", "B")}");


        // 30. Format
        string formatted = string.Format(
            "Name: {0}, Age: {1}",
            "Vijay",
            25
        );

        Console.WriteLine($"\n30. Formatted : {formatted}");


        // 31. Contains with StringComparison
        Console.WriteLine($"\n31. Stringcomparison with contains : {
            name.Contains(
                "vij",
                StringComparison.OrdinalIgnoreCase
            )}"
        );


        // 32. StartsWith with comparison
        Console.WriteLine($"\n32. String comparison with startswith : {
            name.StartsWith(
                "vij",
                StringComparison.OrdinalIgnoreCase
            )}"
        );


        // 33. EndsWith with comparison
        Console.WriteLine($"\n33. Endswith : {
            name.EndsWith(
                "JAY",
                StringComparison.OrdinalIgnoreCase
            )}"
        );
    }
}