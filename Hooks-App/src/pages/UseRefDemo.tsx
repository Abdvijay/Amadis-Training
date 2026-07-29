import { useRef, useState, useEffect } from "react";

function UseRefDemo() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const previousName = useRef("");
    const renderCount = useRef(0);
    const [dummy, setDummy] = useState(0);
    const [time, setTime] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const intervalRef = useRef<number | null>(null);
    const domInputRef = useRef<HTMLInputElement>(null);

    function focusInput() {
        // console.log(`Current value of input is : ${inputRef.current?.value}`);
        inputRef.current?.focus();
    }

    function focusDomInput() {
        domInputRef.current?.focus();
    }

    function changeColor() {
        if (domInputRef.current) {
            domInputRef.current.style.backgroundColor = "yellow";
        }
    }

    function disableInput() {
        if (domInputRef.current) {
            domInputRef.current.disabled = true;
            domInputRef.current.style.cursor = "not-allowed";
        }
    }

    function enableInput() {
        if (domInputRef.current) {
            domInputRef.current.disabled = false;
            domInputRef.current.style.cursor = "pointer";
        }
    }

    function getInputValue() {
        alert(domInputRef.current?.value);
    }

    // useEffect(() => {
    //     previousName.current = name;
    // },[name]);

    function Increase() {
        renderCount.current++;
        console.log(renderCount.current); // background values increase but React doesn't know value udpate or not so here forced a render happened not because of useRef did.
        setDummy(dummy + 1);
    }

    function startTimer() {
        if (intervalRef.current !== null) return;
        intervalRef.current = window.setInterval(() => {
            setTime((previousTime) => previousTime + 1);
        }, 1000);
    }

    function stopTimer() {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function resetTimer() {
        stopTimer();
        setTime(0);
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="content">
            <h2 style={{display:"flex",justifyContent:"center",color:"red",fontSize:"30px",fontWeight:"bold"}}>useRef Hook</h2><br />
            <hr /><br />
        
            <h3>Example 1 : Focus Input</h3><br />
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} ref={inputRef} placeholder="Enter your name"/><br />
            <br /><br />
            <button className="btn" onClick={focusInput}>Focus Input</button>
            <br /><hr /><br />

            <h3>Example 2 : Previous Value</h3> <br />
            <input type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} /> <br /><br />
            <h4>Current Name : {name}</h4><br />
            <h4>Previous Name : {previousName.current}</h4><br />
            <br /><hr /><br />

            <h3>Example 3 : Render Count</h3><br />
            <h4>Render Count : {renderCount.current}</h4><br />
            <button className="btn-1" onClick={Increase}>Increase</button><br />
            <br /><hr /><br />

            <h3>Example 4 : Stopwatch</h3><br />
            <h4>Time : {time}</h4><br />
            <div style={{gap:"15px",display:"flex"}}>
                <button className="btn" onClick={startTimer}>Start</button>
                <button className="btn" onClick={stopTimer}>Stop</button>
                <button className="btn" onClick={resetTimer}>Reset</button>
            </div>
            <br /><hr /><br />

            <h3>Example 5 : DOM Manipulation</h3><br />
            <input
                type="text"
                ref={domInputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Your Name"
            />
            <br /><br />

            <div style={{gap:"15px",display:"flex"}}>
                <button className="btn" onClick={focusDomInput}>Focus</button>
                <button className="btn" onClick={changeColor}>Change Color</button>
                <button className="btn" onClick={disableInput}>Disable</button>
                <button className="btn" onClick={enableInput}>Enable</button>
                <button className="btn" onClick={getInputValue}>Get Value</button>
            </div>
            <br /><br />

            <h4>Current Value : {inputValue}</h4><br />

            <hr /><br />
        </div>
    );
}

export default UseRefDemo;