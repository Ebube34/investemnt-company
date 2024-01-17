import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "./flexBetween";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";
import {
  ChatOutlined,
  ArrowForwardIosOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const SettingsComp = ({ data }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const handleLogout = () => {
    Cookies.remove("Token", { path: "/" });
    window.location.href = "/";
  };
  useEffect(() => {
    if (data === undefined || data === null) {
      setLoading(true);
    } else if (Object.keys(data).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
      const trimmedId = data._id.substr(0, 9);
      setUserId(trimmedId);
    }
  }, [data]);

  return (
    <>
      <div style={{ padding: "1rem" }}>
        {/* Profile */}
        <Typography variant="h3" sx={{ paddingBottom: "1rem" }}>
          Profile
        </Typography>
        <Card
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <CardContent sx={{ padding: "1rem" }}>
            <Box
              sx={{
                borderBottom: "0.5px solid #FFFFFF07",
                paddingBottom: "1rem",
              }}
            >
              <FlexBetween>
                <Typography variant="h4">User ID</Typography>

                <Typography fontSize={17}>
                  {loading ? (
                    <div className="spinner-div">
                      <ReactLoading
                        type={"spinningBubbles"}
                        color={"#1CEEEB"}
                        height={20}
                        width={20}
                      />
                    </div>
                  ) : (
                    userId + "..."
                  )}
                </Typography>
              </FlexBetween>
            </Box>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Account</Typography>

                <Typography fontSize={17} color="#008631">
                  Verified
                </Typography>
              </FlexBetween>
            </Box>

            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Account Display Currency</Typography>

                <Typography fontSize={17} color="#39A7FF">
                  US Dollar ($)
                </Typography>
              </FlexBetween>
            </Box>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Contract Currency</Typography>

                <Typography fontSize={17} color="#39A7FF">
                  US Dollar ($)
                </Typography>
              </FlexBetween>
            </Box>
          </CardContent>
        </Card>
        {/* Security */}
        <Typography sx={{ padding: "1.5rem 0" }} variant="h3">
          Security
        </Typography>

        <Card
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <CardContent>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Cloud Backup</Typography>

                <Box>
                  <Switch defaultChecked size="medium" color="secondary" />
                </Box>
              </FlexBetween>
            </Box>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4"><Link to="/reset-password">Change Password</Link></Typography>

                <IconButton>
                  <ArrowForwardIosOutlined />
                </IconButton>
              </FlexBetween>
            </Box>

            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Enable Face ID</Typography>

                <Box>
                  <Switch disabled size="medium" color="secondary" />
                </Box>
              </FlexBetween>
            </Box>

            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography variant="h4">Delete Account</Typography>

                <IconButton>
                  <ArrowForwardIosOutlined />
                </IconButton>
              </FlexBetween>
            </Box>
          </CardContent>
        </Card>

        {/* Help */}
        <Typography sx={{ padding: "1.5rem 0" }} variant="h3">
          Help
        </Typography>

        <Card
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          <CardContent>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Box display="flex">
                  <IconButton>
                    <ChatOutlined style={{ fontSize: "26px", color: "gray" }} />
                  </IconButton>
                  <Typography paddingTop="8px" paddingLeft="12px" variant="h4">
                    <Link
                      to="https://wa.me/2348132669129"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Support
                    </Link>
                  </Typography>
                </Box>

                <IconButton>
                  <ArrowForwardIosOutlined />
                </IconButton>
              </FlexBetween>
            </Box>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <FlexBetween>
                <Typography paddingLeft="12px" variant="h4">
                  Rate Us
                </Typography>

                <IconButton>
                  <ArrowForwardIosOutlined />
                </IconButton>
              </FlexBetween>
            </Box>
<div onClick={handleLogout}>
            <Box
              sx={{ borderBottom: "0.5px solid #FFFFFF07", padding: "1rem 0" }}
            >
              <Box display="flex">
                <IconButton>
                  <ExitToAppOutlined
                    style={{ color: "red", fontSize: "26px" }}
                  />
                </IconButton>
                <Typography paddingTop="8px" paddingLeft="12px" variant="h4">
                  Logout
                </Typography>
              </Box>
            </Box>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SettingsComp;
