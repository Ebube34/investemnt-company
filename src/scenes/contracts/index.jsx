import React, { useState } from "react";
import { Button, Box, useMediaQuery, Typography, useTheme } from "@mui/material";
import Trading from "../../components/investmentPlanComponent/trading";
import Crypto from "../../components/investmentPlanComponent/crypto";
import Foregin from "../../components/investmentPlanComponent/foregin";
import DashboardHeading from "../../components/dashboard-heading";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";


const Contracts = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [ isCryptoClicked, setIsCryptoClicked ] = useState(false);
  const [ isTradingClicked, setIsTradingClicked ] = useState(false);
  const [ isForeginExchangeClicked, setIsForeginExchangeClicked ] = useState(false);


  const handleCryptoClick = () => {
    setIsTradingClicked(false);
    setIsForeginExchangeClicked(false);
    setIsCryptoClicked(true);
  };
  const handleTradingClick = () => {
    setIsCryptoClicked(false);
    setIsForeginExchangeClicked(false);
    setIsTradingClicked(true);
  };
  const handleForeignExchangeClick = () =>  {
    setIsCryptoClicked(false);
    setIsTradingClicked(false);
    setIsForeginExchangeClicked(true)
  }

return (
  <>
  <Box height="40px"></Box>
  <ToastContainer
      position="bottom-center"
      autoClose={6000}
      hideProgressBar={true}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      style={{
        height: "300px",
            position: "fixed",
            padding: "2rem"
      }}
    />
  <DashboardHeading title="CONTRACTS" />
    <Box
      mt="20px"
      display="grid"
      gridTemplateColumns="repeat(3, minmax(0, 1fr))"
      justifyContent="space-between"
      rowGap="20px"
      columnGap="1.33%"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
      }}
    >
      <Box>
        <Button
          sx={{
            padding: "1.5em",
            borderRadius: "0px",
            backgroundColor: isCryptoClicked ? theme.palette.secondary[800]  :  theme.palette.primary[500],
            backgroundImage: "none",     
          }}
          fullWidth="100%"
          onClick={handleCryptoClick}
        >
          <Typography variant="h5" sx={{textTransform: "lowercase", color: theme.palette.secondary[100], fontWeight: "400", letterSpacing: "0.3px" }}>
             <span style={{textTransform: "uppercase"}}>C</span>ryptocurrency Investment Plans 
          </Typography>

        </Button>
      </Box>
      <Box>
        <Button
          sx={{
            padding: "1.5em",
            borderRadius: "0px",
            backgroundColor: isTradingClicked ? theme.palette.secondary[800]  :  theme.palette.primary[500],
            backgroundImage: "none",
          }}
          fullWidth="100%"
          onClick={handleTradingClick}
        >
          <Typography variant="h5" sx={{ textTransform: "lowercase", color:  theme.palette.secondary[100], fontWeight: "400", letterSpacing: "0.3px"  }}>
          <span style={{textTransform: "uppercase"}}>T</span>rade Investment Plans
          </Typography>
        </Button>
      </Box>
      <Box>
        <Button
          sx={{
            padding: "1.5em",
            borderRadius: "0px",
            backgroundColor: isForeginExchangeClicked ? theme.palette.secondary[800]  :  theme.palette.primary[500],
            backgroundImage: "none",
          }}
          fullWidth="100%"
          onClick={handleForeignExchangeClick}
        >
          <Typography variant="h5" sx={{  textTransform: "lowercase", color: theme.palette.secondary[100], fontWeight: "400", letterSpacing: "0.3px"  }}>
          <span style={{textTransform: "uppercase"}}>F</span>oreign Exchange Investment 
          </Typography>
        </Button>
      </Box>
    </Box>

{/*second section*/}
    <Box>
        {isCryptoClicked ? <Crypto  /> : ""}
        {isTradingClicked ? <Trading /> : ""}
        {isForeginExchangeClicked ? <Foregin /> : ""}
    </Box>
  </>
);
};


export default Contracts;
