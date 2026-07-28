import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(username === "" || password === ""){
      alert("Please fill all the fields !!!");
    } else {
        if (username === "admin" && password === "admin123") {
        localStorage.setItem("username",username);
        setErrorMessage("");

        navigate({
          to: "/Railway/Train-Search",
        });
      } else {
        setUsername("");
        setPassword("");
        setErrorMessage("Invalid Username or Password");
      }
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>

      <label>Username</label>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <label>Password</label>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Login</button>

      <p className="error-message">{errorMessage}</p>
    </form>
  );
}

export default LoginForm;