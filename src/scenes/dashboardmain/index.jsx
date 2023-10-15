import React from "react";
import DashboardHeading from "../../components/dashboard-heading";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { IconButton } from "@mui/material";
import Cookies from "universal-cookie";
import Login from "../../Pages/login";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const DashboardMain = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const token = cookies.get("TOKEN");
  const navigate = useNavigate();

  if (token) {
    return (
      <>
        <Box height="40px"></Box>
        <DashboardHeading
          title="ACCOUNT"
          subTitle="Wellcome to your dashboard"
        />
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
          }}
        >
          <Box
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <FlexBetween>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  $0.00
                </Typography>
                <Typography sx={{ opacity: "0.4" }} variant="h4">
                  WALLET BALANCE
                </Typography>
              </Box>

              <IconButton sx={{ fontSize: "350px" }}>
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: theme.palette.secondary[200] }}
                  style={{ fontSize: "3rem" }}
                />
              </IconButton>
            </FlexBetween>
          </Box>
          <Box
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <FlexBetween>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  $0.00
                </Typography>
                <Typography sx={{ opacity: "0.4" }} variant="h4">
                  TOTAL EARNINGS
                </Typography>
              </Box>

              <IconButton sx={{ fontSize: "350px" }}>
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: theme.palette.secondary[200] }}
                  style={{ fontSize: "3rem" }}
                />
              </IconButton>
            </FlexBetween>
          </Box>
          <Box
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <FlexBetween>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  $0.00
                </Typography>
                <Typography sx={{ opacity: "0.4" }} variant="h4">
                  CAPITAL INVESTED
                </Typography>
              </Box>

              <IconButton sx={{ fontSize: "350px" }}>
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: theme.palette.secondary[200] }}
                  style={{ fontSize: "3rem" }}
                />
              </IconButton>
            </FlexBetween>
          </Box>
          <Box
            sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <FlexBetween>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  $0.00
                </Typography>
                <Typography
                  sx={{
                    opacity: "0.4",
                    fontFamily: ["Inter", "sans-serif"].join(","),
                  }}
                  variant="h4"
                >
                  ACTIVE CONTRACTS
                </Typography>
              </Box>

              <IconButton sx={{ fontSize: "350px" }}>
                <AssignmentIndOutlinedIcon
                  sx={{ color: theme.palette.secondary[200] }}
                  style={{ fontSize: "3rem" }}
                />
              </IconButton>
            </FlexBetween>
          </Box>
        </Box>
        {/* part two of dashboard */}
        <Box
          mt="70px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
          }}
        >
          <Box>
            <Button
              sx={{
                padding: "1.5em",
                borderRadius: "50px",
                backgroundColor: theme.palette.background.alt,
                backgroundImage: "none",
                letterSpacing: "2px",
              }}
              fullWidth="100%"
              onClick={() => navigate("/deposits")}
            >
              <Typography sx={{ color: theme.palette.primary[100] }}>
                New Deposit
              </Typography>
            </Button>
          </Box>

          <Box>
            <Button
              sx={{
                padding: "1.5em",
                borderRadius: "50px",
                backgroundColor: theme.palette.secondary[300],
                backgroundImage: "none",
                letterSpacing: "1.5px",
              }}
              fullWidth="100%"
              onClick={() => navigate("/contracts")}
            >
              <Typography sx={{ color: theme.palette.primary[400] }}>
                CREATE A PLAN
              </Typography>
            </Button>
          </Box>
        </Box>
      </>
    );
  } else {
    return <Login />;
  }
};

export default DashboardMain;
