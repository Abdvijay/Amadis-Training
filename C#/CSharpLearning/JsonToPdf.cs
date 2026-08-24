//using iTextSharp.text;
//using iTextSharp.text.pdf;
//using System.Text.Json;

//namespace CSharpLearning
//{
//    public class JsonToPdf
//    {
//        public static void Run()
//        {
//            string json = File.ReadAllText("Invoice.json");

//            List<Customer> customers = JsonSerializer.Deserialize<List<Customer>>(json);

//            string filePath = "CustomerDetails.pdf";

//            Document document = new Document();

//            PdfWriter.GetInstance(document, new FileStream(filePath, FileMode.Create));

//            document.Open();

//            Paragraph heading = new Paragraph("--------------  Customer Details ---------------");
            
//            heading.Alignment = Element.ALIGN_CENTER;

//            document.Add(heading);

//            document.Add(new Paragraph(" "));

//            PdfPTable table = new PdfPTable(6);

//            table.AddCell("Id");
//            table.AddCell("Name");
//            table.AddCell("Email");
//            table.AddCell("Phone");
//            table.AddCell("City");
//            table.AddCell("Active");

//            foreach(Customer customer in customers)
//            {
//                table.AddCell(customer.id.ToString());
//                table.AddCell(customer.name.ToString());
//                table.AddCell(customer.email.ToString());
//                table.AddCell(customer.phone.ToString());
//                table.AddCell(customer.city.ToString());
//                table.AddCell(customer.is_active.ToString());
//            }

//            document.Add(table);

//            document.Close();

//            Console.WriteLine($"PDF created successfully : {filePath}");

//            Console.WriteLine($"Full path : {Path.GetFullPath(filePath)}");
//        }
//    }
//}
