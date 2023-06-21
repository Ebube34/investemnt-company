import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar";
import { useGetUserQuery } from "../../state/api";
import { CssBaseline } from "@mui/material";

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("userDetails"));

    if (localStorageItems) {
      setUserId(localStorageItems.userId);
    }
  }, []);

  const { data } = useGetUserQuery(userId);
  

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
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
