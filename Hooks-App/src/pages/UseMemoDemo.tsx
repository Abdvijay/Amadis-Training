import { use, useMemo, useState } from "react";

function UseMemoDemo() {
    const [number, setNumber] = useState(1);
    const [name, setName] = useState("");
    const square = useMemo(()=>{
        return slowSquare(number);
    },[number]);
    // const [search, setSearch] = useState("");
    // const [userName, setUserName] = useState("");
    // const students = [
    //     "Vijay",
    //     "Vinoth",
    //     "Vignesh",
    //     "Arun",
    //     "Ajith",
    //     "Bala",
    //     "Karthik",
    //     "Dinesh",
    //     "Suresh",
    //     "Harish"
    // ];
    const [count, setCount] = useState(0);
    const user = useMemo(() => {
        console.log("User Object Created");

        return {
            name: "Vijay",
            age: 25
        };

    }, []);

    const [firstNumber, setFirstNumber] = useState(1);
    const [secondNumber, setSecondNumber] = useState(10);

    const total = useMemo(() => {
        console.log(`Calculating Total ${firstNumber} + ${secondNumber}`);
        return firstNumber + secondNumber;
    }, [firstNumber, secondNumber]);

    const [message, setMessage] = useState("");
    const [submittedMessage, setSubmittedMessage] = useState("");

    // console.log("Component Rendered", name);

    function slowSquare(num: number){
        // console.log("Calculating...",num);
        return num * num;
    }

    // const filteredStudents = useMemo(() => {
    //     console.log("Filtering Students...");

    //     return students.filter((student) =>
    //         student.toLowerCase().includes(search.toLowerCase())
    //     );
    // },[search]);

    return (
        <div className="content">
            <h2 style={{display:"flex",justifyContent:"center",color:"red",fontSize:"30px",fontWeight:"bold"}}>useMemo Hook</h2>
            <br /><hr /><br />

            <h3>Example 1 : Expensive Calculation</h3><br />
            <h4>Number : {number}</h4><br />
            <h4>Square : {square}</h4><br />
            <button className="btn" onClick={() => setNumber(number + 1)} > Increase Number</button>
            <br />
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <br /><h4>Name : {name}</h4>
            <br /><hr /><br />

            {/* <h3>Example 2 : Filter Students</h3><br />
            <input type="text" placeholder="Search Student" value={search} onChange={(e) => setSearch(e.target.value)} />
            <br /><br />
            <h4>Students</h4><br />
            <ol style={{paddingLeft:"25px"}}>
                { filteredStudents.map((student, index) => (
                <li key={index}>{student}</li>
                )) }
            </ol>
            <br />
            <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} /> <br /><br />
            <h4>Your Name : {userName}</h4>
            <br /><hr /><br /> */}

            <h3>Example 3 : Object Reference</h3><br />
            <h4>Name : {user.name}</h4><br />
            <h4>Age : {user.age}</h4><br />
            <h4>Counter : {count}</h4><br />
            <button className="btn" onClick={() =>setCount(count + 1)} > Increment Counter</button>
            <br /><hr /><br />

            <h3>Example 4 : Dependency Array</h3><br />
            <h4>First Number : {firstNumber}</h4><br />
            <button className="btn" onClick={() =>setFirstNumber(firstNumber + 1)} > Increase First</button>
            <br />
            <h4>Second Number : {secondNumber}</h4><br />
            <button className="btn" onClick={() =>setSecondNumber(secondNumber + 1)} > Increase Second</button>
            <br />
            <h4>Total : {total}</h4><br />
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message"/> <br /><br />
            <button className="btn-1" onClick={() => setSubmittedMessage(message)}>Click Me</button><br /><br />
            <h4>Message : {submittedMessage.length ? submittedMessage : "Empty"}</h4>
            <br /><hr /><br />
        </div>
    );

}

export default UseMemoDemo;