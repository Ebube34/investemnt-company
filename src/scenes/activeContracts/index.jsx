import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../state/api";
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
import DashboardHeading from "../../components/dashboard-heading";
import FlexBetween from "../../components/flexBetween";
const cookies = new Cookies();

const setUserId = JSON.parse(localStorage.getItem("userDetails"));

const ActiveContract = ({
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
            fontFamily: "Montserrat, sans-serif",
            mb: "0.2rem",
          }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {investmentType}
        </Typography>
        <Typography
          sx={{ fontFamily: "Montserrat, sans-serif" }}
          variant="h4"
          component="div"
        >
          {investmentPlan}
        </Typography>
        <Typography
          className="text-success"
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[400]}
        >
          ${Number(capital).toFixed(2)}
        </Typography>
        <Rating value={rating} />
        <Typography sx={{ fontFamily: "Open Sans, sans-serif", fontSize: 16 }}>
          +{percentageProfit}%
        </Typography>
        <Typography
          className="text-success"
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[400]}
        >
          ${Number(capitalPlusProfit).toFixed(2)}
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
            <Typography padding="5px 0 0 0">
              Profit at the end of the month
            </Typography>
            <Typography padding="5px 0 0 0">
              <span style={{ fontFamily: "Mohave, sans-serif" }}>
                ${Number(profitPerMonth).toFixed(2)}
              </span>
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography padding="5px 0 0 0">Date of purchase</Typography>
            <Typography padding="5px 0 0 0">{dateOfPurchase}</Typography>
          </FlexBetween>
          <FlexBetween>
          <Typography padding="5px 0 0 0">
            Next Payment Date
          </Typography>
          <Typography padding="5px 0 0 0">
          {dateOfPayment}
          </Typography>
          </FlexBetween>

          <Box>
            <Button
              sx={{
                fontFamily: "Noto Serif, serif",
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

const ActiveContracts = () => {
  
  const token = cookies.get("TOKEN");
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [ mainUserId, setMainUserId ] = useState(null);
 
  useEffect(() => {
    setMainUserId(setUserId.userId)
  }, [])

  const { data, isLoading } = useGetUserQuery(mainUserId);
 

  if (token) {
    return (
      <>
        <Box m="1.5rem 2.5rem">
          <DashboardHeading
            title="Active Contracts"
            subTitle="Your list of contracts"
          />
          {data || !isLoading ? (
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
              {data.activeContracts.map(
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
                  <ActiveContract
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
              )}
            </Box>
          ) : (
            <>
              <Box>
                <Typography>
                  Loading...Check your internet connection and refresh while you
                  wait
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </>
    );
  } else {
    navigate("/login");
  }
};

export default ActiveContracts;
