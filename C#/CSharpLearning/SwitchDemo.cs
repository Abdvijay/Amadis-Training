using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class SwitchDemo
    {
        public static void Run()
        {
            Console.WriteLine("\n1. Find days \n");
            Console.Write("Enter the day(1 to 7) : ");
            int day = Convert.ToInt32(Console.ReadLine());
            switch(day)
            {
                case 1: Console.WriteLine("Monday"); break;
                case 2: Console.WriteLine("Tuesday"); break;
                case 3: Console.WriteLine("Wednesday"); break;
                case 4: Console.WriteLine("Thursday"); break;
                case 5: Console.WriteLine("Friday"); break;
                case 6: Console.WriteLine("Saturday"); break;
                case 7: Console.WriteLine("Sunday"); break;
                default: Console.WriteLine("Please enter correct date number"); break;
            }

            Console.WriteLine("\n2. Role check \n");
            Console.Write("Enter the role : ");
            string role = Console.ReadLine().ToLower();
            switch(role)
            {
                case "admin": Console.WriteLine("Welcome Admin"); break;
                case "staff": Console.WriteLine("Welcome Staff"); break;
                case "student": Console.WriteLine("Welcome Student"); break;
                default: Console.WriteLine("Invalid role"); break;
            }

            Console.WriteLine("\n 3. Working days/ Weekend\n");
            Console.Write("Enter the day to check working or weekend day (1 to 7) : ");
            day = Convert.ToInt32(Console.ReadLine());
            switch (day)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("Weekday");
                    break;

                case 6:
                case 7:
                    Console.WriteLine("Weekend");
                    break;

                default:
                    Console.WriteLine("Invalid day");
                    break;
            }
        }
    }
}