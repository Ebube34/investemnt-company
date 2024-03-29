import React, { useState } from "react";
import { Menu as MenuIcon, ArrowDropDownOutlined } from "@mui/icons-material";
import FlexBetween from "../components/flexBetween.jsx";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  Toolbar,
  MenuItem,
} from "@mui/material";
import Cookies from "js-cookie";
import { CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const [anchorEL, setAnchorEl] = useState(null);

  const isOpen = Boolean(anchorEL);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("Token", { path: "/" });
    window.location.href = "/";
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
          marginTop: "3rem"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FlexBetween>
            <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
              <MenuIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </FlexBetween>

          <FlexBetween style={{ paddingRight: "0", marginRight: "0" }}>
            <div onClick={() => navigate("/profile")}>
              <PersonIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <FlexBetween>
              <Menu
                anchorEl={anchorEL}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "0rem",
                  paddingRight: "-30px",
                  marginRight: "-16px",
                }}
              >
                <ArrowDropDownOutlined
                  sx={{ color: "#fff", fontSize: "30px" }}
                />
              </Button>
            </FlexBetween>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DashboardNavbar;
