import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  CardContent,
  Collapse,
} from "@mui/material";
import FlexBetween from "../../components/flexBetween";
import { useEffect } from "react";
import ReactLoading from "react-loading";


const ActiveContractMain = ({
  _id,
  investmentType,
  investmentPlan,
  capital,
  percentageProfit,
  profitPerMonth,
  capitalPlusProfit,
  dateOfPurchase,
  dateOfPayment,
  rating,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.5rem",
      }}
    >
      <CardContent>
        <Typography 
          sx={{
            fontSize: 18,
            mb: "1rem",
          }}
          color={theme.palette.secondary[800]}
          gutterBottom
        >
          {investmentType}
        </Typography>
        <Typography variant="h4" component="div">
          {investmentPlan}
        </Typography>
        <Typography
          className="text-success" 
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[600]}
        >
          $ {Number(capital).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
        </Typography>
        <Rating value={rating} />
        <Typography sx={{ fontSize: 16 }}>+{percentageProfit}%</Typography>
        <Typography
          className="text-green-600"
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[600]}
        >
          $ {Number(capitalPlusProfit).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>

      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent sx={{ fontFamily: "Montserrat, sans-serif" }}>
          <FlexBetween>
            <Typography>Contract Id </Typography>
            <Typography>{_id}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography padding="5px 0 0 0">Montly profit</Typography>
            <Typography padding="5px 0 0 0">
              <span>${Number(profitPerMonth).toFixed(2)}</span>
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography padding="5px 0 0 0">purchased</Typography>
            <Typography padding="5px 0 0 0">{dateOfPurchase}</Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography padding="5px 0 0 0">Next Payment</Typography>
            <Typography padding="5px 0 0 0">{dateOfPayment}</Typography>
          </FlexBetween>
          <Box>
            <Button
              sx={{
                m: "50px 0 0 0",
                color: theme.palette.primary[500],
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: theme.palette.secondary[300],
              }}
              fullWidth
            >
              End Contract
            </Button>
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const ActiveContractComp = ({ data }) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data === undefined || data === null) {
      setLoading(true);
    } else if (Object.keys(data).length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      <Box m="1.5rem 2.5rem">
        {
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
            }}
          >
            {loading ? (
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="spinner-div"
              >
                <ReactLoading
                  type={"spinningBubbles"}
                  color={"#1CEEEB"}
                  height={20}
                  width={20}
                />
              </div>
            ) : (
              data.activeContracts.map(
                ({
                  _id,
                  investmentType,
                  investmentPlan,
                  capital,
                  percentageProfit,
                  profitPerMonth,
                  capitalPlusProfit,
                  dateOfPurchase,
                  dateOfPayment,
                  rating,
                }) => (
                  <ActiveContractMain
                    key={_id}
                    _id={_id}
                    investmentType={investmentType}
                    investmentPlan={investmentPlan}
                    capital={capital}
                    percentageProfit={percentageProfit}
                    profitPerMonth={profitPerMonth}
                    capitalPlusProfit={capitalPlusProfit}
                    dateOfPayment={dateOfPayment}
                    dateOfPurchase={dateOfPurchase}
                    rating={rating}
                  />
                )
              )
            )}
          </Box>
        }
      </Box>
    </>
  );
};

export default ActiveContractComp;
