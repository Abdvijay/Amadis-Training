import { useState } from "react";
import "../App.css";

function KeyBoardEvent() {

    const [value,setValue] = useState("");

    function handleKeyDown(key:any){
        setValue(key);
    }

    const handleKeyUp = () =>{
        console.log("Key Released")
    }

    return (
        <>
            <input onKeyDown={(event)=>handleKeyDown(event.key)} onKeyUp={handleKeyUp} />
            <span>Pressed Key is : {value}</span>
        </>
    );
}

export default KeyBoardEvent;