using System.Xml.Linq;
using System;

namespace CSharpLearning
{
    public class XmlParsingFile
    {
        public static void Run()
        {
            // Read XML file
            string xml = File.ReadAllText("Invoice.xml");

            // Parse XML
            XDocument document = XDocument.Parse(xml);

            // Get all Customer elements
            IEnumerable<XElement> customers = document.Root.Elements("Customer");

            // Read each customer
            foreach (XElement customer in customers)
            {
                int id =int.Parse(customer.Element("id").Value);
                string name = customer.Element("name").Value;
                string email = customer.Element("email").Value;
                string phone = customer.Element("phone").Value;
                string city = customer.Element("city").Value;
                bool isActive =bool.Parse(customer.Element("is_active").Value);

                Console.WriteLine($"Customer ID       : {id}");
                Console.WriteLine($"Customer Name     : {name}");
                Console.WriteLine($"Customer Email    : {email}");
                Console.WriteLine($"Customer Phone    : {phone}");
                Console.WriteLine($"Customer City     : {city}");
                Console.WriteLine($"Customer isActive : {isActive}");
                Console.WriteLine();
            }
        }
    }
}