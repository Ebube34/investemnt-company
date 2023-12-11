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
} from "../../landing page cp";
import { TickerTape } from "react-ts-tradingview-widgets";
import CookieConsent from "react-cookie-consent";

function Home() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Heading />
          </div>
        </div>
        <TickerTape showSymbolLogo colorTheme="dark" />
        <div
          style={{ color: "white" }}
          className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stat />
            <WhatQuivas />
            <Business />
            <Blog />
            <Testimonials />
            <CTA />
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
