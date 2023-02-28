import axios from "axios";
import React, { useState } from "react";


function ForgotPassword() {

    const [validEmail, setValid] = useState(false);
    const [process, setProcess] = useState(false);
    const [newError, setNewError] = useState(false);
   

  
    


    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
       
          switch (name) {
            case "email":
              if (!value) {
                stateObj[name] = "Please enter Email.";
              }
              break;
       
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
       
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
       
            default:
              break;
          }
       
          return stateObj;
        });
      }


  

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcess(true);

        const userEmailInput = input.email;
        const userPasswordInput = input.password;
        const configuration = {
            method: "post",
            url: "https://fx-backend-sever.onrender.com/how/forgot-password",
            data: {
                userEmailInput,
                userPasswordInput,
            },
        };
        axios(configuration)
        .then((result) => {
            setValid(true);
            setProcess(false);
           setInput({
            email: "",
            password: "",
            confirmPassword: ""
           });
        })
        .catch((error) => {
            error = new Error();
            setProcess(false);
            setNewError(true);
        })
    }

    return (
        <>
        <div className="containerRegister">
           <form class="register" onSubmit={(e)=>handleSubmit(e)}>
           <h2>Reset Password</h2>
           <p>Please provide the email used in registration</p>
      <input className="inputElement"
       required 
       type="email" 
       name="email" 
       value={input.email} 
       placeholder="Email"
       onChange={onInputChange}
       onBlur={validateInput}
        />
        {error.email && <p className="text-danger">{error.email}</p>}

        <input className="inputElement"
       required
        type="password"
         name="password" 
         value={input.password}
         placeholder="New password" 
         onChange={onInputChange}
         onBlur={validateInput}
         />
         {error.password && <p className="text-danger">{error.password}</p>}

        <input className="inputElement"
       required
        type="password"
         name="confirmPassword" 
         value={input.confirmPassword}
         placeholder="Confirm password" 
         onChange={onInputChange}
         onBlur={validateInput}
         
         />
          {error.confirmPassword && <p className="text-danger">{error.confirmPassword}</p>}
        
       
      
          <button 
      className={process ? "test-button button--loading" : "test-button"}
      type="submit" 
      name="button" 
        
      onClick={(e)=>handleSubmit(e)}><span class="button_text">Reset password</span></button>
     
    </form>
    {validEmail ? (
          <p className="text-success">password reset successfull you can now login to your accout</p>
        ) : ""}
        {newError ? (<p className="text-danger">error while reseting your password, check your email and try again</p>) : ""}
    </div>
        </>
    );
};

export default ForgotPassword;