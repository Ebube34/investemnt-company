import React from 'react';
import DashboardHeading from '../../components/dashboard-heading';
import { Box } from '@mui/material';
import Cookies from 'universal-cookie';

import { useNavigate } from "react-router-dom";
import { AdvancedRealTimeChart, TickerTape, ForexCrossRates, SymbolInfo} from "react-ts-tradingview-widgets";

const cookies = new Cookies();

const Markets = () => {
    // const theme = useTheme();
    // const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const token = cookies.get("TOKEN");
    const navigate = useNavigate();

  if (token) {
    return (
        <>
            <Box padding="20px 0 20px 0">
                <DashboardHeading  title="Markets" subTitle="browse the market place. A sneak peak on all our traded markets" />
            </Box>
            <Box>
            <TickerTape showSymbolLogo colorTheme="dark" />
            <AdvancedRealTimeChart theme="dark" width="100%" height="500px" />
            
            <ForexCrossRates autosize colorTheme="dark" />
            <SymbolInfo autosize colorTheme="dark" />
            </Box>
        </>
    )
  } else {
    navigate("/login")
  }
}

export default Markets;