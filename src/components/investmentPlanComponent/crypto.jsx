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

const Crypto = () => {
  const theme = useTheme();
  const userId = getUserId();
  const { data } = useGetContractsQuery(userId);

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
  const [basicPlanPercentageValue, setBasicPlanPercentageValue] =
    useState(Number);
  const [standardPlanPercentageValue, setStandardPlanPercentageValue] =
    useState(Number);
  const [specialPlanPercentageValue, setSpecialPlanPercentageValue] =
    useState(Number);
    

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
      <div style={{ padding: "40px 0 20px 10px", opacity: "0.6" }}>
        <Typography variant="h5" sx={{ wordSpacing: "1px" }} lineHeight="1.7">
          Cryptocurrency a digital payment system that do not rely on banks to
          verify transactions. A peer-to-peer system that can enable anyone
          anywhere to send and receive payments. Quivas do not only accept
          cryptocurrency as a means of payment but more importantly we trade
          varieties of crypto. Bitcoin, Ethereum and many more. We have our eyes
          on various ICO listed tokens with daily returns for our investors.
          Behind many of the most popular currencies, is an algorithm called
          prove of work. Under prove of work miners around the world compete
          against each other to find the encrypted solution on the blockchain,
          we are also in the minning pool, computing and validating
          transactions, providing solutions to various blockchain to earn
          rewards of cryptocurrency. We provide staking benefits for your
          capital. We as major crypto holders have various staking options with
          exchanges with the aim of providing our investors a risk free staking
          rewards. We optimize the crypto market providing you the best returns
          for your capital.
        </Typography>
      </div>
      <Box>
        <Box>
          <Typography
            sx={{ p: "30px 0 0 10px", opacity: "0.6", fontSize: "1rem" }}
          >
            Select preferred Cryptocurrency investment plan
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
            investmentPlanText="Basic plan offers you +10% of your starting capital per month. with minumum starting capital at 200 USD."
            investmentType={cryptoPlan}
            investmentPlan={basicPlanContent}
            percentageProfitText={basicPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={basicPlanPercentageValue}
            minmumAmountValue={basicPlanMinimumAmount}
            walletBalanceData={data || {}}
            userId={userId}
            rating="3"
          />
        ) : (
          ""
        )}

        {isStandardPlanClicked ? (
          <BasicPlan
            investmentPlanText="Our standard plan offers you with +15% of your starting capital per month. with minumum starting capital at 1000 USD."
            investmentType={cryptoPlan}
            investmentPlan={standardPlanContent}
            percentageProfitText={standardPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={standardPlanPercentageValue}
            minmumAmountValue={standardPlanMinimumAmount}
            rating="4"
            walletBalanceData={data || {}}
            userId={userId}
          />
        ) : (
          ""
        )}

        {isSpecialPlanClicked ? (
          <BasicPlan
            investmentPlanText="Our special plan offers you with +20% of your starting capital per month. with minumum starting capital at 5000 USD."
            investmentType={cryptoPlan}
            investmentPlan={specialPlanContent}
            percentageProfitText={specialPlanPercentage}
            minimumAmountText={minnimumAmount}
            percentageProfitValue={specialPlanPercentageValue}
            minmumAmountValue={specialPlanMinimumAmount}
            rating="5"
            walletBalanceData={data || {}}
            userId={userId}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Crypto;
