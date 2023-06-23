import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import BasicPlan from "./basicPlan";
import StandardPlan from "./standardPlan";
import SpecialPlan from "./specialPlan";

const Trading = () => {
  const theme = useTheme();
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

  const tradingPlan = "Trading Investment";

  function handleBasicPlan() {
    setIsStandardPlanClick(false);
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setStandardPlanContent("");
    setSpecialPlanPercentage("");
    setStandardPlanPercentage("");
    setBasicPlanClick(true);
    setBasicPlanContent("Basic Plan");
    setBasicPlanPercentage("12% increase per month");
    setMinimumAmount("Minimum starting capital $500");
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
    setMinimumAmount("Minimum starting capital $3000");
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
  }
  return (
    <>
      <div style={{ marginTop: "30px" }}>Trading</div>
      <div>bunch of stuff under trading investment</div>

      <Box>
        <Box>
          <Typography style={{ paddingTop: "20px" }}>
            Select a preferred Trading Investment plan{" "}
          </Typography>

          <Box sx={{ width: "100%", margin: "2em 0 2em 0" }}>
            <Button
              onClick={handleBasicPlan}
              sx={{ width: "30%", padding: "1em" }}
            >
              <Typography sx={{ color: theme.palette.primary[400] }}>
                Basic Plan
              </Typography>
            </Button>
            <Button
              onClick={handleStandardPlan}
              sx={{ width: "30%", padding: "1em" }}
            >
              <Typography>Standard Plan</Typography>
            </Button>
            <Button
              onClick={handleSpecialPlan}
              sx={{ width: "30%", padding: "1em" }}
            >
              <Typography>Special Plan</Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        {isBasicPlanClicked ? (
          <BasicPlan
            basicPlanText="bunch of stuff on Trading investment, basic Plan"
            basicPlanInputText={tradingPlan}
            basicPlanInputText2={basicPlanContent}
            basicPlanInputText3={basicPlanPercentage}
            basicPlanInputText4={minnimumAmount}
          />
        ) : (
          ""
        )}
        {isStandardPlanClicked ? (
          <StandardPlan
            standardPlanText="bunch of stuff on Trading investment, standard Plan"
            standardPlanInputText={tradingPlan}
            standardPlanInputText2={standardPlanContent}
            standardPlanInputText3={standardPlanPercentage}
            standardPlanInputText4={minnimumAmount}
          />
        ) : (
          ""
        )}
        {isSpecialPlanClicked ? (
          <SpecialPlan
            specialPlanText="bunch of stuff on Trading investment, special plan"
            specialPlanInputText={tradingPlan}
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

export default Trading;
