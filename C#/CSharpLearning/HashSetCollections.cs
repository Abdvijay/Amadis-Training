using System;
using System.Collections.Generic;

namespace CSharpLearning;

public class HashSetCollections
{
    public static void Run()
    {
        Console.WriteLine("========== HASH SET ==========");

        // ============================================
        // 1. Create HashSet
        // ============================================

        HashSet<int> numbers = new();

        Console.WriteLine("\n1. Creating HashSet : HashSet<int> numbers = new();");
        // ============================================
        // 2. Add()
        // ============================================

        numbers.Add(10);
        numbers.Add(20);
        numbers.Add(30);

        Console.WriteLine($"\n2. Before Adding Duplicate : {string.Join(" ",numbers)}");

        // Duplicate
        numbers.Add(10);

        Console.WriteLine($"\n   After Adding Duplicate : {string.Join(" ", numbers)}");

        // ============================================
        // 3. Count
        // ============================================

        Console.WriteLine($"\n3. Count : {numbers.Count}");

        // ============================================
        // 4. Contains()
        // ============================================

        Console.WriteLine($"\n4. Contains : {numbers.Contains(20)}");

        // ============================================
        // 5. Remove()
        // ============================================

        numbers.Remove(20);

        Console.WriteLine($"\n5. After removing 20 : {string.Join(" ",numbers)}");

        // ============================================
        // 6. RemoveWhere()
        // ============================================

        numbers.RemoveWhere(number => number > 20);

        Console.WriteLine($"\n6. After using RemoveWhere : {string.Join(" ", numbers)}");

        // ============================================
        // 7. Clear()
        // ============================================

        numbers.Clear();

        Console.WriteLine($"\n7. After clearing set : {numbers.Count}");

        // ============================================
        // 8. UnionWith()
        // ============================================

        HashSet<int> setA = new()
        {
            1, 2, 3, 4
        };

        HashSet<int> setB = new()
        {
            3, 4, 5, 6
        };

        Console.WriteLine($"\nSet A : {string.Join(" ", setA)}");

        Console.WriteLine($"\nSet B : {string.Join(" ", setB)}");

        setA.UnionWith(setB);

        Console.Write("\n8. Union : ");

        foreach (int number in setA)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();

        // ============================================
        // 9. IntersectWith()
        // ============================================

        HashSet<int> setC = new()
        {
            1, 2, 3, 4
        };

        HashSet<int> setD = new()
        {
            3, 4, 5, 6
        };

        setC.IntersectWith(setD);

        Console.Write("\n9. Intersection : ");

        foreach (int number in setC)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();

        // ============================================
        // 10. ExceptWith()
        // ============================================

        HashSet<int> setE = new()
        {
            1, 2, 3, 4
        };

        HashSet<int> setF = new()
        {
            3, 4
        };

        setE.ExceptWith(setF);

        Console.Write("\n10. Except : ");

        foreach (int number in setE)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();

        // ============================================
        // 11. SymmetricExceptWith()
        // ============================================

        HashSet<int> setG = new()
        {
            1, 2, 3
        };

        HashSet<int> setH = new()
        {
            3, 4, 5
        };

        setG.SymmetricExceptWith(setH);

        Console.Write("\n11. Symmetric Difference : ");

        foreach (int number in setG)
        {
            Console.Write(number + " ");
        }

        Console.WriteLine();

        // ============================================
        // 12. IsSubsetOf()
        // ============================================

        HashSet<int> smallSet = new()
        {
            1, 2
        };

        HashSet<int> largeSet = new()
        {
            1, 2, 3, 4
        };

        Console.WriteLine($"\nSet Smallset : {string.Join(" ", smallSet)}");

        Console.WriteLine($"\nSet Largeset : {string.Join(" ", largeSet)}");

        Console.WriteLine($"\n12. Subset : {smallSet.IsSubsetOf(largeSet)}");

        // ============================================
        // 13. IsSupersetOf()
        // ============================================

        Console.WriteLine($"\n13. Superset : {largeSet.IsSupersetOf(smallSet)}");

        // ============================================
        // 14. Overlaps()
        // ============================================

        Console.WriteLine($"\n14. Overlaps : {smallSet.Overlaps(largeSet)}");

        // ============================================
        // 15. SetEquals()
        // ============================================

        HashSet<int> first = new()
        {
            1, 2, 3
        };

        HashSet<int> second = new()
        {
            3, 2, 1
        };

        Console.WriteLine($"\nSet first : {string.Join(" ", first)}");

        Console.WriteLine($"\nSet second : {string.Join(" ", second)}");

        Console.WriteLine($"\n15. Check SetEquals : {first.SetEquals(second)}");

        // ============================================
        // 16. TryGetValue()
        // ============================================

        HashSet<string> names = new()
        {
            "Vijay",
            "Arun"
        };

        if (names.TryGetValue("Vijay", out string? foundName))
        {
            Console.WriteLine($"\n16. Using TryGetValue : {foundName}");
        }

        HashSet<string> names2 = new(2);
        names2.Add("vijay");
        names2.Add("swathi");
        names2.Add("dheeksha");

        Console.Write($"\n17. Initially set size -> {string.Join(" ",names2)}");

    }
}