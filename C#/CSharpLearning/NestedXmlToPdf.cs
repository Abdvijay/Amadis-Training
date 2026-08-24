//using System.Xml.Linq;
//using iTextSharp.text;
//using iTextSharp.text.pdf;

//namespace CSharpLearning
//{
//    public class NestedXmlToPdf
//    {
//        public static void Run()
//        {
//            // =====================================
//            // 1. Read XML
//            // =====================================

//            string xml = File.ReadAllText("NestedXml.xml");


//            // =====================================
//            // 2. Parse XML
//            // =====================================

//            XDocument document = XDocument.Parse(xml);


//            // =====================================
//            // 3. Get main data
//            // =====================================

//            string name = document.Root.Element("Name").Value;

//            string state = document.Root.Element("State").Value;


//            // =====================================
//            // 4. Get nested Address elements
//            // =====================================

//            IEnumerable<XElement> addresses = document.Root.Element("Addresses").Elements("Address");


//            // =====================================
//            // 5. Create PDF
//            // =====================================

//            string filePath = "NestedXmlReport.pdf";

//            Document pdf = new Document();

//            PdfWriter.GetInstance(
//                pdf,
//                new FileStream(
//                    filePath,
//                    FileMode.Create
//                )
//            );

//            pdf.Open();


//            // =====================================
//            // 6. Heading
//            // =====================================

//            Paragraph heading = new Paragraph("CUSTOMER DETAILS");

//            heading.Alignment = Element.ALIGN_CENTER;

//            pdf.Add(heading);

//            pdf.Add(new Paragraph(" "));


//            // =====================================
//            // 7. Main customer data
//            // =====================================

//            pdf.Add(new Paragraph($"Name: {name}"));

//            pdf.Add(new Paragraph($"State: {state}"));

//            pdf.Add(new Paragraph(" "));


//            // =====================================
//            // 8. Address heading
//            // =====================================

//            pdf.Add(new Paragraph("ADDRESS DETAILS"));

//            pdf.Add(new Paragraph(" "));


//            // =====================================
//            // 9. Create table
//            // =====================================

//            PdfPTable table = new PdfPTable(2);

//            table.AddCell("City");
//            table.AddCell("Code");

//            // =====================================
//            // 10. Add nested XML data
//            // =====================================

//            foreach (XElement address in addresses)
//            {
//                string city = address.Element("City").Value;

//                string code = address.Element("Code").Value;

//                table.AddCell(city);
//                table.AddCell(code);
//            }


//            // =====================================
//            // 11. Add table to PDF
//            // =====================================

//            pdf.Add(table);


//            // =====================================
//            // 12. Close PDF
//            // =====================================

//            pdf.Close();

//            Console.WriteLine("Nested XML PDF created successfully!");

//            Console.WriteLine($"PDF Location: {Path.GetFullPath(filePath)}");
//        }
//    }
//}