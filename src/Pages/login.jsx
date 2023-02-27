import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";

const cookies = new Cookies();
function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [buttonisMousedOver, setButtonMouseOver] = useState(false);
  const [process, setProcess] = useState(false);
  const [newError, setNewError] = useState(false);

  function handleButtonMouseOver(){
    setButtonMouseOver(true);
}

function handleButtonMouseOut(){
    setButtonMouseOver(false);
}



  const handleSubmit = (e) => {
    e.preventDefault();
    setProcess(true);

    const configurations = {
        method: "post",
        url: "https://fx-backend-sever.onrender.com/login",
        data: {
            email,
            password,
        },
    };
    axios(configurations)
    .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
            path: "/",
        });
        localStorage.setItem("userDetails", JSON.stringify(result.data));
        setEmail("");
        setPassword("");
        setProcess(false);
        window.location.href = "/dashboard";
    })
    .catch((error) => {
      error = new Error();
        setProcess(false);
        setNewError(true);
    })
  }


  return (
    <>
      <div class="containerRegister">
    <div className="textBox">
    <h1>EbubeFX</h1>
    <p className="signpText">Login your account</p>
    <p className="signuptext2">Dont have an account? <Link to="/register">Signup here</Link></p>
    
    </div>


    <form class="register" onSubmit={(e)=>handleSubmit(e)}>
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
      className="formButton"
      type="submit" 
      name="button" 
      style={{backgroundColor: buttonisMousedOver ? "#3CA6A6": "#012E40"}}  onMouseOver={handleButtonMouseOver} onMouseOut={handleButtonMouseOut} 
      onClick={(e)=>handleSubmit(e)}>{process ? <Spinner size='lg' spinning='spinning' /> : "Sign in"}</button>
     
    </form>
    <p><Link to="/forgot-password">Forgot pasword?</Link></p>
    {login ? (
          <p className="text-success">You Are Logged in Successfully! please wait</p>
        ) : ""}

        {newError ? (<p className="text-danger">invalid attempt to login try again</p>) : ""}
</div>

    </>
  );
}

export default Login;





   
  