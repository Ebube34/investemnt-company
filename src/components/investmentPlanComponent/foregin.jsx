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
      <div style={{ marginTop: "30px" }}>Foregin</div>
      <div>bunch of nothing under Foregin</div>
      <Box>
        <Box>
          <Typography style={{ paddingTop: "20px" }}>
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
            <Box>
              <Button
                onClick={handleBasicPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography sx={{ color: theme.palette.primary[400] }}>
                  Basic Plan
                </Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleStandardPlan}
                sx={{ width: "50%", padding: "1em" }}
              >
                <Typography>Standard Plan</Typography>
              </Button>
            </Box>

            <Box>
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
