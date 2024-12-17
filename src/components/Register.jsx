import React, { useState } from 'react'
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate()
    const [ username , setUsername] = useState ("")
    const [ email, setEmail] = useState ("")
    const [ password, setPassword] = useState("")

    function GoToLogin(){
        navigate("/login")
    }

    async function water (email, password, username) {
    try {
      const response = await fetch("proiect-tic-backend.vercel.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
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
        <div className="RegisterCard">
          <h1 className="register-title">Register</h1>
          <input
            onChange={(event) => {setUsername(event.target.value)}}
            className="username-register"
            placeholder="username"
            type="text"
          ></input>
          <input
            onChange={(event) => {setEmail(event.target.value)}}
            className="email-register"
            placeholder="email"
            type="text"
          ></input>
          <input
            onChange={(event) => {setPassword(event.target.value)}}
            className="password-register"
            placeholder="Password"
            type="password"
          ></input>
          <div className="submitcard">
            <button className="registerbutton" onClick={() => 
            {water(email, password, username)
            {GoToLogin()}
            }}>Submit</button>
          </div>
        </div>
      </body>
    </>
  )
}

export default Register
