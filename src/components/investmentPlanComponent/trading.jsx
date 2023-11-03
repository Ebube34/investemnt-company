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


const Trading = () => {
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

  const tradingPlan = "Trading Investment";
  const basicPlanMinimumAmount = 100;
  const standardPlanMinimumAmount = 700;
  const specialPlanMinimumAmount = 3000;

  function handleBasicPlan() {
    setIsStandardPlanClick(false);
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setStandardPlanContent("");
    setSpecialPlanPercentage("");
    setStandardPlanPercentage("");
    setBasicPlanClick(true);
    setBasicPlanContent("Basic Plan");
    setBasicPlanPercentage("8% increase per month");
    setMinimumAmount("Minimum starting capital $100");
    setBasicPlanPercentageValue(8);
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
    setSpecialPlanPercentage("18% increase per month");
    setMinimumAmount("Minimum starting capital $3000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(18);
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
    setStandardPlanPercentage("13% increase per month");
    setMinimumAmount("Minimum starting capital $700");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(13);
  }
  return (
    <>
      
      <div style={{ padding: "20px"}}> <Typography fontSize="15px" lineHeight="1.7">
      By trading investment we mean creating a platform where our investors can invest on our abilty to stocks trading. Quivas trade variety of stocks AAPL, TSLA, AMZN, WMT and many more. The stock market offers different financial instruments, such as shares, bonds, mutual funds, and derivatives. This provides us with a wide choice of products in which to invest and trade. In addition to providing investment choices, this flexibility is beneficial in mitigating the risks inherent to stock investing by enabling diversification of investment portfolios  making greater returns in comparatively shorter time periods. And with our expertise and group of traders we have created a short-term, low risk high return strategy to maximize our presence in the stock market providing our investors a percentage return for their commitment and trust.
      </Typography> </div>

      <Box>
        <Box>
          <Typography style={{ padding: "20px" }}>
            Select a preferred Trading Investment plan{" "}
          </Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
            }}
          >
            <Box sx={{ marginLeft: "35%"}} >
              <Button
                onClick={handleBasicPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography sx={{ color: theme.palette.primary[400] }}>
                  Basic Plan
                </Typography>
              </Button>
            </Box>

            <Box sx={{ marginLeft: "35%"}} >
              <Button
                onClick={handleStandardPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography>Standard Plan</Typography>
              </Button>
            </Box>

            <Box sx={{ marginLeft: "35%"}}>
              <Button
                onClick={handleSpecialPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography>Special Plan</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        {isBasicPlanClicked ? (
          <BasicPlan
            basicPlanText="Basic plan offers you +8% of your starting capital per month. with minumum starting capital at 100 USD."
            basicPlanInputText={tradingPlan}
            basicPlanInputText2={basicPlanContent}
            basicPlanInputText3={basicPlanPercentage}
            basicPlanInputText4={minnimumAmount}
            percentageValue={basicPlanPercentageValue}
            minmumAmountValue={basicPlanMinimumAmount}
          />
        ) : (
          ""
        )}
        {isStandardPlanClicked ? (
          <StandardPlan
            standardPlanText="Our standard plan offers you +13% of your starting capital per month. with minumum starting capital at 700 USD."
            standardPlanInputText={tradingPlan}
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
            specialPlanText="Our special plan offers you +18% of your starting capital per month. with minumum starting capital at 3000 USD."
            specialPlanInputText={tradingPlan}
            specialPlanInputText2={specialPlanContent}
            specialPlanInputText3={specialPlanPercentage}
            specialPlanInputText4={minnimumAmount}
            percentageValue={specialPlanPercentageValue}
            minmumAmountValue={specialPlanMinimumAmount}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Trading;
