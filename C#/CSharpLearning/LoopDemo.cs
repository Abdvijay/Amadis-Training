using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class LoopDemo
    {
        public static void Run()
        {
            Console.WriteLine("\n1. For loop \n");
            for(int i = 1; i <= 5; i++)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine("\n2. While loop \n");
            int x = 5;
            while(x >= 1)
            {
                Console.WriteLine(x);
                x--;
            }

            Console.WriteLine("\n3. Do while loop \n");
            int p = 1;
            do
            {
                Console.WriteLine(p);
                p++;
            } while(p <= 5);

            Console.WriteLine("\n4. Break \n");
            int a = 1;
            while(a <= 5)
            {
                if (a == 3) break;
                Console.WriteLine(a);
                a++;
            }

            Console.WriteLine("\n5. Continue \n");
            int e = 1;
            while (e <= 5)
            {
                if (e == 3)
                {
                    e++;
                    continue;
                }
                Console.WriteLine(e);
                e++;
            }

            Console.WriteLine("\n6. Nested loops\n");
            for(int j = 1; j <= 5; j++)
            {
                for(int k = 1; k <= 2; k++)
                {
                    Console.WriteLine((j, k));
                }
            }

            Console.WriteLine("\n7. Pattern programs\n");
            for(int j = 1;j <= 5; j++)
            {
                for(int k = 1; k <= j; k++)
                {
                    Console.Write("* ");
                }
                Console.WriteLine();
            }

            Console.WriteLine("\n8. Factorial program\n");
            Console.Write("Enter the number to find factorial : ");
            int num = Convert.ToInt32(Console.ReadLine());
            int fact = 1;
            for( int i = 1; i <= num; i++)
            {
                fact *= i;
            }
            Console.WriteLine($"The factorial of {num} is {fact}");

            Console.WriteLine("\n9. Multiplication table\n");
            Console.Write("Enter the number to display multiplication table : ");
            int number = Convert.ToInt32(Console.ReadLine());
            for( int i = 1; i <= 10; i++)
            {
                Console.WriteLine($"{i} * {number} = {i * number}");
            }

            Console.WriteLine("\n10. Sum problem\n");
            Console.WriteLine("Enter the 5 numbers only : ");
            int count = 1;
            int total = 0;
            while (true)
            {
                if( count > 5)
                {
                    break;
                }
                total += Convert.ToInt32(Console.ReadLine());
                count++;
            }
            Console.WriteLine($"Total is {total}");
        }
    }
}