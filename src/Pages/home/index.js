import React from "react";
import styles from "../../style";
import {
  Navbar,
  Heading,
  Stat,
  Business,
  WhatQuivas,
  Blog,
  BuildWealth,
  Testimonials,
  CTA,
  Footer,
  InvestmentPlans,
  Clients,
  Twitter,
} from "../../landing page cp";
import CookieConsent from "react-cookie-consent";

function Home() {
  return (
    <>
      <div className=" w-full overflow-hidden"> 
        <Navbar />

        <div className={` ${styles.flexStart}`}>
          <div style={{ marginTop: "6rem", }} className={`${styles.boxWidth}`}>
            <Heading />
            
          </div>
        </div>
      
      
        <div
          style={{ color: "white" }}
          className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stat />
           <WhatQuivas />
            <InvestmentPlans />
            <Business />
            <Blog />
            <Testimonials />
            <Twitter />
            <CTA />
            <Clients />
            <BuildWealth />
            <Footer />
            <CookieConsent>This site uses cookies for the best user experience</CookieConsent>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
