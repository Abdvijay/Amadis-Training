using System;
using System.Collections.Generic;

namespace CSharpLearning;

public class DictionaryCollections
{
    public static void Run()
    {
        Console.WriteLine("========== DICTIONARY ==========");

        // ============================================
        // 1. Create Dictionary
        // ============================================

        Dictionary<int, string> students = new();

        Console.WriteLine("\n1. Creating dictionary : Dictionary<int, string> students = new();");

        // ============================================
        // 2. Add()
        // ============================================

        students.Add(101, "Vijay");
        students.Add(102, "Arun");
        students.Add(103, "Kumar");

        Console.WriteLine($"\n2. Dictionary values : ");

        foreach (KeyValuePair<int, string> student in students)
        {
            Console.WriteLine(
                $"   ID: {student.Key}, Name: {student.Value}"
            );
        }

        // ============================================
        // 3. Access using Key
        // ============================================

        Console.WriteLine($"\n3. Accessing using key : {students[101]}");

        // ============================================
        // 4. Update
        // ============================================

        students[101] = "Vijay Kumar";

        Console.WriteLine($"\n4. After updating : {students[101]}");

        // ============================================
        // 5. Add using Indexer
        // ============================================

        students[104] = "Rahul";

        Console.WriteLine("\n5. After adding new key value : ");

        foreach (KeyValuePair<int, string> student in students)
        {
            Console.WriteLine(
                $"   ID: {student.Key}, Name: {student.Value}"
            );
        }

        // ============================================
        // 6. Count
        // ============================================

        Console.WriteLine($"\n6. Count dictionary value : {students.Count}");

        // ============================================
        // 7. ContainsKey()
        // ============================================

        Console.WriteLine($"\n7. Checking key 101 contains or not in dictionary : {students.ContainsKey(101)}");

        // ============================================
        // 8. ContainsValue()
        // ============================================

        Console.WriteLine($"\n8. Checking value Arun contains or not in dictionary : {students.ContainsValue("Arun")}");

        // ============================================
        // 9. TryGetValue()
        // ============================================

        if (students.TryGetValue(101, out string? studentName))
        {
            Console.WriteLine($"\n9. using TryGetValue : {studentName}");
        }

        // ============================================
        // 10. Remove()
        // ============================================

        students.Remove(104);

        Console.WriteLine($"\n10. After removing one value : ");

        foreach (KeyValuePair<int, string> student in students)
        {
            Console.WriteLine(
                $"   ID: {student.Key}, Name: {student.Value}"
            );
        }

        // ============================================
        // 11. Keys
        // ============================================

        Console.Write($"\n11. Keys in dictionary : ");

        foreach (int key in students.Keys)
        {
            Console.Write(key + " ");
        }

        Console.WriteLine();

        // ============================================
        // 12. Values
        // ============================================

        Console.Write($"\n12. Values in dictionary : ");

        foreach (string value in students.Values)
        {
            Console.Write(value + ", ");
        }

        Console.WriteLine();

        // ============================================
        // 13. KeyValuePair
        // ============================================

        Console.WriteLine($"\n13. Printing both key and values : ");

        foreach (KeyValuePair<int, string> student in students)
        {
            Console.WriteLine(
                $"    ID: {student.Key}, Name: {student.Value}"
            );
        }

        Console.WriteLine();

        // ============================================
        // 14. Deconstruct KeyValuePair
        // ============================================

        Console.WriteLine("\n14. Deconstruct KeyValuePair : ");

        foreach (var (key, value) in students)
        {
            Console.WriteLine($"    {key} - {value}");
        }

        // ============================================
        // 15. Clear()
        // ============================================

        Dictionary<int, string> temp = new()
        {
            { 1, "One" },
            { 2, "Two" }
        };

        Console.WriteLine("\n15. Initial dictionary values : ");

        foreach (var (key, value) in students)
        {
            Console.WriteLine($"    {key} - {value}");
        }

        temp.Clear();

        Console.WriteLine(
            $"\n    After Clear: {temp.Count}"
        );

        // ============================================
        // 16. Collection Initializer
        // ============================================

        Dictionary<string, int> marks = new()
        {
            { "Maths", 90 },
            { "Science", 85 },
            { "English", 88 }
        };

        Console.WriteLine($"\n16. Collection Initializer -> Fetching value : {marks["Maths"]}");

        // ============================================
        // 17. Alternative initialization
        // ============================================

        Dictionary<string, int> marks2 = new()
        {
            ["Maths"] = 90,
            ["Science"] = 85,
            ["English"] = 88
        };

        Console.WriteLine($"\n17. Alternative initialization -> {marks2["Science"]}");
    }
}