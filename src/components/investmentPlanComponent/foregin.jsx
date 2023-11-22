import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import BasicPlan from "./basicPlan";
import { useGetContractsQuery } from "../../state/api";
import { getUserId } from "../getUserId";



const Foregin = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const userId = getUserId();
  const { data } = useGetContractsQuery(userId);
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
  const [basicPlanPercentageValue, setBasicPlanPercentageValue] =
    useState(Number);
  const [standardPlanPercentageValue, setStandardPlanPercentageValue] =
    useState(Number);
  const [specialPlanPercentageValue, setSpecialPlanPercentageValue] =
    useState(Number);

  const foreignExchangePlan = "Foreign Exchange Investment";
  const basicPlanMinimumAmount = 300;
  const standardPlanMinimumAmount = 2000;
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
    setBasicPlanPercentage("11% increase per month");
    setMinimumAmount("Minimum starting capital $300");
    setBasicPlanPercentageValue(11);
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
    setSpecialPlanPercentage("23% increase per month");
    setMinimumAmount("Minimum starting capital $5000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(23);
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
    setStandardPlanPercentage("17% increase per month");
    setMinimumAmount("Minimum starting capital $2000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(17);
  }

  return (
    <>
      <div style={{ padding: "1.3rem 2rem 1.3rem 2rem", opacity: "0.6" }}>
        {" "}
        <Typography variant="h5" sx={{ wordSpacing: "1px" }} lineHeight="1.7">
          The foregin exchange market where currencies are traded is the largest
          financial market in the world. Currencies are traded worldwide in the
          major financial centers of Frankfurt, Hong Kong, London, New York,
          Paris, Singapore, Sydney, Tokyo, and Zurich. the FX market is the only
          truly continuous and nonstop trading market in the world. The market
          is primarily traded via spot, forword and futures markets. But here in
          Quivas we focus only on the spot market where curriencies are bougth
          and sold based on their trading prices. with our Underlining
          strategies to go long or short on any currency pair we capitalize on
          the the high liquidity of the market providing consistent profit. We
          have investment plans in place for you to invest in foregin exchange
          market with potential returns.
        </Typography>{" "}
      </div>

      <Box>
        <Box>
          <Typography
            style={{ p: "3rem 2rem 1.3rem 2rem", opacity: "0.6", fontSize: "1rem" }}
          >
            Select a preferred Foregin Exchange Investment plan{" "}
          </Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
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
                sx={{ p: "10px 0", m: "10px 0", backgroundColor: isBasicPlanClicked ? theme.palette.grey[800] : "none" }}
              >
                <Typography
                  sx={{
                    opacity: "0.5",
                    color: theme.palette.secondary[100],
                    
                  }}
                >
                  Basic Plan
                </Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleStandardPlan}
                fullWidth
                sx={{ p: "10px 0", m: "10px 0", backgroundColor: isStandardPlanClicked ? theme.palette.grey[800] : "none" }}
              >
                <Typography
                  sx={{
                    opacity: "0.5",
                    color: theme.palette.secondary[100],
                  }}
                >
                  Standard Plan
                </Typography>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleSpecialPlan}
                fullWidth
                sx={{ p: "10px 0", m: "10px 0", backgroundColor: isSpecialPlanClicked ? theme.palette.grey[800] : "none" }}
              >
                <Typography
                  sx={{
                    opacity: "0.5",
                    color: theme.palette.secondary[100],
                  }}
                >
                  Special Plan
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        {isBasicPlanClicked ? (
          <BasicPlan
            investmentPlanText="Foregin exchange basic plan offers you +11% of your starting capital per month. with minumum starting capital at 300 USD"
            investmentType={foreignExchangePlan}
            investmentPlan={basicPlanContent}
            percentageProfitText={basicPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={basicPlanPercentageValue}
            minmumAmountValue={basicPlanMinimumAmount}
            walletBalanceData={data || {}}
            rating="3"
            userId={userId}
          />
        ) : (
          ""
        )}
        {isStandardPlanClicked ? (
          <BasicPlan
            investmentPlanText="Foregin exchange standard plan offers you +17% of your starting capital per month. with minumum starting capital at 2000 USD"
            investmentType={foreignExchangePlan}
            investmentPlan={standardPlanContent}
            percentageProfitText={standardPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={standardPlanPercentageValue}
            minmumAmountValue={standardPlanMinimumAmount}
            walletBalanceData={data || {}}
            rating="4"
            userId={userId}
          />
        ) : (
          ""
        )}
        {isSpecialPlanClicked ? (
          <BasicPlan
            investmentPlanText="Foregin exchange special plan offers you +22% of your starting capital per month. with minumum starting capital at 5000 USD"
            investmentType={foreignExchangePlan}
            investmentPlan={specialPlanContent}
            percentageProfitText={specialPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={specialPlanPercentageValue}
            minmumAmountValue={specialPlanMinimumAmount}
            walletBalanceData={data || {}}
            rating="5"
            userId={userId}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Foregin;
