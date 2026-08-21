//using System.Xml.Linq;

//namespace CSharpLearning;

//public class XmlParsing
//{
//    public static void Run()
//    {
//        string xml = """
//            <Student>
//                <Name>Vijay</Name>
//                <Age>25</Age>
//                <Course>MCA</Course>
//            </Student>
//         """;

//        XDocument document = XDocument.Parse(xml);

//        string name = document.Root.Element("Name").Value;

//        string age = document.Root.Element("Age").Value;

//        string course = document.Root.Element("Course").Value;

//        Console.WriteLine($"Name: {name}");

//        Console.WriteLine($"Age: {age}");

//        Console.WriteLine($"Course: {course}");

//        Console.WriteLine($"Root: {document.Root}");
//    }
//}