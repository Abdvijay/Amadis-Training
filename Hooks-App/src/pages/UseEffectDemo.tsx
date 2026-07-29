import { useEffect, useState } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [showMessage, setShowMessage] = useState(true);
    const [seconds, setSeconds] = useState(0);
    
    // useEffect(() => {
    //     console.log("Component Rendered");
    // });

    // useEffect(() => {
    //     document.title = "React Hooks";
    //     console.log("Component Rendered");
    // },[]);

    // useEffect(() => {
    //     console.log("Count Updated : ", count);
    // },[count]);

    // useEffect(() => {
    //     console.log("Current value is ", name);
    // },[name]);

    // useEffect(() => {
    //     console.log("Count : ", count);
    //     console.log("Name : ", name);
    // },[count, name]);

    // useEffect(() => {
    //     if(showMessage){
    //         console.log("Message Displayed");
    //     }

    //     return () => {
    //         console.log("Cleaning Up...");
    //     }
    // },[showMessage]);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((previousSeconds) => previousSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer Stopped");
        };
    }, []);

    return (
        <div className="content">
            <h2 style={{display:"flex",justifyContent:"center",color:"red",fontSize:"30px",fontWeight:"bold"}}>useEffect Hook</h2><br />
            <hr /><br />
            <h3>Example 1 : Basic useEffect</h3><br />
            <p>Open the browser console and check the output.</p> <br />
            <h4>Count : {count}</h4><br />
            <button className="btn-1" onClick={()=> setCount(count + 1)}>Click me</button>
            <br /><br /><hr /><br />

            <h3>Example 2 : Dependency with State</h3><br />
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br /> <br /> <hr /> <br />

            <h3>Example 3 : Cleanup Function</h3> <br />
            <button className="btn-1" onClick={() => setShowMessage(!showMessage)} > { showMessage ? "Hide Message" : "Show Message" }</button> <br />
            <br />{ showMessage && (<><h4>Welcome to React Hooks!</h4><br /></>) }
            <hr /><br />

            <h3>Example 6 : Timer with Cleanup</h3><br />
            <h4>Timer : {seconds} Seconds</h4><br />
        </div>
    );
}

export default UseEffectDemo;