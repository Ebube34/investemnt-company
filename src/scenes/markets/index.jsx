import React from 'react';
import DashboardHeading from '../../components/dashboard-heading';
import { Box } from '@mui/material';



import { useNavigate } from "react-router-dom";
import { AdvancedRealTimeChart, ForexCrossRates, MarketData, CryptoCurrencyMarket, Timeline} from "react-ts-tradingview-widgets";
import Cookies from 'js-cookie';

const Markets = () => {
    const token = Cookies.get("Token")
    const navigate = useNavigate();

  if (token) {
    return (
        <>
            <Box padding="20px 0 20px 0">
                <DashboardHeading  title="Markets" subTitle="browse the market place. A sneak peak on our traded markets" />
            </Box>
            <Box>
            <AdvancedRealTimeChart theme="dark" width="100%" height="700px" />
            <MarketData colorTheme='dark' showSymbolLogo={false} width="100%" />
            <CryptoCurrencyMarket colorTheme='dark' width="100%" />
            <ForexCrossRates width="100%"  colorTheme="dark" />
            <Timeline colorTheme='dark' width="100%" />
            </Box>
        </>
    )
  } else {
   return navigate("/login")
  }
}

export default Markets;