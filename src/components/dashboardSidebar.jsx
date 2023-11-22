import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../components/flexBetween.jsx";
import { logo, userProfile } from "../assets";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import ReactLoading from "react-loading";
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "Contract",
    icon: <InventoryOutlinedIcon />,
  },
  {
    text: "Market",
    icon: <PublicOutlined />,
  },
  {
    text: "Activity",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Deposit",
    icon: <AddCardOutlinedIcon />,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "Withdraw",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Loan Request",
    icon: <TodayOutlined />,
  },
  {
    text: "Calender",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "FAQs",
    icon: <PieChartOutlined />,
  },
  {
    text: "",
    icon: null,
  },
  {
    text: "KYC",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Geography",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Info",
    icon: <TrendingUpOutlined />,
  },
];

const DashboardSidebar = ({
  user,
  drawerWidth,
  isSideBarOpen,
  setIsSideBarOpen,
  isNotMobible,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const [userFirstName, setUserFirstName] = useState("");

  const [Loading, setIsLoading] = useState(true);

  const handleClickaway = () => {
    setIsSideBarOpen(false);
  };

  useEffect(() => {
    setActive(pathname.substring(1));

    if (user === null || user === undefined) {
      setIsLoading(true);
    } else if (Object.keys(user).length === 0) {
      setIsLoading(true);
    } else {
      const name = user.firstName;
      setIsLoading(false);
      const newName = name[0].toUpperCase() + name.slice(1);
      setUserFirstName(newName);
    }
  }, [pathname, user]);
  return (
    <>
      <Box component="nav">
        {isSideBarOpen && (
          <ClickAwayListener onClickAway={handleClickaway}>
            <Drawer
              open={isSideBarOpen}
              onClose={() => setIsSideBarOpen(false)}
              variant="persistent"
              anchor="left"
              sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                  color: theme.palette.secondary[100],
                  backgroundColor: theme.palette.primary[700],
                  boxSizing: "border-box",
                  borderWidth: isNotMobible ? 0 : "2px",
                  width: drawerWidth,
                },
              }}
            >
              <Box width="100%">
                <Box m="1.5rem 2rem 2rem 1rem">
                  <FlexBetween color={theme.palette.secondary.main}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                      <img
                        src={logo}
                        alt="Quivas"
                        className="w-[124px] h-[50px]"
                      />
                    </Box>

                    <IconButton
                      onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                    >
                      <ChevronLeft sx={{ ml: "auto" }} />
                    </IconButton>
                  </FlexBetween>
                  <Box mt="30px" mb="25px">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img
                        alt="profile-user"
                        width="90px"
                        height="90px"
                        src={userProfile}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="h2"
                        color={theme.palette.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                      >
                        {Loading ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            className="spinner-div"
                          >
                            <ReactLoading
                              type={"spinningBubbles"}
                              color={"#1CEEEB"}
                              height={20}
                              width={20}
                            />
                          </div>
                        ) : (
                          userFirstName
                        )}
                      </Typography>
                      <Typography
                        variant="h5"
                        color={theme.palette.secondary[500]}
                      ></Typography>
                    </Box>
                  </Box>
                </Box>
                <List>
                  {navItems.map(({ text, icon }) => {
                    if (!icon) {
                      return (
                        <Typography key={text} sx={{ m: "2.5rem 0 1rem 3rem" }}>
                          {text}
                        </Typography>
                      );
                    }

                    const lcText = text.toLowerCase();
                    return (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            navigate(`/${lcText}`);
                            setActive(lcText);
                          }}
                          sx={{
                            backgroundColor:
                              active === lcText
                                ? theme.palette.secondary[300]
                                : "transparent",
                            color:
                              active === lcText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[100],
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              ml: "2rem",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[200],
                            }}
                          >
                            {icon}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          {active === lcText && (
                            <ChevronRightOutlined sx={{ ml: "auto" }} />
                          )}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </ClickAwayListener>
        )}
      </Box>
    </>
  );
};

export default DashboardSidebar;
