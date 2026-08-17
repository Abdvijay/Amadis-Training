using System;
using System.Collections.Generic;

namespace CSharpLearning;

public class ListCollections
{
    public static void Run()
    {
        Console.WriteLine("========== LIST COLLECTION ==========");

        // ============================================
        // 1. Creating a List
        // ============================================

        List<int> numbers = new List<int>();

        List<string> names = new();

        List<double> salaries = new();

        // ============================================
        // 2. Add()
        // ============================================

        numbers.Add(10);
        numbers.Add(20);
        numbers.Add(30);

        Console.WriteLine($"\n1. After Add : {string.Join(" ", numbers)}");

        // ============================================
        // 3. AddRange()
        // ============================================

        var new_values = new List<int>{ 40, 50, 60 };

        numbers.AddRange(new_values);

        Console.WriteLine($"\n2. After AddRange : {string.Join(" ", numbers)}");


        // ============================================
        // 4. Access using Index
        // ============================================

        Console.WriteLine($"\n3. First : {numbers[0]}");
        Console.WriteLine($"\n4. Second : {numbers[1]}");
        Console.WriteLine($"\n5. Last : {numbers[^1]}");

        // ============================================
        // 5. Update using Index
        // ============================================

        numbers[0] = 100;

        Console.WriteLine($"\n6. Updated first value: {numbers[0]}");

        // ============================================
        // 6. Insert()
        // ============================================

        numbers.Insert(1, 500);

        Console.WriteLine($"\n7. After Insert : {string.Join(" ",numbers)}");

        // ============================================
        // 7. InsertRange()
        // ============================================

        numbers.InsertRange(2,new[] { 700, 800 });

        Console.WriteLine($"\n8. After InsertRange : {string.Join(" ",numbers)}");

        // ============================================
        // 8. Count
        // ============================================

        Console.WriteLine($"\n9. Counting list : {numbers.Count}");

        // ============================================
        // 9. Contains()
        // ============================================

        Console.WriteLine($"\n10. Contains 100: {numbers.Contains(100)}");

        // ============================================
        // 10. IndexOf()
        // ============================================

        Console.WriteLine($"\n11. Index of 100: {numbers.IndexOf(100)}");

        // ============================================
        // 11. LastIndexOf()
        // ============================================

        numbers.Add(100);

        Console.WriteLine($"\n12. Last index of 100: {numbers.LastIndexOf(100)}");

        // ============================================
        // 12. Remove()
        // ============================================

        Console.WriteLine($"\n13. Before removing : {string.Join(" ",numbers)}");

        numbers.Remove(100);

        // Remove first matching value

        Console.WriteLine($"\n    After removing : {string.Join(" ",numbers)}");

        // ============================================
        // 13. RemoveAt()
        // ============================================

        numbers.RemoveAt(0);

        // Removes item at index 0
        
        Console.WriteLine($"\n14. Removing 1st index : {string.Join(" ",numbers)}");

        // ============================================
        // 14. RemoveRange()
        // ============================================

        numbers.RemoveRange(0, 2);

        // Starts at index 0
        // Removes 2 elements

        Console.WriteLine($"\n15. Removing range values : {string.Join(" ", numbers)}");

        // ============================================
        // 15. RemoveAll()
        // ============================================

        numbers.RemoveAll(number => number > 50);

        Console.WriteLine($"\n15. Removing all( > 50) : {string.Join(" ", numbers)}");

        // ============================================
        // 16. Reverse()
        // ============================================

        numbers.Reverse();

        Console.WriteLine($"\n16. After reversing : {string.Join(" ", numbers)}");

        // ============================================
        // 17. Sort()
        // ============================================

        numbers.Sort();

        Console.WriteLine($"\n17. After sorting : {string.Join(" ", numbers)}");

        // ============================================
        // 18. Find()
        // ============================================

        int result = numbers.Find(number => number > 25);

        Console.WriteLine($"\n18. First matching value > 25: {result}");

        // ============================================
        // 19. FindAll()
        // ============================================

        List<int> results = numbers.FindAll(number => number > 25);

        Console.WriteLine($"\n19. All matching values > 20 : {string.Join(" ",results)}");
        
        // ============================================
        // 20. FindIndex()
        // ============================================

        int index = numbers.FindIndex(number => number > 25);

        Console.WriteLine($"\n20. First matching value index > 25: {index}");

        // ============================================
        // 21. FindLast()
        // ============================================

        int lastValue = numbers.FindLast(number => number > 25);

        Console.WriteLine($"\n21. Last matching value > 25 : {lastValue}");

        // ============================================
        // 22. FindLastIndex()
        // ============================================

        int lastIndex = numbers.FindLastIndex(number => number > 25);

        Console.WriteLine($"\n22. Last matching value index > 25 : {lastIndex}");

        // ============================================
        // 23. Exists()
        // ============================================

        bool exists = numbers.Exists(number => number > 40);

        Console.WriteLine($"\n23. Value > 40 exists : {exists}");

        // ============================================
        // 24. TrueForAll()
        // ============================================

        bool allPositive = numbers.TrueForAll(number => number > 0);

        Console.WriteLine($"\n24. All positive : {allPositive}");

        // ============================================
        // 25. ForEach()
        // ============================================

        Console.Write($"\n25. Using foreach : ");

        numbers.ForEach(number => {
            Console.Write(number + " ");
        });

        Console.WriteLine();

        // ============================================
        // 26. Clear()
        // ============================================

        List<int> temp = new() { 1, 2, 3 };

        Console.WriteLine($"\n26. Before clearing : {string.Join(" ", temp)}");

        temp.Clear();

        Console.WriteLine($"\n    After clearing  : {string.Join(" ", temp)}");

        // ============================================
        // 27. ToArray()
        // ============================================

        List<int> list = new() { 10, 20, 30 };

        int[] array = list.ToArray();

        Console.WriteLine($"\n27. ToArray : {string.Join(" ",array)}");

        // ============================================
        // 28. GetRange()
        // ============================================

        Console.Write($"\n28. GetRange() : ");

        List<int> range = list.GetRange(0, 2);

        foreach (int item in range)
        {
            Console.Write(item + " ");
        }

        Console.WriteLine();

        // ============================================
        // 29. Capacity
        // ============================================

        Console.WriteLine($"\n29. Capacity: {list.Capacity}");

        // ============================================
        // 30. TrimExcess()
        // ============================================

        list.TrimExcess();

        // Reduces unused capacity

        List<int> nums = new List<int> { 1, 2, 3, 4, 5 };
        for (int i = 0; i < nums.Count; i++)
        {
            Console.WriteLine(nums[i]);
        }

        foreach (int n in nums)
        {
            Console.WriteLine(n);
        }
    }
}