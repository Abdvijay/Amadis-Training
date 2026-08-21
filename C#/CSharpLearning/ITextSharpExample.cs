//using iTextSharp.text;
//using iTextSharp.text.pdf;

//namespace CSharpLearning
//{
//    public class ITextSharpExample
//    {
//        public static void Run()
//        {
//            string filePath = "Sample.pdf";

//            Document document = new Document();

//            PdfWriter.GetInstance(document, new FileStream(filePath, FileMode.Create));

//            document.Open();

//            document.Add(new Paragraph("Hello from iTextSharp!"));

//            document.Add(new Paragraph("This is my first PDF."));

//            document.Close();

//            Console.WriteLine($"PDF created successfully: {filePath}");
//        }
//    }
//}