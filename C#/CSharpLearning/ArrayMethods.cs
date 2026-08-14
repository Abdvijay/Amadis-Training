namespace CSharpLearning;

public class ArrayMethods
{
    public static void Run()
    {
        Console.WriteLine("===== ARRAY METHODS =====");

        int[] numbers = { 50, 20, 40, 10, 30 };

        // --------------------------------
        // 1. Sort
        // --------------------------------

        Array.Sort(numbers);

        Console.Write("\n1. After Sort:");

        foreach (int number in numbers)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 2. Reverse
        // --------------------------------

        Array.Reverse(numbers);

        Console.Write("\n2. After Reverse:");

        foreach (int number in numbers)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 3. IndexOf
        // --------------------------------

        int index = Array.IndexOf(numbers, 30);

        Console.WriteLine($"\n3. Index of 30: {index}");


        // --------------------------------
        // 4. LastIndexOf
        // --------------------------------

        int[] duplicateNumbers = { 10, 20, 30, 20, 40, 20 };

        int lastIndex = Array.LastIndexOf(
            duplicateNumbers,
            20
        );

        Console.WriteLine($"\n4. Last index of 20: {lastIndex}");


        // --------------------------------
        // 5. BinarySearch
        // --------------------------------

        int[] sortedNumbers = { 10, 20, 30, 40, 50 };

        int searchResult = Array.BinarySearch(
            sortedNumbers,
            30
        );

        Console.WriteLine($"\n5. Binary search result: {searchResult}");


        // --------------------------------
        // 6. Copy
        // --------------------------------

        int[] source = { 10, 20, 30, 40, 50 };
        int[] destination = new int[5];

        Array.Copy(source, destination, source.Length);

        Console.Write("\n6. Copied array:");

        foreach (int number in destination)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 7. CopyTo
        // --------------------------------

        int[] source2 = { 100, 200, 300 };
        int[] destination2 = new int[3];

        source2.CopyTo(destination2, 0);
        Console.Write($"\n7. Copied array using copyTo : ");

        foreach (int number in destination2)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 8. Clear
        // --------------------------------

        int[] values = { 10, 20, 30, 40 };

        Array.Clear(values, 0, values.Length);

        Console.Write("\n8. After Clear:");

        foreach (int value in values)
        {
            Console.Write(value + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 9. Resize
        // --------------------------------

        int[] resizeArray = { 10, 20, 30 };

        Array.Resize(ref resizeArray, 5);

        resizeArray[3] = 40;
        resizeArray[4] = 50;

        Console.Write("\n9. Resized Array : ");
        foreach (int value in resizeArray)
        {
            Console.Write(value + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 10. Fill
        // --------------------------------

        int[] fillArray = new int[5];

        Array.Fill(fillArray, 100);

        Console.Write("\n10. Filled array : ");
        foreach (int value in fillArray)
        {
            Console.Write(value + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 11. Clone
        // --------------------------------

        int[] original = { 10, 20, 30 };

        int[] cloned = (int[])original.Clone();

        Console.WriteLine($"\n11. Cloned array : {cloned[0]}");


        // --------------------------------
        // 12. Exists
        // --------------------------------

        int[] numbers2 = { 10, 20, 30, 40 };

        bool exists = Array.Exists(
            numbers2,
            number => number == 30
        );

        Console.WriteLine($"\n12. Exists 30: {exists}");


        // --------------------------------
        // 13. Find
        // --------------------------------

        int found = Array.Find(
            numbers2,
            number => number > 20
        );

        Console.WriteLine($"\n13. First number > 20: {found}");


        // --------------------------------
        // 14. FindAll
        // --------------------------------

        int[] foundAll = Array.FindAll(
            numbers2,
            (number) => number > 20
        );

        Console.Write("\n14. All numbers > 20:");

        foreach (int number in foundAll)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 15. FindIndex
        // --------------------------------

        int foundIndex = Array.FindIndex(
            numbers2,
            number => number > 20
        );

        Console.WriteLine($"\n15. First index > 20: {foundIndex}");


        // --------------------------------
        // 16. FindLast
        // --------------------------------

        int lastFound = Array.FindLast(
            numbers2,
            number => number > 20
        );

        Console.WriteLine($"\n16. Last number > 20: {lastFound}");


        // --------------------------------
        // 17. FindLastIndex
        // --------------------------------

        int lastFoundIndex = Array.FindLastIndex(
            numbers2,
            number => number > 20
        );

        Console.WriteLine(
            $"\n17. Last index > 20: {lastFoundIndex}"
        );


        // --------------------------------
        // 18. ForEach
        // --------------------------------

        Console.Write("\n18. After using foreach : ");
        Array.ForEach(
            numbers2,
            number => Console.Write(number + " ")
        );


        // --------------------------------
        // 19. TrueForAll
        // --------------------------------

        bool allGreaterThanZero = Array.TrueForAll(
            numbers2,
            number => number > 0
        );

        Console.WriteLine(
            $"\n\n19. Check All > 0: {allGreaterThanZero}"
        );


        // --------------------------------
        // 20. ConvertAll
        // --------------------------------

        string[] numberStrings = Array.ConvertAll(
            numbers2,
            number => number.ToString()
        );

        Console.Write("\n20. After using ConvertAll : ");

        foreach (string number in numberStrings)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();


        // --------------------------------
        // 21. Empty
        // --------------------------------

        int[] emptyArray = Array.Empty<int>();

        Console.WriteLine(
            $"\n21. Empty array length: {emptyArray.Length}"
        );


        // --------------------------------
        // 22. CreateInstance
        // --------------------------------

        Array dynamicArray = Array.CreateInstance(
            typeof(int),
            5
        );

        dynamicArray.SetValue(100, 0);
        dynamicArray.SetValue(200, 1);

        Console.Write("\n22. CreateInstance : ");
        Console.WriteLine(
            dynamicArray.GetValue(0)
        );


        // --------------------------------
        // 23. GetLength
        // --------------------------------

        int[,] matrix =
        {
            { 1, 2, 3 },
            { 4, 5, 6 }
        };

        Console.WriteLine(
            $"\n23. Rows: {matrix.GetLength(0)}"
        );

        Console.WriteLine(
            $"\n24. Columns: {matrix.GetLength(1)}"
        );


        // --------------------------------
        // 24. GetLowerBound
        // --------------------------------

        Console.WriteLine($"\n25. Get lower bound : {matrix.GetLowerBound(0)}");


        // --------------------------------
        // 25. GetUpperBound
        // --------------------------------

        Console.WriteLine($"\n26. Get upper bound : {matrix.GetUpperBound(0)}");


        // --------------------------------
        // 26. GetValue
        // --------------------------------

        Console.WriteLine($"\n27. GetValue : {matrix.GetValue(1, 2)}");


        // --------------------------------
        // 27. SetValue
        // --------------------------------

        matrix.SetValue(999, 0, 0);

        Console.WriteLine($"\n28. After setValue : {matrix[0, 0]}");


        // --------------------------------
        // 28. Length
        // --------------------------------

        Console.WriteLine(
            $"\n29. Length: {numbers2.Length}"
        );


        // --------------------------------
        // 29. LongLength
        // --------------------------------

        Console.WriteLine(
            $"\n30. LongLength: {numbers2.LongLength}"
        );


        // --------------------------------
        // 30. Rank
        // --------------------------------

        Console.WriteLine(
            $"\n31. Rank: {matrix.Rank}"
        );
    }
}