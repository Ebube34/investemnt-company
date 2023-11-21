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
      <div style={{ padding: "40px 0 50px 10px", opacity: "0.6" }}>
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
            style={{ p: "50px 0 0 10px", opacity: "0.6", fontSize: "1rem" }}
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
                onClick={handleBasicPlan}
                fullWidth
                sx={{ p: "10px 0", m: "10px 0" }}
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
                sx={{ p: "10px 0", m: "10px 0" }}
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
                sx={{ p: "10px 0", m: "10px 0" }}
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
            investmentPlanText="Basic plan offers you +8% of your starting capital per month. with minumum starting capital at 100 USD."
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
            investmentPlanText="Our standard plan offers you +13% of your starting capital per month. with minumum starting capital at 700 USD."
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
            investmentPlanText="Our special plan offers you +18% of your starting capital per month. with minumum starting capital at 3000 USD."
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
