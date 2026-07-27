import React, { useState } from "react";
import "../App.css";

function ConditionalRendering(){
    // const [active, setActive] = useState<boolean>(true);

    // function handleNormalIf(){
    //     setActive((prev)=>(!prev));
    // }

    // function activeComponent(){
    //     return (
    //         <>
    //             <button className="btn" onClick={handleNormalIf}>Click Me</button>
    //             <h1>Active Component</h1>
    //         </>
    //     )
    // }

    // function deactiveComponent(){
    //     return (
    //         <>
    //             <button className="btn" onClick={handleNormalIf}>Click Me</button>
    //             <h1>Deactive Component</h1>
    //         </>
    //     )
    // }

    // If Else :

    // if(active){  
    //     return activeComponent()
    // }else {
    //     return deactiveComponent()
    // }

    // Ternary Operator

    // return (
    //     <>
    //         {active ? activeComponent() : deactiveComponent()}
    //     </>
    // )

    // Logical Operator - &&

    // return (
    //     <>
    //         {active && activeComponent()}
    //         {!active && deactiveComponent()}
    //     </>
    // )

    // Logical OR ( || )

    // function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
    //     setUsername(e.target.value);
    // }

    // const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     const displayName = username.trim() || "Guest";
    //     alert(`Hello ${displayName}`);
    //     setUsername("");
    // }

    // Switch case

    // const [role, setRole] = useState("");

    // function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
    //     setRole(e.target.value);
    // }

    // const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     setRole("");
    //     switch(role.toLowerCase().trim()){
    //         case "admin": return alert(`Hello Admin`);
    //         case "staff": return alert(`Hello Staff`);
    //         case "student": return alert(`Hello Student`);
    //         default: return alert(`Hello Guest`);
    //     }
    // }

    // return (
    //     <>
    //         Enter the role(Admin/Staff/Student) : <input type="text" onChange={(e)=>handleOnChange(e)} value={role}/>
    //         <button className="btn" onClick={(e)=>handleOnClick(e)}>Click Me</button>
    //     </>
    // )

    // Store JSX in Variables

    const [loggedin, setLoggedin] = useState(false);
    let content;

    content = loggedin ? <h1>Dashboard</h1> : <h1>Login</h1>

    const handleLoggedIn = () => {
        setLoggedin(!loggedin);
    }
    return (
        <>
            {content}
            <button className="btn" onClick={handleLoggedIn}>{loggedin ? "Click to Logged Out" : "Click to Login"}</button>
        </>
    )

}

export default ConditionalRendering;