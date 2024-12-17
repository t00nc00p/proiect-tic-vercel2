import "../styles/Login.css";
import React, { useEffect, useState} from "react";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";


function LogIn() {
  useEffect(() => {water(Cookies.get("email"), Cookies.get("password"))}, [])
  const [ response, setResponse] = useState ("Loading")
  const [ username , setUsername] = useState ("")
  const [ email, setEmail] = useState ("")
  const [ password, setPassword] = useState("")

  async function water (email, password) {
    try {
      const response = await fetch("proiect-tic-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();

      setUsername(data.name || "");
      Cookies.set("email", email)
      Cookies.set("password", password)
      console.log(data.name);
    } catch (error) {}
  }
  

  return (
    <>
      <body className="BodyCard">
        <div className="LoginCard">
          <h1 className="login-title">LogIn</h1>
          <input
            onChange={(event) => {setEmail(event.target.value)}}
            className="username"
            placeholder="Email"
            type="text"
          ></input>
          <input
            onChange={(event) => {setPassword(event.target.value)}}
            className="password"
            placeholder="Password"
            type="password"
          ></input>
          <div className="submitcard">
            <button className="loginbutton" onClick={() => {water(email, password)}}>Submit</button>
          </div>
          <p>Don't have an account? Go to <Link to = "/register">Register</Link></p>
        </div>
        {username !== "" ? <h1>Hello {username}</h1> : null}
      </body>
    </>
  );
}

export default LogIn;
