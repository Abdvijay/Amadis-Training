using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class Operators
    {
        public static void Run()
        {
            int a = 100;
            int b = 25;
            bool isWorking = false;
            int number = 10;

            Console.WriteLine("\n----- Operators -----\n");
            Console.WriteLine($"Addition       of {a} + {b} = {a + b}");
            Console.WriteLine($"Subraction     of {a} - {b} = {a - b}");
            Console.WriteLine($"Multiplication of {a} * {b} = {a * b}");
            Console.WriteLine($"Division       of {a} / {b} = {a / b}");
            Console.WriteLine($"Modulus        of {a} % {b} = {a % b}\n");

            Console.WriteLine($"{a} >  {b} is     : {a > b}");
            Console.WriteLine($"{a} >= {b} is     : {a >= b}");
            Console.WriteLine($"{a} <  {b} is     : {a < b}");
            Console.WriteLine($"{a} <= {b} is     : {a <= b}");
            Console.WriteLine($"{a} == {b} is     : {a == b}");
            Console.WriteLine($"{a} != {b} is     : {a != b}\n");

            Console.WriteLine($"(a > 50) && (a < 150) is : {(a > 50) && (a < 150)}");
            Console.WriteLine($"(a > 50) || (a < 100) is : {(a > 50) || (a < 100)}");
            Console.WriteLine($"(!isWorking)          is : {(!isWorking)}\n");

            Console.WriteLine($"After += 5 Operator -> {number += 5}");
            Console.WriteLine($"After -= 5 Operator -> {number -= 5}");
            Console.WriteLine($"After *= 5 Operator -> {number *= 5}");
            Console.WriteLine($"After /= 5 Operator -> {number /= 5}");
            Console.WriteLine($"After %= 5 Operator -> {number %= 5}\n");
            
            number++;
            Console.WriteLine($"After ++   Operator -> {number}");
            number--;
            Console.WriteLine($"After --   Operator -> {number--}");

            int age = 25;
            string result = age >= 18 ? "Eligible" : "Not Eligible";
            Console.WriteLine($"\nYour age is {age} so you are {result}");

            result = number % 2 == 0 ? "Even" : "Odd";
            Console.WriteLine($"The number {number} is {result} number");

            result = number == 0 ? "Zero" : (number > 0 ? "Positive" : "Negative");
            Console.WriteLine($"The given number {number} is {result}");

            result = 10 < 15 ? "15 is largest" : "10 is largest";
            Console.WriteLine($"{result}");

            int mark = 50;
            char grade = mark > 90 ? 'O' : (mark > 80 ? 'A' : (mark > 60 ? 'B' : (mark > 50 ? 'C' : (mark > 35 ? 'E' : 'F'))));
            Console.WriteLine($"Your mark is {mark} and your grade is {grade}");
        }
    }
}