import React from "react";
import Layout from "../scenes/layout";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";




const Dashboard = () => {
  const navigate = useNavigate();
  const token = Cookies.get("Token");
  if (token) {
    return <Layout />;
  } else {
    navigate("/login");
  }
};

export default Dashboard;
