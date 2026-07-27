import React, { useState } from "react";
import "../App.css";

function FormEvent() {
    const [value,setValue] = useState("");

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        alert(`Form Submitted Successfully => value is ${value}`);
        setValue("");
    }
    
    const handleOnInput = () => {
        console.log("Typing...");
    }

    return (
        <>
            Enter Input : <input type="text" onChange={(e)=>handleOnChange(e)} onInput={handleOnInput} value={value} />
            <span>Value : {value}</span>
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn">Submit</button>
            </form>
        </>
    );
}

export default FormEvent;
