import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css"
import { Link } from "react-router-dom";
import axios from "axios";



function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [process, setProcess] = useState(false);
  const [newError, setNewError] = useState(false);






  const handleSubmit = (e) => {
    e.preventDefault();
    setProcess(true);

    const configuration = {
      method: "post",
      url: "https://fx-backend-sever.onrender.com/register",
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      },
    }
    axios(configuration)
    .then((result) => {
      setRegister(true);

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setPhoneNumber("");
      setProcess(false);
    })
    .catch((error) => {
      error = new Error();
      setProcess(false);
      setNewError(true);
    });
  }


  return (
    <>
      <div class="containerRegister">
    <div className="textBox">
    <h1>EbubeFX</h1>
    <p className="signpText">Signup for a new account</p>
    <p className="signuptext2">Already have an account? <Link to="/login">Signin here</Link></p>
    
    </div>


    <form class="register" onSubmit={(e)=>handleSubmit(e)}>
      <input className="inputElement" 
      type="text" 
      name="firstName" 
      value={firstName} 
      required 
      placeholder="First Name"
      onChange={(e) => setFirstName(e.target.value)}

      />
      <input className="inputElement"
       type="text" 
       name="lastName" 
       value={lastName}
       required 
       placeholder="Last Name"
       onChange={(e) => setLastName(e.target.value)}

       />
      <PhoneInput className="inputElement" 
      required 
      placeholder="Enter phone number" 
      value={phoneNumber} 
      name="phoneNumber" 
      onChange={setPhoneNumber}

      />
      <input className="inputElement" 
      required 
      type="email" 
      name="email" 
      value={email} 
      placeholder="Email" 
      onChange={(e) => setEmail(e.target.value)}
      />
      <input className="inputElement" 
      required 
      type="password" 
      name="password" 
      value={password} 
      placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)}

      />
        <button 
      className={process ? "test-button button--loading" : "test-button"}
      type="submit" 
      name="button" 
        
      onClick={(e)=>handleSubmit(e)}><span class="button_text">Sign up</span></button>
     
    </form>
    {register ? (<p className="text-success">You Are Registered Successfully, check your email for verification</p>) : ""}
    {newError ? (<p className="text-danger">you were not registered please try again</p>) : ""}
    
</div>

    </>
  );
};


// gjqunjibtkhtsgyc

export default Register;


