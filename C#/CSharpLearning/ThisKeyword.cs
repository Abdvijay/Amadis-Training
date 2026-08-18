//namespace CSharpLearning;

//public class ThisKeyword
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== THIS KEYWORD ==========");

//        // ==========================================
//        // 1. Access current object's field
//        // ==========================================

//        Employee employee1 = new Employee();

//        employee1.Name = "Vijay";

//        employee1.DisplayName();


//        // ==========================================
//        // 2. Resolve field/parameter conflict
//        // ==========================================

//        Employee employee2 = new Employee("Arun", 28,45000);

//        employee2.DisplayDetails();


//        // ==========================================
//        // 3. Constructor chaining
//        // ==========================================

//        Employee employee3 = new Employee();

//        employee3.DisplayDetails();


//        // ==========================================
//        // 4. Pass current object
//        // ==========================================

//        employee2.SendEmployee(thisExample());


//        // ==========================================
//        // 5. Return current object
//        // ==========================================

//        Employee returnedEmployee = employee2.GetCurrentObject();

//        returnedEmployee.DisplayName();


//        // ==========================================
//        // 6. Call current object's method
//        // ==========================================

//        employee2.Show();


//        // ==========================================
//        // 7. Method chaining
//        // ==========================================

//        Employee employee4 = new Employee();

//        employee4.SetName("Kumar").SetAge(30).DisplayDetails();

//        // Students demonstration

//        Students s1 = new Students();
//        Students s2 = new Students();

//        s1.setDetails("Vijay", 25).getDetails();
//        s2.setDetails("Swathi", 26).getDetails();
//    }


//    // Helper method
//    private static Employee thisExample()
//    {
//        return new Employee("Rahul",26,40000);
//    }

//}


//// ==================================================
//// Employee Class
//// ==================================================

//public class Employee
//{
//    public string Name;
//    public int Age;
//    public double Salary;


//    // ==================================================
//    // 1. this accessing current object
//    // ==================================================

//    public void DisplayName()
//    {
//        Console.WriteLine($"Name: {this.Name}");
//    }


//    // ==================================================
//    // 2. this resolving name conflict
//    // ==================================================

//    public Employee(string Name, int Age, double Salary)
//    {
//        this.Name = Name;
//        this.Age = Age;
//        this.Salary = Salary;
//    }


//    // ==================================================
//    // 3. Constructor chaining using this()
//    // ==================================================

//    public Employee() : this("Unknown", 0, 0)
//    {
//    }


//    // ==================================================
//    // 4. Passing current object
//    // ==================================================

//    public void SendEmployee(Employee employee)
//    {
//        Console.WriteLine($"Employee received: {employee.Name}");
//    }


//    // ==================================================
//    // 5. Returning current object
//    // ==================================================

//    public Employee GetCurrentObject()
//    {
//        return this;
//    }


//    // ==================================================
//    // 6. Calling current object's method
//    // ==================================================

//    public void Show()
//    {
//        this.DisplayName();
//    }


//    // ==================================================
//    // Method chaining
//    // ==================================================

//    public Employee SetName(string name)
//    {
//        this.Name = name;
//        return this;
//    }


//    public Employee SetAge(int age)
//    {
//        this.Age = age;
//        return this;
//    }


//    public void DisplayDetails()
//    {
//        Console.WriteLine($"Name: {this.Name}, " + $"Age: {this.Age}, " + $"Salary: {this.Salary}");
//    }
//}

//public class Students
//{
//    public string Name;
//    public int Age;

//    public Students setDetails(String name, int age)
//    {
//        this.Name = name;
//        this.Age = age;
//        return this;
//    }

//    public Students getDetails()
//    {
//        Console.WriteLine($"\nName : {this.Name}\nAge : {this.Age}");
//        return this;
//    }
//}