import { useNavigate } from "react-router-dom";
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
import DashboardHeading from "../../components/dashboard-heading";
import FlexBetween from "../../components/flexBetween";
import Cookies from "js-cookie";
import { useGetUserQuery } from "../../state/api";
import CryptoJS from "crypto-js";


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
        <Typography
          variant="h4"
          component="div"
        >
          {investmentPlan}
        </Typography>
        <Typography
          className="text-success"
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[600]}
        >
          ${Number(capital).toFixed(2)}
        </Typography>
        <Rating value={rating} />
        <Typography sx={{  fontSize: 16 }}>
          +{percentageProfit}%
        </Typography>
        <Typography
          className="text-green-600"
          sx={{ fontSize: 18, mb: "1.5rem", fontFamily: "Mohave, sans-serif" }}
          color={theme.palette.secondary[600]}
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
              Montly profit
            </Typography>
            <Typography padding="5px 0 0 0">
              <span >
                ${Number(profitPerMonth).toFixed(2)}
              </span>
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography padding="5px 0 0 0">purchased</Typography>
            <Typography padding="5px 0 0 0">{dateOfPurchase}</Typography>
          </FlexBetween>
          <FlexBetween>
          <Typography padding="5px 0 0 0">
            Next Payment
          </Typography>
          <Typography padding="5px 0 0 0">
          {dateOfPayment}
          </Typography>
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



const ActiveContracts = () => {
  const token = Cookies.get("Token")
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const secretPass = "Xkhzg478tYUAEQivas65";
  const decrptToken = CryptoJS.AES.decrypt(token, secretPass);
   const userId =  JSON.parse(decrptToken.toString(CryptoJS.enc.Utf8));
  const { data } = useGetUserQuery(userId);

  if (token) {
    
    return (
      <>
      <Box m="1.5rem 2.5rem">
          <DashboardHeading
            title="Active Contract"
            subTitle="Your contracts"
          />
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
              {data && data.activeContracts.map(
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
              )}
            </Box>
        }
        </Box>
      </>
    );
  } else {
   return navigate("/login");
  }
};

export default ActiveContracts;
