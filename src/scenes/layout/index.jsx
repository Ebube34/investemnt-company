import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar";
import { CssBaseline } from "@mui/material";
import { getUserId } from "../../components/getUserId";
import { useGetUserQuery } from "../../state/api";

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const userId = getUserId();
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <CssBaseline />
      <Box display={isNotMobile ? "flex" : "block"} width="100%" height="100%">
        <DashboardSidebar
          user={data || {}}
          isNotMobile={isNotMobile}
          drawerWidth="250px"
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Box flexGrow={1}>
          <DashboardNavbar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;
