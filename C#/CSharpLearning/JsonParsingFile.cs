using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public class JsonParsingFile
    {
        public static void Run()
        {
            string json = File.ReadAllText("Invoice.json");

            List<Customer> customers = JsonSerializer.Deserialize<List<Customer>>(json);

            foreach (Customer customer in customers)
            {
                Console.WriteLine($"Customer ID       : {customer.id}");
                Console.WriteLine($"Customer Name     : {customer.name}");
                Console.WriteLine($"Customer Email    : {customer.email}");
                Console.WriteLine($"Customer Phone    : {customer.phone}");
                Console.WriteLine($"Customer City     : {customer.city}");
                Console.WriteLine($"Customer isActive : {customer.is_active}");
                Console.WriteLine();
            }

        }
    }

    public class Customer
    {
        public int id { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public string phone { get; set; }

        public string city { get; set; }

        public bool is_active { get; set; }
    }
}
