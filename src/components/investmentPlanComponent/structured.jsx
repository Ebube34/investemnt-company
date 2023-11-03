import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import BasicPlan from "./basicPlan";
import StandardPlan from "./standardPlan";
import SpecialPlan from "./specialPlan";


const Structured = () => {
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

  const structuredBrokeragePlan = "Structured Investment Brokerage";
  const basicPlanMinimumAmount = 100;
  const standardPlanMinimumAmount = 600;
  const specialPlanMinimumAmount = 2500;

  function handleBasicPlan() {
    setIsStandardPlanClick(false);
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setStandardPlanContent("");
    setSpecialPlanPercentage("");
    setStandardPlanPercentage("");
    setBasicPlanClick(true);
    setBasicPlanContent("Basic Plan");
    setBasicPlanPercentage("7% increase per month");
    setMinimumAmount("Minimum starting capital $100");
    setBasicPlanPercentageValue(7);
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
    setSpecialPlanPercentage("19% increase per month");
    setMinimumAmount("Minimum starting capital $2500");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(19);
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
    setStandardPlanPercentage("14% increase per month");
    setMinimumAmount("Minimum starting capital $600");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(14);
  }
  return (
    <>
      
      <div style={{ padding: "20px", fontSize: "15px", lineHeight: "1.7"}}>Structured investments offer access to formula-based returns tailored to a particular market outlook. They provide exposure to the performance of an underlying asset—such as equity indexes, equity securities, baskets of securities, commodities, without ownership of that asset. These securities provide a less aggressive and stable investment strategies and overall less risk with some potential for capital appreciation. We invest in structured products providing yearly returns and worse case getting our money back, providing our investors percentage gains on their capital trust. </div>
      <Box>
        <Box>
          <Typography style={{ padding: "20px" }}>
            Select a structured brokerage plan{" "}
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
            <Box sx={{ marginLeft: "35%"}}>
              <Button
                onClick={handleBasicPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography sx={{ color: theme.palette.primary[400] }}>
                  Basic Plan
                </Typography>
              </Button>
            </Box>

            <Box sx={{ marginLeft: "35%"}}>
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
            basicPlanText="Standard plan offers you +7% of your starting capital per month. with minumum starting capital at 100 USD"
            basicPlanInputText={structuredBrokeragePlan}
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
            standardPlanText="Standard plan offers you +19% of your starting capital per month. with minumum starting capital at 2500 USD"
            standardPlanInputText={structuredBrokeragePlan}
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
            specialPlanText="bunch of stuff on Structured Investment Brokerage, special plan"
            specialPlanInputText={structuredBrokeragePlan}
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

export default Structured;
