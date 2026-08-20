//namespace CSharpLearning;

//public class Composition
//{
//    public static void Run()
//    {
//        Console.WriteLine("========== COMPOSITION ==========");


//        // ==========================================
//        // 1. Basic Composition
//        // ==========================================

//        Console.WriteLine("\n1. Basic composition");

//        Car car = new Car();

//        car.StartCar();


//        // ==========================================
//        // 2. Composition using Constructor
//        // ==========================================

//        Console.WriteLine("\n2. Composition using Constructor");

//        Engine engine = new Engine();

//        CarWithEngine carWithEngine = new CarWithEngine(engine);

//        carWithEngine.StartCar();


//        // ==========================================
//        // 3. Employee HAS-A Address
//        // ==========================================

//        Console.WriteLine("\n3. Employee HAS-A Address");

//        Address address = new Address
//            {
//                City = "Chennai",
//                State = "Tamil Nadu"
//            };

//        Employee employee = new Employee(
//                "Vijay",
//                address
//            );

//        employee.DisplayEmployee();


//        // ==========================================
//        // 4. Composition with Collection
//        // ==========================================

//        Console.WriteLine("\n4. Composition with collection");

//        Library library = new Library();

//        library.AddBook(new Book("C# Programming"));

//        library.AddBook(new Book("ASP.NET Core"));

//        library.DisplayBooks();


//        // ==========================================
//        // 5. Composition with Interface
//        // ==========================================

//        Console.WriteLine("\n5. Composition with Interface");

//        IPayment payment = new UpiPayment();

//        OrderService service = new OrderService(payment);

//        service.ProcessOrder();


//        // ==========================================
//        // 6. Change implementation
//        // ==========================================

//        Console.WriteLine("\n6. Change implementation ");

//        payment = new CardPayment();

//        service = new OrderService(payment);

//        service.ProcessOrder();
//    }
//}


//// ==================================================
//// ENGINE
//// ==================================================

//public class Engine
//{
//    public void Start()
//    {
//        Console.WriteLine("Engine started.");
//    }
//}


//// ==================================================
//// CAR
//// ==================================================

//public class Car
//{
//    private Engine engine;

//    public Car()
//    {
//        engine = new Engine();
//    }

//    public void StartCar()
//    {
//        engine.Start();

//        Console.WriteLine("Car started.");
//    }
//}


//// ==================================================
//// CAR WITH CONSTRUCTOR INJECTION
//// ==================================================

//public class CarWithEngine
//{
//    private Engine engine;

//    public CarWithEngine(Engine engine)
//    {
//        this.engine = engine;
//    }

//    public void StartCar()
//    {
//        engine.Start();

//        Console.WriteLine("Car started using injected engine.");
//    }
//}


//// ==================================================
//// ADDRESS
//// ==================================================

//public class Address
//{
//    public string City { get; set; }

//    public string State { get; set; }


//    public void DisplayAddress()
//    {
//        Console.WriteLine($"Address: {City}, {State}");
//    }
//}


//// ==================================================
//// EMPLOYEE
//// ==================================================

//public class Employee
//{
//    public string Name { get; set; }

//    private Address address;


//    public Employee(string name, Address address)
//    {
//        Name = name;

//        this.address = address;
//    }


//    public void DisplayEmployee()
//    {
//        Console.WriteLine($"Employee: {Name}");

//        address.DisplayAddress();
//    }
//}


//// ==================================================
//// BOOK
//// ==================================================

//public class Book
//{
//    public string Title { get; set; }


//    public Book(string title)
//    {
//        Title = title;
//    }
//}


//// ==================================================
//// LIBRARY
//// ==================================================

//public class Library
//{
//    private List<Book> books;


//    public Library()
//    {
//        books = new List<Book>();
//    }


//    public void AddBook(Book book)
//    {
//        books.Add(book);
//    }


//    public void DisplayBooks()
//    {
//        Console.WriteLine("Library Books:");

//        foreach (Book book in books)
//        {
//            Console.WriteLine(book.Title);
//        }
//    }
//}


//// ==================================================
//// PAYMENT INTERFACE
//// ==================================================

//public interface IPayment
//{
//    void Pay(double amount);
//}


//// ==================================================
//// UPI PAYMENT
//// ==================================================

//public class UpiPayment : IPayment
//{
//    public void Pay(double amount)
//    {
//        Console.WriteLine($"Paid ₹{amount} using UPI.");
//    }
//}


//// ==================================================
//// CARD PAYMENT
//// ==================================================

//public class CardPayment : IPayment
//{
//    public void Pay(double amount)
//    {
//        Console.WriteLine($"Paid ₹{amount} using Card.");
//    }
//}


//// ==================================================
//// ORDER SERVICE
//// ==================================================

//public class OrderService
//{
//    private IPayment payment;


//    public OrderService(IPayment payment)
//    {
//        this.payment = payment;
//    }


//    public void ProcessOrder()
//    {
//        Console.WriteLine("Processing order...");

//        payment.Pay(1000);
//    }
//}