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

const Trading = () => {
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

  const tradingPlan = "Trading Investment";
  const basicPlanMinimumAmount = 1000;
  const standardPlanMinimumAmount = 1000;
  const specialPlanMinimumAmount = 100000;

  function handleBasicPlan() {
    setIsStandardPlanClick(false);
    setSpecialPlanClicked(false);
    setSpecialPlanContent("");
    setStandardPlanContent("");
    setSpecialPlanPercentage("");
    setStandardPlanPercentage("");
    setBasicPlanClick(true);
    setBasicPlanContent("Basic Plan");
    setBasicPlanPercentage("32% increase per month");
    setMinimumAmount("Minimum starting capital $1,000");
    setBasicPlanPercentageValue(32);
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
    setSpecialPlanContent("Ultimate Plan");
    setSpecialPlanPercentage("68% increase per month");
    setMinimumAmount("Minimum starting capital $100,000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(68);
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
    setStandardPlanPercentage("45% increase per month");
    setMinimumAmount("Minimum starting capital $10,000");
    setBasicPlanPercentageValue(null);
    setSpecialPlanPercentageValue(null);
    setStandardPlanPercentageValue(45);
  }
  return (
    <>
      <div style={{ padding: "1.3rem 1rem 1.3rem 1rem", opacity: "0.6" }}>
        {" "}
        <Typography variant="h5" sx={{ wordSpacing: "1px" }} lineHeight="1.7">
          By trading investment we mean creating a platform where our investors
          can invest on our abilty to stocks trading. Quivas trade variety of
          stocks AAPL, TSLA, AMZN, WMT and many more. The stock market offers
          different financial instruments, such as shares, bonds, mutual funds,
          and derivatives. This provides us with a wide choice of products in
          which to invest and trade. In addition to providing investment
          choices, this flexibility is beneficial in mitigating the risks
          inherent to stock investing by enabling diversification of investment
          portfolios making greater returns in comparatively shorter time
          periods. And with our expertise and group of traders we have created a
          short-term, low risk high return strategy to maximize our presence in
          the stock market providing our investors a percentage return for their
          commitment and trust.
        </Typography>{" "}
      </div>

      <Box>
        <Box>
          <Typography
            style={{
              p: "2rem 1rem 1.3rem 1rem",
              opacity: "0.6",
              fontSize: "1rem",
            }}
          >
            Select a preferred Trading Investment plan{" "}
          </Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap=""
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
            }}
          >
            <Box>
              <Button
                onClick={handleSpecialPlan}
                fullWidth
                sx={{
                  p: "10px 0",
                  m: "10px 0",
                  backgroundColor: isSpecialPlanClicked
                    ? theme.palette.grey[800]
                    : "none",
                }}
              >
                <Typography
                  sx={{
                    opacity: "0.5",
                    color: theme.palette.secondary[100],
                  }}
                >
                  Ultimate Plan
                </Typography>
              </Button>
            </Box>
            <Box>
              <Button
                onClick={handleStandardPlan}
                fullWidth
                sx={{
                  p: "10px 0",
                  m: "10px 0",
                  backgroundColor: isStandardPlanClicked
                    ? theme.palette.grey[800]
                    : "none",
                }}
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
                onClick={handleBasicPlan}
                fullWidth
                sx={{
                  p: "10px 0",
                  m: "10px 0",
                  backgroundColor: isBasicPlanClicked
                    ? theme.palette.grey[800]
                    : "none",
                }}
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
          </Box>
        </Box>
      </Box>

      <Box>
        {isBasicPlanClicked ? (
          <BasicPlan
            investmentPlanText="Basic plan offers you +32% of your starting capital per month. with minumum starting capital at 1,000 USD."
            investmentType={tradingPlan}
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
            investmentPlanText="Our standard plan offers you +45% of your starting capital per month. with minumum starting capital at 10,000 USD."
            investmentType={tradingPlan}
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
            investmentPlanText="Ultimate plan offers you +68% of your starting capital per month. with minumum starting capital at 100,000 USD."
            investmentType={tradingPlan}
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

export default Trading;
