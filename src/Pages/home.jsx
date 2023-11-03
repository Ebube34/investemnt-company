import React from "react";
import styles from "../style";
import { Navbar, Heading, Stat, Business, WhatQuivas, Blog, BuildWealth, Testimonials, CTA, Footer } from "../landing page cp";
import { TickerTape} from "react-ts-tradingview-widgets";

// import Header from "../components/Header";
// import Heading from "../components/heading";
// import Firstbox from "../components/first-box";
// import WhatWeOffer from "../components/what-we-offer";
// import Attrative from "../components/attrative-section";
// import BuyYourHome from "../components/buy-your-home";
// import BuildWealth from "../components/build-wealth-section";
// import Footer from "../components/footer";
// import LiveChat from "../components/live-chat"; 



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
    <div style={{ color: "white"}} className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Stat /> 
        <WhatQuivas />
        <Business />  
        <Blog />
        <Testimonials />
        <CTA />  
        <BuildWealth />
        <Footer /> 
      </div>
    </div>
  </div>


















            {/* <Header />
            <LiveChat />
            <Heading />
            <Attrative />
            <Firstbox />
            <WhatWeOffer />
            <BuyYourHome />
            <BuildWealth />
            <Footer /> */}
        </>
    )
}

export default Home;