using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSharpLearning
{
    public static class VariablesDemo
    {
        public static void Run()
        {
            Console.WriteLine("----- Variabels and Datatypes -----\n");
            int age = 25;
            string name = "Vijay";
            float weight = 62.4f;
            double height = 172.5;
            decimal salary = 35000.50m;
            char grade = 'O';
            bool isWorking = true;
            const double PI = 3.14159;
            //PI = 3.5; const variables value cannot change it throws error
            Console.WriteLine($"Name      : {name}");
            Console.WriteLine($"Age       : {age}");
            Console.WriteLine($"Height    : {height}");
            Console.WriteLine($"Weight    : {weight}");
            Console.WriteLine($"Salary    : {salary}");
            Console.WriteLine($"Grade     : {grade}");
            Console.WriteLine($"isWorking : {isWorking}");
            Console.WriteLine($"PI        : {PI}");

            float new_age = age; // Implicit conversion
            int result = (int)new_age; // Explicit conversion
            double new_result = Convert.ToDouble(result);
        }
    }
}
