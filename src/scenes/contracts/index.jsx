import React, { useState } from "react";
import { Button, Box, useMediaQuery, Typography, useTheme } from "@mui/material";
import Trading from "../../components/investmentPlanComponent/trading";
import Crypto from "../../components/investmentPlanComponent/crypto";
import Foregin from "../../components/investmentPlanComponent/foregin";
import Structured from "../../components/investmentPlanComponent/structured"


const Contracts = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [ isCryptoClicked, setIsCryptoClicked ] = useState(false);
  const [ isTradingClicked, setIsTradingClicked ] = useState(false);
  const [ isForeginExchangeClicked, setIsForeginExchangeClicked ] = useState(false);
  const [ isStructuredInvestmentClicked, setIsStructuredInvestmentClicked ] = useState(false);
  


  function handleCryptoClick() {
    setIsTradingClicked(false);
    setIsForeginExchangeClicked(false);
    setIsStructuredInvestmentClicked(false);
    setIsCryptoClicked(true);
  };

  function handleTradingClick() {
    setIsCryptoClicked(false);
    setIsForeginExchangeClicked(false);
    setIsStructuredInvestmentClicked(false);
    setIsTradingClicked(true);
  };

  function handleForeignExchangeClick() {
    setIsCryptoClicked(false);
    setIsTradingClicked(false);
    setIsStructuredInvestmentClicked(false);
    setIsForeginExchangeClicked(true)
  }

  function handleStructuredInvestmentClick() {
    setIsCryptoClicked(false);
    setIsTradingClicked(false);
    setIsForeginExchangeClicked(false);
    setIsStructuredInvestmentClicked(true);
  }
  
  return (
    <>
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

        <Box>
          <Button
            sx={{
              padding: "1.5em",
              borderRadius: "0px",
              backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none",
              letterSpacing: "1.5px",
            }}
            fullWidth="100%"
            onClick={handleCryptoClick}
          >
            <Typography sx={{ color: theme.palette.primary[500] }}>
              Cryptocurrency Investment Plans
            </Typography>
          </Button>
        </Box>

        <Box>
          <Button
            sx={{
              padding: "1.5em",
              borderRadius: "0px",
              backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none",
              letterSpacing: "1.5px",
            }}
            fullWidth="100%"
            onClick={handleTradingClick}
          >
            <Typography sx={{ color: theme.palette.primary[500] }}>
              Trading Investment Plans
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
              padding: "1.5em",
              borderRadius: "0px",
              backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none",
              letterSpacing: "1.5px",
            }}
            fullWidth="100%"
            onClick={handleForeignExchangeClick}
          >
            <Typography sx={{ color: theme.palette.primary[500] }}>
            Foreign Exchange Investment Plans
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button
            sx={{
              padding: "1.5em",
              borderRadius: "0px",
              backgroundColor: theme.palette.secondary[300],
              backgroundImage: "none",
              letterSpacing: "1.5px",
            }}
            fullWidth="100%"
            onClick={handleStructuredInvestmentClick}
          >
            <Typography sx={{ color: theme.palette.primary[500] }}>
              Structured Investment Brokerage plans
            </Typography>
          </Button>
        </Box>
      </Box>



{/* second part of contract page */}
      <Box>
          {isCryptoClicked ? <Crypto /> : ""}
          {isTradingClicked ? <Trading /> : ""}
          {isForeginExchangeClicked ? <Foregin /> : ""}
          {isStructuredInvestmentClicked ? <Structured /> : ""}
      </Box>
    </>
  );
};

export default Contracts;
