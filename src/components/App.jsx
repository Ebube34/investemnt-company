import React, { useMemo} from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "../theme.js";
import {
  Login,
  Register,
  OurStrategy,
  Home,
  ForgotPassword,
  Team,
  Contact,
  Invest,
  About,
  Community,
  LegalDocumentation,
  Portfolio,
  News,
  Shield,
  CustomerSupport,
  JosephKenneth,
  BillWRichard,
  CarlAAnthony,
  StefflerMargaret,
  RegistrationSuccessful,
  DepositPending,
  CongratulationsOnActiveContract,
  WithdrawalPending,
  Cryptocurrency,
  RealEstate,
  OilAndGas,
  HowDoIStartInvestingWhenImScaredToLoseMoney,
  WhatIsHedging,
  ThePowerOfCompoundInterestCalculator,
  WhatIsCryptoAndHowDoesItWork
} from "../Pages/index.js";
import DashboardMain from "../scenes/dashboardmain";
import Layout from "../scenes/layout";
import Contracts from "../scenes/contracts";
import AccountDeposits from "../scenes/accountDeposits";
import Markets from "../scenes/markets";
import ActiveContracts from "../scenes/activeContracts";
import Withdrawals from "../scenes/withdrawals/index.js";
import Activity from "../scenes/activity/index.js";
import Calendar from "../scenes/calender/index.js";
import FAQ from "../scenes/faq/index.js";
import Geography from "../scenes/geography/index.js";
import PrivateRoutes from "./PrivateRoutes.jsx";
import PublicRoutes from "./PublicRoutes.jsx";
import Settings from "../scenes/userSettings/index.js";
import GoogleTranslate from "./GoogleTranslate.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

 

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>

       <div style={{position: "fixed", top: "0", zIndex: "20", width: "100%",}}>
        <GoogleTranslate />
       </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="reset-password" element={<ForgotPassword />} />
            <Route path="Our-strategy" element={<OurStrategy />} />
            <Route path="our-team" element={<Team />} />
            <Route path="our-team/joseph-Kenneth" element={<JosephKenneth />} />
            <Route path="our-team/bill-richard" element={<BillWRichard />} />
            <Route path="our-team/carl-anthony" element={<CarlAAnthony />} />
            <Route path="our-team/steffler-margaret" element={<StefflerMargaret />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="our-community" element={<Community />} />
            <Route path="news" element={<News />} />
            <Route path="legal-documentation" element={<LegalDocumentation />} />
            <Route path="investment" element={<Invest />} />
            <Route path="customer-support" element={<CustomerSupport />} />
            <Route path="shield" element={<Shield />} />
            <Route path="registration-successful" element={<RegistrationSuccessful />} />
            <Route path="deposit-pending" element={<DepositPending />} />
            <Route path="Congratulations-purchased-successfully" element={<CongratulationsOnActiveContract />} />
            <Route path="withdrawal-pending" element={<WithdrawalPending />} />
            <Route path="cryptocurrency" element={<Cryptocurrency />} />
            <Route path="real-estate" element={<RealEstate />} />
            <Route path="oil-and-gas" element={<OilAndGas />} />
            <Route path="articles/how-do-i-start-investing-when-iam-scared-to-lose-money" element={<HowDoIStartInvestingWhenImScaredToLoseMoney/>} />
            <Route path="articles/what-is-hedging" element={<WhatIsHedging />} />
            <Route path="articles/the-power-of-compound-interest-calculator" element={<ThePowerOfCompoundInterestCalculator />} />
            <Route path="articles/what-does-financially-independent-mean" element={<WhatIsCryptoAndHowDoesItWork />} />

           
  
            <Route element={<PrivateRoutes />}>
              <Route element={<Layout />}>
                <Route
                  path="user-dashboard"
                  element={<Navigate to="dashboard" replace />}
                />
                <Route path="Dashboard" element={<DashboardMain />} />
                <Route path="Contract" element={<Contracts />} />
                <Route path="Deposit" element={<AccountDeposits />} />
                <Route path="market" element={<Markets />} />
                <Route path="active-contracts" element={<ActiveContracts />} />
                <Route path="withdraw" element={<Withdrawals />} />
                <Route path="Activity" element={<Activity />} />
                <Route path="calender" element={<Calendar />} />
                <Route path="faqs" element={<FAQ />} />
                <Route path="geography" element={<Geography />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        
        </ThemeProvider>
      </BrowserRouter>

     <div className="support_agent"><p>Need Help?</p></div>
      <a
      href="https://wa.me/2348132669129"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
      >
      
        <i className="fa fa-whatsapp whatsapp-icon" style={{ fontSize: "72px", textAlign: "center", color: "#25d366", zIndex: "10"}}></i>
      </a>
    </div>
  );
}

export default App;



// SujDvr/Hry+Q%u3

// 400c57761b2e4bc3842e8865c25ddb60