import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboardNavbar";
import DashboardSidebar from "../../components/dashboardSidebar";
import { CssBaseline } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useGetUserQuery } from "../../state/api";





const Layout = () => {
  const token = Cookies.get("Token");
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const secretPass = "Xkhzg478tYUAEQivas65";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
   const userId =  JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));
  const { data } =  useGetUserQuery(userId);

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
    return navigate("/login");
  };
};

export default Layout;
