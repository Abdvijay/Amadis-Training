using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class UserInputDemo
    {
        public static void Run()
        {
            Console.WriteLine("\n----- UserInput -----\n");

            Console.Write("Enter your name: ");
            string name = Console.ReadLine();
            Console.Write("Enter your age : ");
            int age = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter your salary : ");
            double salary = Convert.ToDouble(Console.ReadLine());
            Console.Write("Enter your grade : ");
            char grade = Convert.ToChar(Console.ReadLine());
            Console.Write("Are you still working : ");
            bool status = Convert.ToBoolean(Console.ReadLine());

            Console.WriteLine("\nUser Details");
            Console.WriteLine($"Your Name   is {name}");
            Console.WriteLine($"Your Age    is {age}");
            Console.WriteLine($"Your Salary is {salary}");
            Console.WriteLine($"Your Grade  is {grade}");
            Console.WriteLine($"Working status {status}");

            Console.WriteLine("\nString Interpolation");
            Console.WriteLine($"My name is {name}" +
                $" and I am {age} years old." +
                $" I got {salary} from amadis company." +
                $" I secured is {grade} grade." +
                $" Working status is {status}");

            Console.WriteLine(status.GetType());
        }
    }
}
