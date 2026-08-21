using System.Xml.Linq;
using iTextSharp.text.pdf;
using iTextSharp.text;


namespace CSharpLearning
{
    public class XmlToPdf
    {
        public static void Run()
        {
            string xml = File.ReadAllText("Invoice.xml");

            XDocument document = XDocument.Parse(xml);

            IEnumerable<XElement> customers = document.Root.Elements("Customer");

            string filePath = "XmlCustomerReport.pdf";

            Document doc = new Document();

            PdfWriter.GetInstance(doc, new FileStream(filePath, FileMode.Create));

            doc.Open();

            Paragraph heading = new Paragraph("------------ CUSTOMER REPORT ------------");

            heading.Alignment = Element.ALIGN_CENTER;

            doc.Add(heading);

            doc.Add(new Paragraph(" "));

            PdfPTable table = new PdfPTable(6);

            table.AddCell("ID");
            table.AddCell("Name");
            table.AddCell("Email");
            table.AddCell("Phone");
            table.AddCell("City");
            table.AddCell("Active");

            foreach (XElement customer in customers)
            {
                string id = customer.Element("id").Value;
                string name = customer.Element("name").Value;
                string email = customer.Element("email").Value;
                string phone = customer.Element("phone").Value;
                string city = customer.Element("city").Value;
                string isActive = customer.Element("is_active").Value;

                table.AddCell(id);
                table.AddCell(name);
                table.AddCell(email);
                table.AddCell(phone);
                table.AddCell(city);
                table.AddCell(isActive);
            }

            doc.Add(table);

            doc.Close();

            Console.WriteLine("XML PDF created successfully!");

            Console.WriteLine($"PDF Location: {Path.GetFullPath(filePath)}");
        }
    }
}
