//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Text.Json;
//using System.Threading.Tasks;

//namespace CSharpLearning
//{
//    public class NestedJsonParsing
//    {
//        public static void Run()
//        {
//            string json = File.ReadAllText("NestedJson.json");

//            Customer customer = JsonSerializer.Deserialize<Customer>(json);

//            Console.WriteLine("Customer Data");

//            Console.WriteLine($"\nName : {customer.Name}");

//            Console.WriteLine($"\nAddress");

//            foreach(Address address in customer.Address)
//            {
//                Console.WriteLine($"City : {address.City}");
//                Console.WriteLine($"Code : {address.Code}");
//            }

//            Console.WriteLine($"\nState : {customer.State}");
//        }
//    }

//    public class Customer
//    {
//        public string Name { get; set; }
//        public List<Address> Address { get; set; }
//        public string State { get; set; }
//    }

//    public class Address
//    {
//        public string City { get; set; }
//        public int Code { get; set; }

//    }
//}
