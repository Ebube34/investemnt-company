import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import BasicPlan from "./basicPlan";
import StandardPlan from "./standardPlan";
import SpecialPlan from "./specialPlan";

const Foregin = () => {
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
  const [minnimumAmount, setMinimumAmount] = useState("the");

  const foreignExchangePlan = "Foreign Exchange Investment";

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
    setMinimumAmount("Minimum starting capital $100");
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
    setSpecialPlanPercentage("16% increase per month");
    setMinimumAmount("Minimum starting capital $2000");
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
    setMinimumAmount("Minimum starting capital $500");
  }
  
  return (
    <>
      
      <div style={{ padding: "20px", fontSize: "15px", lineHeight: "1.7"}}>The foregin exchange market where currencies are traded is the largest financial market in the world. Currencies are traded worldwide in the major financial centers of Frankfurt, Hong Kong, London, New York, Paris, Singapore, Sydney, Tokyo, and Zurich. the FX market is the only truly continuous and nonstop trading market in the world. The market is primarily traded via spot, forword and futures markets. But here in Quivas we focus only on the spot market where curriencies are bougth and sold based on their trading prices. with our Underlining strategies to go long or short on any currency pair we capitalize on the the high liquidity of the market providing consistent profit. We have investment plans in place for you to invest in foregin exchange market with potential returns.  </div>
      <Box>
        <Box>
          <Typography style={{ padding: "20px" }}>
            Select a preferred Foregin Exchange Investment plan{" "}
          </Typography>

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
            basicPlanText="bunch of stuff on Foreign Exchange investment, basic Plan"
            basicPlanInputText={foreignExchangePlan}
            basicPlanInputText2={basicPlanContent}
            basicPlanInputText3={basicPlanPercentage}
            basicPlanInputText4={minnimumAmount}
          />
        ) : (
          ""
        )}
        {isStandardPlanClicked ? (
          <StandardPlan
            standardPlanText="bunch of stuff on Foreign Exchange investment, standard Plan"
            standardPlanInputText={foreignExchangePlan}
            standardPlanInputText2={standardPlanContent}
            standardPlanInputText3={standardPlanPercentage}
            standardPlanInputText4={minnimumAmount}
          />
        ) : (
          ""
        )}
        {isSpecialPlanClicked ? (
          <SpecialPlan
            specialPlanText="bunch of stuff on Foreign Exchange investment, special plan"
            specialPlanInputText={foreignExchangePlan}
            specialPlanInputText2={specialPlanContent}
            specialPlanInputText3={specialPlanPercentage}
            specialPlanInputText4={minnimumAmount}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Foregin;
