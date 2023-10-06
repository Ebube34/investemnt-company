import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar";
import { useGetUserQuery } from "../../state/api";
import { CssBaseline } from "@mui/material";
import Cookies from "universal-cookie";
import Login from "../../Pages/login";


const cookies = new Cookies();

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [userId, setUserId] = useState("");
  const token = cookies.get("TOKEN");

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("userDetails"));

    if (localStorageItems) {
      setUserId(localStorageItems.userId);
    } 
  }, []);

  const { data } = useGetUserQuery(userId);
  

  if (token) {
    return (
      <>
      <CssBaseline />
        <Box display={isNotMobile ? "flex" : "block"} width="100%" height="100%">
          <DashboardSidebar
          user={ data || {}}
            isNotMobile={isNotMobile}
            drawerWidth="250px"
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          <Box flexGrow={1}>
            <DashboardNavbar
            user={ data || {}}
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          </Box>
        </Box>
        <Outlet />
      </>
    )
  } else {
    return (
      <Login />
    )
  };
};

export default Layout;
