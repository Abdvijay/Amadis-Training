//namespace CSharpLearning;

//public class Encapsulation
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== ENCAPSULATION ==========");


//        // ==========================================
//        // 1. Basic Encapsulation
//        // ==========================================

//        BankAccount account = new BankAccount();

//        Console.WriteLine($"Initial Balance : {account.GetBalance()}");

//        account.Deposit(5000);

//        account.Withdraw(1000);

//        Console.WriteLine($"Balance : {account.GetBalance()}");


//        // ==========================================
//        // 2. Trying invalid operations
//        // ==========================================

//        Console.WriteLine();

//        account.Deposit(-500);

//        account.Withdraw(10000);

//        Console.WriteLine($"Balance after invalid operations: " + $"{account.GetBalance()}");


//        // ==========================================
//        // 3. Encapsulation using properties
//        // ==========================================

//        Console.WriteLine();

//        Employee employee = new Employee("Vijay", 35000);

//        Console.WriteLine($"Employee: {employee.Name}");

//        Console.WriteLine($"Salary: {employee.Salary}");


//        // This is not allowed because
//        // Salary has private set.

//        // employee.Salary = -5000; // ❌


//        // ==========================================
//        // 4. Updating through controlled method
//        // ==========================================

//        Console.WriteLine();

//        employee.UpdateSalary(40000);

//        Console.WriteLine($"Updated Salary: {employee.Salary}");


//        // Invalid salary

//        employee.UpdateSalary(-10000);

//        Console.WriteLine($"Salary after invalid update: " + $"{employee.Salary}");


//        // ==========================================
//        // 5. Student example
//        // ==========================================

//        Console.WriteLine();

//        Student student = new Student("Arun");

//        student.SetMarks(90);

//        Console.WriteLine($"Student: {student.Name}");

//        Console.WriteLine($"Marks: {student.Marks}");

//        // Invalid marks

//        student.SetMarks(150);

//        Console.WriteLine($"Marks after invalid update: " + $"{student.Marks}");
//    }
//}


//// ==================================================
//// BankAccount
//// ==================================================

//public class BankAccount
//{
//    // Private data
//    private double balance;

//    // Public method for controlled deposit
//    public void Deposit(double amount)
//    {
//        if (amount > 0)
//        {
//            balance += amount;

//            Console.WriteLine($"Deposited amount : {amount}");
//            Console.WriteLine($"After Deposited {amount} ->  Balance is {balance}");
//        }
//        else
//        {
//            Console.WriteLine("Deposit amount must be greater than 0.");
//        }
//    }


//    // Public method for controlled withdrawal
//    public void Withdraw(double amount)
//    {
//        if (amount <= 0)
//        {
//            Console.WriteLine("Withdrawal amount must be greater than 0.");

//            return;
//        }

//        if (amount > balance)
//        {
//            Console.WriteLine("Insufficient balance.");

//            return;
//        }

//        balance -= amount;

//        Console.WriteLine($"Withdrawn amount : {amount}");

//        Console.WriteLine($"After Withdrawl {amount} ->  Balance is {balance}");
//    }


//    // Public method for reading balance
//    public double GetBalance()
//    {
//        return balance;
//    }
//}


//// ==================================================
//// Employee
//// ==================================================

//public class Employee
//{
//    // Public read
//    // Private write

//    public string Name { get; private set; }

//    public double Salary { get; private set; }


//    // Constructor

//    public Employee(string name, double salary)
//    {
//        Name = name;

//        if (salary >= 0)
//        {
//            Salary = salary;
//        }
//        else
//        {
//            Salary = 0;
//        }
//    }


//    // Controlled salary update

//    public void UpdateSalary(double salary)
//    {
//        if (salary >= 0)
//        {
//            Salary = salary;

//            Console.WriteLine("Salary updated successfully.");
//        }
//        else
//        {
//            Console.WriteLine("Salary cannot be negative.");
//        }
//    }
//}


//// ==================================================
//// Student
//// ==================================================

//public class Student
//{
//    public string Name { get; private set; }

//    public int Marks { get; private set; }


//    public Student(string name)
//    {
//        Name = name;
//    }


//    public void SetMarks(int marks)
//    {
//        if (marks >= 0 && marks <= 100)
//        {
//            Marks = marks;

//            Console.WriteLine("Marks updated successfully.");
//        }
//        else
//        {
//            Console.WriteLine("Marks must be between 0 and 100.");
//        }
//    }
//}