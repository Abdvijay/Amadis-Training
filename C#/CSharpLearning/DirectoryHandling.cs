using System.IO;

namespace CSharpLearning
{
    public class DirectoryHandling
    {
        public static void Run()
        {
            // =========================================
            // 1. Directory Paths
            // =========================================

            string projectDirectory = Directory.GetParent(AppContext.BaseDirectory)!.Parent!.Parent!.Parent!.FullName;

            string mainDirectory = Path.Combine(projectDirectory, "DirectoryDemo");

            string inputDirectory = Path.Combine(mainDirectory, "Input");

            string outputDirectory = Path.Combine(mainDirectory, "Output");

            string backupDirectory = Path.Combine(mainDirectory, "Backup");


            // =========================================
            // 2. CreateDirectory()
            // =========================================

            //Directory.CreateDirectory(mainDirectory);

            //Directory.CreateDirectory(inputDirectory);

            //Directory.CreateDirectory(outputDirectory);

            //Directory.CreateDirectory(backupDirectory);

            //Console.WriteLine("Directories created.");


            // =========================================
            // 3. Exists()
            // =========================================

            //bool exists =Directory.Exists(inputDirectory);

            //Console.WriteLine($"Input directory exists: {exists}");


            // =========================================
            // 4. Create sample files
            // =========================================

            //File.WriteAllText(Path.Combine(inputDirectory, "File1.txt"), "This is File 1.");

            //File.WriteAllText(Path.Combine(inputDirectory, "File2.txt"), "This is File 2.");

            //File.WriteAllText(Path.Combine(inputDirectory,"File3.txt"),"This is File 3.");


            // =========================================
            // 5. GetFiles()
            // =========================================

            //string[] files = Directory.GetFiles(inputDirectory);

            //Console.WriteLine("\nFiles:");

            //foreach (string file in files)
            //{
            //    Console.WriteLine(Path.GetFileName(file));
            //}


            // =========================================
            // 6. GetDirectories()
            // =========================================

            //string[] directories = Directory.GetDirectories(mainDirectory);

            //Console.WriteLine("\nDirectories:");

            //foreach (string directory in directories)
            //{
            //    Console.WriteLine(Path.GetFileName(directory));
            //}


            // =========================================
            // 7. GetFileSystemEntries()
            // =========================================

            //string[] entries = Directory.GetFileSystemEntries(mainDirectory);

            //Console.WriteLine("\nFiles + Directories:");

            //foreach (string entry in entries)
            //{
            //    Console.WriteLine(Path.GetFileName(entry));
            //}


            // =========================================
            // 8. GetCurrentDirectory()
            // =========================================

            string currentDirectory = Directory.GetCurrentDirectory();

            Console.WriteLine($"\nCurrent Directory:");

            Console.WriteLine(currentDirectory);


            // =========================================
            // 9. Move()
            // =========================================

            //string movedDirectory = Path.Combine(mainDirectory,"MovedBackup");

            //if (Directory.Exists(backupDirectory))
            //{
            //    Directory.Move(backupDirectory,movedDirectory);

            //    Console.WriteLine("\nBackup directory moved.");
            //}


            // =========================================
            // 10. SetCurrentDirectory()
            // =========================================

            //Directory.SetCurrentDirectory("C:\\Users\\My_Sowriyam\\OneDrive\\Desktop\\Amadis\\C#\\CSharpLearning\\");

            //Console.WriteLine("\nCurrent Directory After Change:");

            //Console.WriteLine(Directory.GetCurrentDirectory());


            // =========================================
            // 11. Delete()
            // =========================================

            //string deleteDirectory = "C:\\Users\\My_Sowriyam\\OneDrive\\Desktop\\Amadis\\C#\\CSharpLearning\\";

            //Directory.Delete(deleteDirectory);

            //Console.WriteLine("DeleteMe directory deleted.");


            // =========================================
            // Final Information
            // =========================================

            //Console.WriteLine("\nDirectory demonstration completed.");

            //Console.WriteLine($"Main Directory: {mainDirectory}");
        }
    }
}