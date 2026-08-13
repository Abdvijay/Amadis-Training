using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class ConditionalDemo
    {
        public static void Run()
        {
            Console.WriteLine("\n ----- Conditional Statements -----\n");

            // If statement
            Console.WriteLine("1. If statement demo \n");
            Console.Write("Enter your age to check vote eligiblity : ");
            int age = Convert.ToInt32(Console.ReadLine());
            if( age > 18)
            {
                Console.WriteLine("You are eligible to vote :)");
            }

            // If else statement
            Console.WriteLine("\n2. If else statement demo \n");
            Console.Write("Enter you mark to check pass or fail : ");
            int mark = Convert.ToInt32(Console.ReadLine());
            if( mark > 35)
            {
                Console.WriteLine("PASS");
            }
            else
            {
                Console.WriteLine("FAIL");
            }

            // If else if statement
            Console.WriteLine("\n3. If else if statement demo \n");
            Console.Write($"Mark is {mark} and ");
            if( mark > 90)
            {
                Console.WriteLine("Grade O");
            } else if( mark > 80)
            {
                Console.WriteLine("Grade A");
            } else if( mark > 60)
            {
                Console.WriteLine("Grade B");
            } else if( mark > 50)
            {
                Console.WriteLine("Grade C");
            }else
            {
                Console.WriteLine("Grade E");
            }

            // Multiple condition
            Console.WriteLine("\n4. Check multiple condition \n");
            Console.Write("Enter your attendance percentage : ");
            int attendance = Convert.ToInt32(Console.ReadLine());
            if( attendance >= 75 && attendance <= 100)
            {
                Console.WriteLine("Eligible for exam");
            } else
            {
                Console.WriteLine("Not eligible for exam");
            }

            // Nested if condition
            Console.WriteLine("\n5. Nested if statement \n");
            if( age >= 18)
            {
                Console.Write("Do you have an ID? (yes/no) : ");
                string hasId = Console.ReadLine();
                if( hasId == "yes" )
                {
                    Console.WriteLine("Entry allowed");
                } else
                {
                    Console.WriteLine("ID required");
                }
            } else
            {
                Console.WriteLine("Age requirment not met");
            }
        }
    }
}
