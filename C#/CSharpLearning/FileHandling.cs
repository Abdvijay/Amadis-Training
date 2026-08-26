//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CSharpLearning
//{
//    public class FileHandling
//    {
//        public static void Run()
//        {
//            string filePath = "sample.txt";

            /* Writing text into sample.txt file */

            //using FileStream fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write);

            //string message = "Hello Vijay, This is filestream.";

            //byte[] data = Encoding.UTF8.GetBytes(message);

            //fileStream.Write(data, 0, data.Length);

            //Console.WriteLine($"File created successfully : {Path.GetFullPath(filePath)}");

            /* Reading from file */

            //using FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);

            //byte[] data = new byte[fileStream.Length];

            //fileStream.Read(data, 0, data.Length);

            //string message = Encoding.UTF8.GetString(data);

            //Console.WriteLine($"File content : {message}");

            /* StreamReader to read its content */

            //using StreamReader reader = new StreamReader(filePath);

            //string content = reader.ReadToEnd();

            //Console.WriteLine($"File content : {content}");

            /* StreamWriter to write to the file */

            //using StreamWriter writer = new StreamWriter(filePath);

            //writer.WriteLine("Newly added line 1");

            //writer.WriteLine("Newly added line 2");

            //writer.WriteLine("File written successfylly");

//        }
//    }
//}
