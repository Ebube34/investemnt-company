import React, { useEffect, useState } from "react";
import DashboardHeading from "./dashboard-heading";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';



const Dashboardmaincomponent = ({ user }) => { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === undefined || user === null) {
      setLoading(true);
    } else if (Object.keys(user).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [user]);

  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const navigate = useNavigate();

  return (
    <>
      <Box height="40px"></Box>
      <DashboardHeading title="ACCOUNT" subTitle="Welcome to your dashboard" />
      <Box height="40px"></Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
        }}
      >

    
       {/* ROW 1 */}
       <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-between">
        <Box>
        <IconButton>
        <AccountBalanceWalletOutlinedIcon
                sx={{ color: theme.palette.secondary[600], fontSize: "30px" }}
              />
              </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey[100], opacity: "0.5", pt: "30px" }}
          >
              Account balance
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: theme.palette.secondary[500] }}>
        {loading ? (
                  <div className="spinner-div"><ReactLoading type={"spinningBubbles"} color={"#1CEEEB"} height={20} width={20} /></div>
                  
                ) : (
                  `$${Number(user.walletBalance).toFixed(2)}`
                )}
        </Typography>
      </Box>
    </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
        <IconButton>
        <AccountBalanceWalletOutlinedIcon
                sx={{ color: theme.palette.secondary[600], fontSize: "30px" }}
              />
              </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey[100] , opacity: "0.5", pt: "30px"}}
          >
          Earnings
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: theme.palette.secondary[500],  }}>
        {loading ? (
                  <div className="spinner-div"><ReactLoading type={"spinningBubbles"} color={"#1CEEEB"} height={20} width={20} /></div>
                  
                ) : (
                  `$${Number(user.earnings).toFixed(2)}`
                )}
        </Typography>
      </Box>
    </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
        <IconButton>
        <AccountBalanceWalletOutlinedIcon
                sx={{ color: theme.palette.secondary[600], fontSize: "30px" }}
              />
              </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey[100], opacity: "0.5", pt: "30px" }}
          >
           Total capital 
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: theme.palette.secondary[500] }}>
        {loading ? (
                  <div className="spinner-div"><ReactLoading type={"spinningBubbles"} color={"#1CEEEB"} height={20} width={20} /></div>
                  
                ) : (
                  `$${Number(user.capitalInvested).toFixed(2)}`
                )}
        </Typography>
      </Box>
    </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
        <IconButton>
        <AccountBalanceWalletOutlinedIcon
                sx={{ color: theme.palette.secondary[600], fontSize: "30px" }}
              />
              </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey[100], pt: "30px", opacity: "0.5" }}
          >
           Total earnings 
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: theme.palette.secondary[500] }}>
        {loading ? (
                  <div className="spinner-div"><ReactLoading type={"spinningBubbles"} color={"#1CEEEB"} height={20} width={20} /></div>
                  
                ) : (
                  `$${Number(user.totalEarnings).toFixed(2)}`
                )}
        </Typography>
      </Box>
    </Box>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
        <IconButton onClick={() => navigate("/active-contracts")}>
        <AssignmentIndOutlinedIcon
                sx={{ color: theme.palette.secondary[600], fontSize: "30px" }}
              />
              </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: theme.palette.grey[100], pt: "30px", opacity: "0.5", cursor: "pointer"}}
            onClick={() => navigate("/active-contracts")}
          >
           Active contracts
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: theme.palette.secondary[500] }}>
        {loading ? (
                  <div className="spinner-div"><ReactLoading type={"spinningBubbles"} color={"#1CEEEB"} height={20} width={20} /></div>
                  
                ) : (
                  `${Number(user.noOfActiveContracts)}`
                )}
        </Typography>
      </Box>
    </Box>
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
              letterSpacing: "1.5px",
            }}
            fullWidth="100%"
            onClick={() => navigate("/deposit")}
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
              backgroundColor: theme.palette.secondary[600],
              backgroundImage: "none",
              letterSpacing: "2px",
              
            }}
            fullWidth="100%"
            onClick={() => navigate("/contract")}
          >
            <Typography sx={{ color: theme.palette.primary[600] }}>
              Buy A PLAN
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Dashboardmaincomponent;
