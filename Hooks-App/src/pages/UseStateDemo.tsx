import { useState } from "react";
import "../styles/App.css";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [student, setStudent] = useState({
    name : "",
    age : "",
    course : ""
  });
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    age: "",
    course: ""
  });
  const [studentName, setStudentName] = useState("");
  const [studentArray, setStudentArray] = useState<string[]>([]);
  const [functionalCount, setFunctionalCount] = useState(0);

  function increment() {
    const value = count + 1;
    setCount(value); // we want to set state to render in UI
    console.log(`current value is ${value}`);
  }

  function decrement() {
    setCount(count - 1);
  }

  function showStudentDetails(){
    setStudentDetails(student);
  }

  const addStudent = () => {
    if(studentName.trim() === ""){
      alert("Please fill student name :)");
      return;
    }
    setStudentArray([...studentArray, studentName]);
    setStudentName("");
  }

  function incrementFunctional() {
    setFunctionalCount((previousCount) => previousCount + 1);
    setFunctionalCount((previousCount) => previousCount + 1);
    setFunctionalCount((previousCount) => previousCount + 1);
  }

  function decrementFunctional() {
      setFunctionalCount((previousCount) => previousCount - 1);
  }

  function resetFunctional() {
      setFunctionalCount(0);
  }

  return (
    <div className="content">
        <h2 style={{display:"flex",justifyContent:"center",color:"red",fontSize:"30px",fontWeight:"bold"}}>useState Hook</h2>
        <br /><hr /><br />

        <h3>Example 1 : Number Input</h3> <br />
        <h3>Current Count : {count}</h3>
        <br />
        <div style={{gap:"15px",display:"flex"}}>
          <button className="btn" onClick={increment}>Increment</button>
          <button className="btn" onClick={decrement}>Decrement</button>
          <button className="btn" onClick={()=>setCount(0)}>Reset</button>
        </div>
        <br /><hr /><br />

        <h3>Example 2 : Text Input</h3><br />
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        /><br />
        <br /><p>Your Name : {name}</p>
        <br /><hr /><br />

        <h3>Example 3 : Boolean Toggle</h3><br />
        <button className="btn-1" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide Message" : "Show Message"}
        </button>
        <br /><br />{
            isVisible && (
              <>
                <p>
                    Welcome to React Hooks!
                </p>
                <br />
              </>
            )
        }
      <hr /><br />

      <h3>Example 4 : Object State</h3><br />
      <input type="text" placeholder="Enter Name" value={student.name} onChange={(e)=> setStudent({ ...student, name: e.target.value })} /> <br />
      <br /><br />
      <input type="text" placeholder="Enter Age" value={student.age} onChange={(e)=> setStudent({ ...student, age: e.target.value }) } /> <br />
      <br /><br />
      <input type="text" placeholder="Enter Course" value={student.course} onChange={(e) => setStudent({ ...student, course: e.target.value }) } /> <br />
      <br />
      <button className="btn-1" onClick={showStudentDetails}>Show Details</button> <br /> <br />
      <h4>Student Details</h4><br />
      <p>Name : {studentDetails.name}</p><br />
      <p>Age : {studentDetails.age}</p><br />
      <p>Course : {studentDetails.course}</p>
      <br /><hr /><br />

      <h3>Example 5 : Array State</h3>
      <br /><input
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
      /><br />
      <br /><button className="btn-1" onClick={addStudent}>Add Student</button><br />
      <br /><h4>Student List</h4>
      <br /><ul>
          {
              studentArray.map((student, index) => (
                  <>
                    <li key={index}>{student}</li> <br />
                  </>
              ))
          }
      </ul>
      <br /><hr /><br />

      <h3>Example 6 : Functional Update</h3> <br />
      <h4>Current Count : {functionalCount}</h4> <br />
      <div style={{gap:"15px",display:"flex"}}>
          <button className="btn" onClick={incrementFunctional}>Increment</button>
          <button className="btn" onClick={decrementFunctional}>Decrement</button>
          <button className="btn" onClick={resetFunctional}>Reset</button>
      </div>
      
    </div>
  );
}

export default UseStateDemo;