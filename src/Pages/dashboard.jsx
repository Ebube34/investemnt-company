import React from "react";
import Cookies from "universal-cookie";
import Login from "./login";
import Layout from "../scenes/layout";

const cookies = new Cookies();

function Dashboard() {
  const token = cookies.get("TOKEN");

  if (token) {
    return (
      <>
        <Layout />
      </>
    );
  } else {
    return <Login />;
  }
}

export default Dashboard;
