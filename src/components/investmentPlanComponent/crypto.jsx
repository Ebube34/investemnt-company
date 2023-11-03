import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import BasicPlan from "./basicPlan";
import StandardPlan from "./standardPlan";
import SpecialPlan from "./specialPlan";

const Crypto = ({ userId, userData  }) => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [isBasicPlanClicked, setBasicPlanClick] = useState(false);
  const [basicPlanContent, setBasicPlanContent] = useState("");
  const [isStandardPlanClicked, setIsStandardPlanClick] = useState(false);
  const [standardPlanContent, setStandardPlanContent] = useState("");
  const [isSpecialPlanClicked, setSpecialPlanClicked] = useState(false);
  const [specialPlanContent, setSpecialPlanContent] = useState("");
  const [specialPlanPercentage, setSpecialPlanPercentage] = useState("");
  const [standardPlanPercentage, setStandardPlanPercentage] = useState("");
  const [basicPlanPercentage, setBasicPlanPercentage] = useState("");
  const [minnimumAmount, setMinimumAmount] = useState("");
  const [basicPlanPercentageValue, setBasicPlanPercentageValue] = useState(Number);
  const [standardPlanPercentageValue, setStandardPlanPercentageValue] = useState(Number);
  const [specialPlanPercentageValue, setSpecialPlanPercentageValue] = useState(Number);
  


  const cryptoPlan = "Cryptocurrency investment";
  const basicPlanMinimumAmount = 200;
  const standardPlanMinimumAmount = 1000;
  const specialPlanMinimumAmount = 5000;

  function handleBasicPlan() {
    setIsStandardPlanClick(false);
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setStandardPlanContent("");
    setSpecialPlanPercentage("");
    setStandardPlanPercentage("");
    setBasicPlanClick(true);
    setBasicPlanContent("Basic Plan");
    setBasicPlanPercentage("10% increase per month");
    setMinimumAmount("Minimum starting capital $200");
    setBasicPlanPercentageValue(10);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(null);
  }
  

  function handleSpecialPlan() {
    setIsStandardPlanClick(false);
    setStandardPlanContent("");
    setBasicPlanClick(false);
    setBasicPlanContent("");
    setStandardPlanPercentage("");
    setBasicPlanPercentage("");
    setSpecialPlanClicked(true);
    setSpecialPlanContent("Special Plan");
    setSpecialPlanPercentage("20% increase per month");
    setMinimumAmount("Minimum starting capital $5000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(20);
    setStandardPlanPercentageValue(null);
  }

  function handleStandardPlan() {
    setBasicPlanClick(false);
    setBasicPlanContent("");
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setBasicPlanPercentage("");
    setSpecialPlanPercentage("");
    setIsStandardPlanClick(true);
    setStandardPlanContent("Standard Plan");
    setStandardPlanPercentage("15% increase per month");
    setMinimumAmount("Minimum starting capital $1000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(15);
  }
  return (
    <>
      
      <div style={{ padding: "40px 0 20px 10px", fontSize: "1rem", lineHeight: "1.8", fontFamily: "Montserrat, sans-serif", opacity: "0.7", letterSpacing: "0.02rem"}} >Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. A peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world. Here in Quivas not only do we accept cryptocurrency as a means of payment we are also in the market. We trade varieties of crypto. Bitcoin, Ethereum and many more. We have our eyes on various ICO listed tokens with daily returns for our investors. Also behind many of the most popular currencies, is an algorithm called prove of work. Under prove of work miners around the world compete against each other to find the encrypted solution on the blockchain, we are also in the minning pool, computing and validating transactions, providing solutions to various blockchain to earn rewards of cryptocurrency. We also provide staking benefits for your capital. Staking offers crypto holders a way of putting their digital assets to work and earn passive income without needing to sell them. We as major crypto holders have various staking options with exchanges. Aim of providing our investors a risk free staking rewards. We optimize the crypto market providing you the best returns for your capital.</div>
      <Box >
        <Box>
          <Typography fontFamily="Montserrat, sans-serif" sx={{ p: "30px 0 0 10px", opacity: "0.7", fontSize: "1rem" }}>
            Select preferred Cryptocurrency investment plan
          </Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap=""
            columnGap="1.33%"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
            }}
          >
            <Box>
              <Button
                onClick={handleBasicPlan}
                fullWidth
                sx={{p: "10px 0", m: "10px 0"}}
              >
                <Typography fontFamily="Noto Serif, serif" sx={{ fontWeight: "600", opacity: "0.7", color: theme.palette.secondary[100]}}>
                  Basic Plan
                </Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleStandardPlan}
                fullWidth
                sx={{p: "10px 0", m: "10px 0"}}
              >
                <Typography fontFamily="Noto Serif, serif" sx={{ fontWeight: "600", opacity: "0.7", color: theme.palette.secondary[100]}}>Standard Plan</Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleSpecialPlan}
                fullWidth
                sx={{p: "10px 0", m: "10px 0"}}
              >
                <Typography fontFamily="Noto Serif, serif" sx={{ fontWeight: "600", opacity: "0.7", color: theme.palette.secondary[100]}}>Special Plan</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        {isBasicPlanClicked ? (
          <BasicPlan
            investmentPlanText="Basic plan offers you +10% of your starting capital per month. with minumum starting capital at 200 USD."
           investmentType={cryptoPlan}
            investmentPlan={basicPlanContent}
            percentageProfitText={basicPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={basicPlanPercentageValue}
            minmumAmountValue={basicPlanMinimumAmount}
            userId={userId}
            userData={userData}
          />
        ) : (
          ""
        )}
        {/* {isStandardPlanClicked ? (
          <StandardPlan
            standardPlanText="Our standard plan offers you with +15% of your starting capital per month. with minumum starting capital at 1000 USD."
            standardPlanInputText={cryptoPlan}
            standardPlanInputText2={standardPlanContent}
            standardPlanInputText3={standardPlanPercentage}
            standardPlanInputText4={minnimumAmount}
            percentageValue={standardPlanPercentageValue}
            minmumAmountValue={standardPlanMinimumAmount}
          />
        ) : (
          ""
        )}
        {isSpecialPlanClicked ? (
          <SpecialPlan
            specialPlanText="Our special plan offers you with +20% of your starting capital per month. with minumum starting capital at 5000 USD."
            specialPlanInputText={cryptoPlan}
            specialPlanInputText2={specialPlanContent}
            specialPlanInputText3={specialPlanPercentage}
            specialPlanInputText4={minnimumAmount}
            percentageValue={specialPlanPercentageValue}
            minmumAmountValue={specialPlanMinimumAmount}
          />
        ) : (
          ""
        )} */}
      </Box>
    </>
  );
};

export default Crypto;
