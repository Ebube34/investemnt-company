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
import Cookies from "universal-cookie";
import { CssBaseline } from "@mui/material";

const cookies = new Cookies();

const DashboardNavbar = ({ user, isSideBarOpen, setIsSideBarOpen }) => {

  const [anchorEL, setAnchorEl] = useState(null);

  const isOpen = Boolean(anchorEL);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    cookies.remove("TOKEN", { path: "/" });
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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between",  }}>
          <FlexBetween>
            <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
              <MenuIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          </FlexBetween>

          <FlexBetween gap="1rem">
            <PersonIcon sx={{ color: "#fff", fontSize: "30px" }} />
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
