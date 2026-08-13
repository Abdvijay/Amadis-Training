using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class TestPrograms
    {
        public static void Run()
        {
            // 1. Check even or odd
            Console.WriteLine("\n1. Check odd or even program \n");
            Console.Write("Enter the number to be check odd or even : ");
            int number = Convert.ToInt32(Console.ReadLine());

            if (number % 2 == 0)
            {
                Console.WriteLine($"The number {number} is even");
            }
            else
            {
                Console.WriteLine($"The number {number} is odd");
            }

            // 2. Check positive, negative or zero
            Console.WriteLine("\n2. Check Positive, Negative or Zero : \n");
            Console.Write("Enter the number to check positive,negative or zero : ");
            number = Convert.ToInt32(Console.ReadLine());

            if (number == 0)
            {
                Console.WriteLine("You entered Zero");
            }
            else if (number > 0)
            {
                Console.WriteLine("You entered Positive");
            }
            else
            {
                Console.WriteLine("You entered Negative");
            }

            // 3. Check voting eligibility
            Console.WriteLine("\n3. Check voting eligibility\n");
            Console.Write("Enter your age to check eligibility : ");
            int age = Convert.ToInt32(Console.ReadLine());

            if (age >= 18)
            {
                Console.WriteLine("You are eligible to vote");
            }
            else
            {
                Console.WriteLine("You are not eligible to vote");
            }

            // 4. Find largest of two numbers
            Console.WriteLine("\n4. Find largest of two numbers\n");
            Console.Write("Enter a value : ");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter b value : ");
            int b = Convert.ToInt32(Console.ReadLine());

            if (a > b)
            {
                Console.WriteLine($"The number {a} is greater than {b}");
            }
            else
            {
                Console.WriteLine($"The number {b} is greater than {a}");
            }

            // 5. Find largest of three numbers
            Console.WriteLine("\n5. Find largest amoung three numbers\n");
            Console.Write("Enter a value : ");
            a = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter b value : ");
            b = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter c value : ");
            int c = Convert.ToInt32(Console.ReadLine());

            if ((a > b) && (a > c))
            {
                Console.WriteLine($"The number a {a} is largest");
            }
            else if ((b > a) && (b > c))
            {
                Console.WriteLine($"The number  b {b} is largest");
            }
            else
            {
                Console.WriteLine($"The number c {c} is largest");
            }

            // 6. Check pass/fail
            Console.WriteLine("\n6. Check pass/fail \n");
            Console.Write("Enter you mark to check pass or fail : ");
            int mark = Convert.ToInt32(Console.ReadLine());

            if (mark > 35)
            {
                Console.WriteLine("PASS");
            }
            else
            {
                Console.WriteLine("FAIL");
            }

            // 7. Calculate grade
            Console.WriteLine("\n7. Calculate grade \n");
            Console.Write("Enter your mark to calculate grade : ");
            mark = Convert.ToInt32(Console.ReadLine());
            if (mark > 90)
            {
                Console.WriteLine("Grade O");
            }
            else if (mark > 80)
            {
                Console.WriteLine("Grade A");
            }
            else if (mark > 60)
            {
                Console.WriteLine("Grade B");
            }
            else if (mark > 50)
            {
                Console.WriteLine("Grade C");
            }
            else
            {
                Console.WriteLine("Grade E");
            }

            // 8. Check whether a year is leap year
            Console.WriteLine("\n8. Check whether a year is leap year\n");
            Console.Write("Enter a year to check leap : ");
            int year = Convert.ToInt32(Console.ReadLine());
            if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
            {
                Console.WriteLine($"Enter year {year} is Leap year");
            }
            else
            {
                Console.WriteLine($"Enter year {year} is not Leap year");
            }

            // 9. Check whether a character is vowel or consonant
            Console.WriteLine("\n9. Check whether a character is vowel or consonant\n");
            Console.Write("Enter the character : ");
            char ch = Convert.ToChar(Console.ReadLine());
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' ||
            ch == 'u' || ch == 'A' || ch == 'E' ||
            ch == 'I' || ch == 'O' || ch == 'U')
            {
                Console.WriteLine($"The entered character {ch} is vowel");
            }
            else
            {
                Console.WriteLine($"The entered character {ch} is consonant");
            }

            // 10. Check whether two numbers are equal
            Console.WriteLine("\n10. Check whether two numbers are equal\n");
            Console.Write("Enter first number : ");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter second number : ");
            int num2 = Convert.ToInt32(Console.ReadLine());

            if ( num1 == num2 )
            {
                Console.WriteLine($"The given two number {num1} and {num2} are equal");
            } else
            {
                Console.WriteLine($"The given two number {num1} and {num2} are not equal");
            }

        }
    }
}