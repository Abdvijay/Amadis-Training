using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpLearning;

public class LinqConcepts
{
    public static void Run()
    {
        Console.WriteLine("========== LINQ ==========");

        List<int> numbers = new() { 10, 20, 30, 40, 50 };

        Console.WriteLine($"\n1. Original List values : {string.Join(" ", numbers)}");

        // ============================================
        // 1. Where()
        // ============================================

        var greaterThan30 = numbers.Where(n => n > 30);

        Console.WriteLine($"\n2. Using Where n > 30 : {string.Join(" ",greaterThan30)}");

        // ============================================
        // 2. Select()
        // ============================================

        var doubled = numbers.Select(n => n * 2);

        Console.WriteLine($"\n3. Using Select n * 2 : {string.Join(" ", doubled)}");

        // ============================================
        // 3. OrderByDescending()
        // ============================================

        var descending = doubled.OrderByDescending(n => n);

        Console.WriteLine($"\n4. Using OrderByDescending() : {string.Join(" ", descending)}");

        // ============================================
        // 4. OrderBy()
        // ============================================

        var ascending = descending.OrderBy(n => n);

        Console.WriteLine($"\n5. Using OrderBy() : {string.Join(" ", ascending)}");

        // ============================================
        // 5. ThenBy()
        // ============================================

        var students = new List<Student>
        {
            new Student("Vijay", 25, 80),
            new Student("Arun", 22, 90),
            new Student("Kumar", 25, 70)
        };

        var orderedStudents = students
                .OrderBy(s => s.Age)
                .ThenBy(s => s.Name);

        // ============================================
        // 6. First()
        // ============================================

        int first = numbers.First();

        Console.WriteLine($"\n6. First value : {first}");

        // ============================================
        // 7. FirstOrDefault()
        // ============================================

        int firstResult = numbers.FirstOrDefault( n => n > 100 );

        Console.WriteLine($"\n7. FirstOrDefault : {firstResult}");

        // ============================================
        // 8. Last()
        // ============================================

        int last = numbers.Last();

        Console.WriteLine($"\n8. Last value : {last}");

        // ============================================
        // 9. LastOrDefault()
        // ============================================

        int lastResult = numbers.LastOrDefault(n => n > 100);

        Console.WriteLine($"\n9. LastOrDefault : {lastResult}");

        // ============================================
        // 10. Single()
        // ============================================

        List<int> singleValue = new() { 10 };

        int single = singleValue.Single();

        Console.WriteLine($"\n10. Single : {single}");

        // ============================================
        // 11. SingleOrDefault()
        // ============================================

        int singleResult = numbers.SingleOrDefault( n => n == 30 );

        Console.WriteLine($"\n11. SingleOrDefault : {singleResult}");

        // ============================================
        // 12. Any()
        // ============================================

        bool any = numbers.Any(n => n > 40);

        Console.WriteLine($"\n12. Using Any() : {any}");

        // ============================================
        // 13. All()
        // ============================================

        bool all = numbers.All(n => n > 0);

        Console.WriteLine($"\n13. Using All() : {all}");

        // ============================================
        // 14. Contains()
        // ============================================

        bool contains = numbers.Contains(30);

        Console.WriteLine($"\n14. Contains() : {contains}");

        // ============================================
        // 15. Count()
        // ============================================

        int count = numbers.Count();

        Console.WriteLine($"\n15. Count() : {count}");

        // ============================================
        // 16. Sum()
        // ============================================

        int sum = numbers.Sum();

        Console.WriteLine($"\n16. Sum() : {sum}");

        // ============================================
        // 17. Average()
        // ============================================

        double average = numbers.Average();

        Console.WriteLine($"\n17. Average() : {average}");

        // ============================================
        // 18. Min()
        // ============================================

        int min = numbers.Min();

        Console.WriteLine($"\n18. Min() : {min}");

        // ============================================
        // 19. Max()
        // ============================================

        int max = numbers.Max();

        Console.WriteLine($"\n19. Max() : {max}");

        // ============================================
        // 20. Skip()
        // ============================================

        var skipped = numbers.Skip(4);

        Console.WriteLine($"\n20. Skip(4) : {string.Join(", ", skipped)}");

        // ============================================
        // 21. Take()
        // ============================================

        var taken = numbers.Take(3);

        Console.WriteLine($"\n21. Take(3) : {string.Join(", ", taken)}");

        // ============================================
        // 22. SkipWhile()
        // ============================================

        var skipWhile = numbers.SkipWhile(n => n < 30);

        Console.WriteLine($"\n22. SkipWhile : {string.Join(" ", skipWhile)}");

        // ============================================
        // 23. TakeWhile()
        // ============================================

        var takeWhile = numbers.TakeWhile( n => n < 40);

        Console.WriteLine($"\n22. TakeWhile : {string.Join(" ", takeWhile)}");

        // ============================================
        // 24. Distinct()
        // ============================================

        List<int> duplicates = new() { 10, 20, 20, 30, 30, 30 };

        var unique = duplicates.Distinct();

        Console.WriteLine($"\n23. Unique using Distinct : {string.Join(",", unique)}");

        // ============================================
        // 25. Reverse()
        // ============================================

        Console.WriteLine($"\n24. Before Reverse() : {string.Join(" ",numbers)}");

        numbers.Reverse();

        var reversed = numbers;

        Console.WriteLine($"\n    After  Reverse() : {string.Join(" ", reversed)}");

        // ============================================
        // 26. ToList()
        // ============================================

        List<int> numberList = numbers
                .Where(n => n > 20)
                .ToList();

        Console.WriteLine($"\n25. ToList() : {string.Join(",",numberList)}");

        // ============================================
        // 27. ToArray()
        // ============================================

        int[] numberArray =
            numbers
                .Where(n => n > 20)
                .ToArray();

        // ============================================
        // 28. ToHashSet()
        // ============================================

        HashSet<int> numberSet =
            duplicates.ToHashSet();

        // ============================================
        // 29. Select()
        // ============================================

        var names =
            students.Select(
                s => s.Name
            );

        // ============================================
        // 30. Select with calculation
        // ============================================

        var increasedMarks =
            students.Select(
                s => s.Marks + 5
            );

        // ============================================
        // 31. GroupBy()
        // ============================================

        var grouped =
            students.GroupBy(
                s => s.Age
            );

        foreach (var group in grouped)
        {
            Console.WriteLine(
                $"Age: {group.Key}"
            );

            foreach (var student in group)
            {
                Console.WriteLine(
                    student.Name
                );
            }
        }

        // ============================================
        // 32. Where + Select
        // ============================================

        var selected =
            students
                .Where(s => s.Marks >= 80)
                .Select(s => s.Name);

        foreach (string name in selected)
        {
            Console.WriteLine(name);
        }

        // ============================================
        // 33. ElementAt()
        // ============================================

        int element =
            numbers.ElementAt(2);

        Console.WriteLine(element);

        // ============================================
        // 34. ElementAtOrDefault()
        // ============================================

        int elementDefault =
            numbers.ElementAtOrDefault(100);

        Console.WriteLine(elementDefault);

        // ============================================
        // 35. Concat()
        // ============================================

        var firstList =
            new[] { 1, 2, 3 };

        var secondList =
            new[] { 4, 5, 6 };

        var combined =
            firstList.Concat(secondList);

        // ============================================
        // 36. Union()
        // ============================================

        var union =
            firstList.Union(
                new[] { 3, 4, 5 }
            );

        // ============================================
        // 37. Intersect()
        // ============================================

        var intersect =
            firstList.Intersect(
                new[] { 2, 3, 4 }
            );

        // ============================================
        // 38. Except()
        // ============================================

        var except =
            firstList.Except(
                new[] { 2 }
            );

        // ============================================
        // 39. OfType()
        // ============================================

        object[] mixed =
        {
            10,
            "Hello",
            20,
            "World",
            true
        };

        var integers =
            mixed.OfType<int>();

        // ============================================
        // 40. Cast()
        // ============================================

        object[] objectNumbers =
        {
            10,
            20,
            30
        };

        var castNumbers =
            objectNumbers.Cast<int>();

        // ============================================
        // 41. Aggregate()
        // ============================================

        int product =
            numbers.Aggregate(
                1,
                (current, next) => current * next
            );

        Console.WriteLine(product);

        // ============================================
        // 42. Chunk()
        // ============================================

        var chunks =
            numbers.Chunk(2);

        foreach (var chunk in chunks)
        {
            Console.WriteLine(
                string.Join(", ", chunk)
            );
        }

        // ============================================
        // 43. Zip()
        // ============================================

        string[] namesArray =
        {
            "Vijay",
            "Arun",
            "Kumar"
        };

        int[] marksArray =
        {
            90,
            80,
            70
        };

        var zipped =
            namesArray.Zip(
                marksArray,
                (name, mark) =>
                    $"{name} - {mark}"
            );

        foreach (string item in zipped)
        {
            Console.WriteLine(item);
        }
    }

    public class Student
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int Marks { get; set; }

        public Student(
            string name,
            int age,
            int marks)
        {
            Name = name;
            Age = age;
            Marks = marks;
        }
    }
}