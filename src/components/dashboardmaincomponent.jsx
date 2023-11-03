import React from 'react';
import DashboardHeading from './dashboard-heading';
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import FlexBetween from './flexBetween';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Dashboardmaincomponent = ({ user }) => {
    const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();
    // const [ arrayOfUser ] = user.activeContracts;
    // const noOfActiveContracts = arrayOfUser.length;
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
                  sx={{ color: theme.palette.secondary[200], fontFamily: "Mohave, sans-serif"}}
                >
                  ${Number(user.walletBalance).toFixed(2)}
                </Typography>
                <Typography sx={{ opacity: "0.5",
                    fontFamily: "Noto Serif, serif"}} variant="h5">
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
                  sx={{ color: theme.palette.secondary[200], fontFamily: "Mohave, sans-serif" }}
                >
                 ${Number(user.earnings).toFixed(2)}
                </Typography>
                <Typography sx={{ opacity: "0.5",
                    fontFamily: "Noto Serif, serif" }} variant="h5">
                  EARNINGS
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
                  sx={{ color: theme.palette.secondary[200], fontFamily: "Mohave, sans-serif" }}
                >
                  ${Number(user.capitalInvested).toFixed(2)}
                </Typography>
                <Typography sx={{ opacity: "0.5",
                    fontFamily: "Noto Serif, serif" }} variant="h5">
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
                  sx={{ color: theme.palette.secondary[200], fontFamily: "Mohave, sans-serif" }}
                >
                  ${Number(user.totalEarnings).toFixed(2)}
                </Typography>
                <Typography sx={{ opacity: "0.5",
                    fontFamily: "Noto Serif, serif" }} variant="h5">
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
                  sx={{ color: theme.palette.secondary[200], fontFamily: "Mohave, sans-serif" }}
                >
                  {user.noOfActiveContracts}
                </Typography>
                <Typography
                  sx={{
                    opacity: "0.5",
                    fontFamily: "Noto Serif, serif"
                  }}
                  variant="h5"
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
  )
}

export default Dashboardmaincomponent;