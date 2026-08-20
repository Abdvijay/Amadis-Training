//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CSharpLearning
//{
//    public static class Calculator
//    {
//        public static void Run()
//        {
//            Console.WriteLine("\nWelcome to calculator program\n");
//            Console.Write("Enter first number: ");
//            double first = Convert.ToDouble(Console.ReadLine());

//            Console.Write("Enter operator (+, -, *, /): ");
//            char operation = Convert.ToChar(Console.ReadLine());

//            Console.Write("Enter second number: ");
//            double second = Convert.ToDouble(Console.ReadLine());

//            switch (operation)
//            {
//                case '+': Console.WriteLine($"Result = {first + second}"); break;

//                case '-': Console.WriteLine($"Result = {first - second}"); break;

//                case '*': Console.WriteLine($"Result = {first * second}");  break;

//                case '/':
//                    if (second != 0)
//                    {
//                        Console.WriteLine($"Result = {first / second}");
//                    }
//                    else
//                    {
//                        Console.WriteLine("Cannot divide by zero.");
//                    }
//                    break;

//                default: Console.WriteLine("Invalid operator.");  break;
//            }
//        }
//    }
//}