import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Login from "../../Pages/login";
import Dashboardmaincomponent from "../../components/dashboardmaincomponent";
import { useGetUserQuery } from "../../state/api";

const cookies = new Cookies();


const DashboardMain = () => {
  
  const token = cookies.get("TOKEN");
  const [userId, setUserId] = useState("");
  


  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("userDetails"));

    if (localStorageItems) {
      setUserId(localStorageItems.userId);
    } 
  }, []);

  const { data } = useGetUserQuery(userId);
  
 
 

  if (token) {
    return (
     <Dashboardmaincomponent user={ data || {}} />
    );
  } else {
    return <Login />;
  }
};

export default DashboardMain;
