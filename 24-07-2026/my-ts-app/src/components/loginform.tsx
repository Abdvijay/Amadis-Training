import React, { useState } from "react";
import "../App.css";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    username : "",
    password : ""
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    })
  };

  const handleForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(loginData.username && loginData.password){
        console.log(loginData.username,loginData.password);
        alert("Form Submitted Successfully");
    }else{
      alert("Please fill all the fields");
    }
  }

  return (
    <>
      <form className="form-container" onSubmit={handleForm}>
            <div style={{display:"flex"}}>
                <label htmlFor="username">Username : </label>
                <input name="username" type="text" value={loginData.username} onChange={handleInput} />
            </div>
            <br /> <br />
            <div style={{display:"flex"}}>
                <label htmlFor="username">Password : </label>
                <input name="password" type="password" value={loginData.password} onChange={handleInput} />
            </div>
            <br /> <br />
            <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default LoginForm;