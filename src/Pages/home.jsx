import React from "react";
import Header from "../components/Header";
import Heading from "../components/heading";
import Firstbox from "../components/first-box";
import WhatWeOffer from "../components/what-we-offer";
import Attrative from "../components/attrative-section";
import BuyYourHome from "../components/buy-your-home";
import BuildWealth from "../components/build-wealth-section";
import Footer from "../components/footer";
import LiveChat from "../components/live-chat";


function Home() {
    return (
        <>
            <Header />
            <LiveChat />
            <Heading />
            <Attrative />
            <Firstbox />
            <WhatWeOffer />
            <BuyYourHome />
            <BuildWealth />
            <Footer />
        </>
    )
}

export default Home;