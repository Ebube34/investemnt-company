import React from "react";
import Cookies from "universal-cookie";
import Login from "./login";
import { useState } from "react";
import { useEffect } from "react";



const cookies = new Cookies();



function Dashboard() {
  const token = cookies.get("TOKEN");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userDetails"));

    if (items) {
      setFirstName(items.name1);
      setLastName(items.name2);
    }
  }, [])

  if(token){


    const logout = () => {
      cookies.remove("TOKEN", { path: "/" });
      window.location.href = "/";
    }
   
      return (
       <div>
        <h1>Wellcome {firstName} {lastName} to your dashboard</h1>
         <h3>Dashboard</h3>
         <button type="submit" onClick={() => logout()}>Logout</button>
         
       </div>
      )
  } else {
    return (
      <Login />
    );
  }



 
   }
   
   export default Dashboard;