//using System.Text.Json;

//namespace CSharpLearning;

//public class JsonParsing
//{
//    public static void Run()
//    {
//        string json = """
//        {
//            "Name": "Vijay",
//            "Age": 25
//        }
//        """;

//        Student student = JsonSerializer.Deserialize<Student>(json);

//        Console.WriteLine($"Name: {student.Name}");

//        Console.WriteLine($"Age: {student.Age}");
//    }
//}

//public class Student
//{
//    public string Name { get; set; }

//    public int Age { get; set; }
//}