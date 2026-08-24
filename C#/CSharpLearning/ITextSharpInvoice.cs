//using iTextSharp.text;
//using iTextSharp.text.pdf;

//namespace CSharpLearning
//{
//    public class ITextSharpInvoice
//    {
//        public static void Run()
//        {
//            string filePath = "Invoice.pdf";

//            Document document = new Document();

//            PdfWriter.GetInstance(document, new FileStream(
//                    filePath,
//                    FileMode.Create
//                )
//            );

//            document.Open();


//            // =====================================
//            // Invoice Heading
//            // =====================================

//            Paragraph heading = new Paragraph("----- INVOICE -----");

//            heading.Alignment = Element.ALIGN_CENTER;

//            document.Add(heading);

//            document.Add(new Paragraph(" "));


//            // =====================================
//            // Customer Information
//            // =====================================

//            document.Add(new Paragraph("Customer Name: Vijay"));

//            document.Add(new Paragraph("Email: vijay@example.com"));

//            document.Add(new Paragraph("City: Chennai"));

//            document.Add(new Paragraph(" "));


//            // =====================================
//            // Invoice Table
//            // =====================================

//            PdfPTable table = new PdfPTable(4);

//            table.AddCell("Product");
//            table.AddCell("Quantity");
//            table.AddCell("Price");
//            table.AddCell("Total");


//            table.AddCell("Laptop");
//            table.AddCell("2");
//            table.AddCell("50000");
//            table.AddCell("100000");


//            document.Add(table);


//            // =====================================
//            // Close PDF
//            // =====================================

//            document.Close();


//            Console.WriteLine($"Invoice created successfully: {filePath}");
//        }
//    }
//}