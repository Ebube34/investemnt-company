import React from "react";
import Login from "./login";
import Layout from "../scenes/layout";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Dashboard = () => {
  const token = cookies.get("TOKEN");

  if (token) {
    return <Layout />;
  } else {
    return <Login />;
  }
};

export default Dashboard;
