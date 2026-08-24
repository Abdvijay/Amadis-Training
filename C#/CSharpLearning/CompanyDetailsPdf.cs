using System.Text.Json;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace CSharpLearning
{
    public class CompanyDetailsPdf
    {
        public static void Run()
        {
            string json = File.ReadAllText("Company.json");

            Company company = JsonSerializer.Deserialize<Company>(json);

            Document pdf = new Document(PageSize.A4, 30, 30, 30, 30);

            string filePath = "CompanyReport.pdf";

            PdfWriter.GetInstance(pdf, new FileStream(filePath, FileMode.Create));

            pdf.Open();

            /* Heading */

            Font headingFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 20);

            Paragraph heading = new Paragraph("COMPANY DETAILS", headingFont);

            heading.Alignment = Element.ALIGN_CENTER;

            pdf.Add(heading);

            pdf.Add(new Paragraph(" "));

            /* Company Information */

            pdf.Add(new Paragraph($"Company : {company.companyName}"));

            pdf.Add(new Paragraph($"City    : {company.location.city}"));

            pdf.Add(new Paragraph($"State   : {company.location.state}"));

            pdf.Add(new Paragraph($"Pincode : {company.location.pincode}"));

            pdf.Add(new Paragraph(" "));

            /* Employeed Heading */

            Font employeeHeadingFont = FontFactory.GetFont(FontFactory.HELVETICA_BOLD, 14);

            pdf.Add(new Paragraph("EMPLOYEE DETAILS", employeeHeadingFont));

            pdf.Add(new Paragraph(" "));

            /* Employee Table */

            PdfPTable table = new PdfPTable(5);

            table.WidthPercentage = 100;

            table.AddCell("ID");
            table.AddCell("Name");
            table.AddCell("Department");
            table.AddCell("Floor");
            table.AddCell("Skills");

            foreach (Employee employee in company.employees)
            {
                table.AddCell(employee.id.ToString());
                table.AddCell(employee.name);
                table.AddCell(employee.department.name);
                table.AddCell(employee.department.floor.ToString());
                string skills = string.Join(", ", employee.skills);
                table.AddCell(skills);
            }

            pdf.Add(table);

            pdf.Close();

            Console.WriteLine("Company PDF created successfully!");

            Console.WriteLine($"PDF Location: {Path.GetFullPath(filePath)}");
        }
    }

    public class Company
    {
        public string companyName { get; set; }
        public Location location { get; set; }
        public List<Employee> employees { get; set; }
    }

    public class Location
    {
        public string city { get; set; }
        public string state { get; set; }
        public int pincode { get; set; }
    }

    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public Department department { get; set; }
        public List<string> skills { get; set; }
    }

    public class Department
    {
        public string name { get; set; }
        public int floor { get; set; }
    }
}