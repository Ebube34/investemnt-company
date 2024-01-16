import React from "react";
import Feature from "./Feature";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const WhatQuivas = () => {
  const navigate = useNavigate();
  return (
    <>
     
      <div className="gpt3__whatgpt3 bg-black-gradient-2 box-shadow">

       <div className="gpt3__whatgpt3-feature ">
          <Feature
            navigate={() => navigate("/about-us")}
            title="Quivas Finance LTD"
            text="A unit investment trust (UIT) company with exclusive trading rights and combined freedom for individuals to invest their own capital. A strong hold in our ability to generate revenue while securing your funds. Providing a system that makes investing simple in a wide  variety of financial market."
          />
        </div>

        <div className="gpt3__whatgpt3-heading">
          <h1 className="text-gradient">
            The percentages are beyond your imagination
          </h1>
          <p onClick={() => navigate("/login")} className="text-gradient">
            Explore Dashboard
          </p>
        </div>
        <div className="gpt3__whatgpt3-container">
        <Slide triggerOnce={true} duration={1500}>
          <Feature
            navigate={() => navigate("/cryptocurrency")}
            title="Cryptocurrency Trading "
            text="Cryptocurrency Trading is the Forex (Foreign Exchange) of cryptocurrencies. We specialize in crypto trading while creating patternships with industry leading exchanges."
          />
          </Slide>
          <Slide triggerOnce={true} duration={1500}>
          <Feature
            navigate={() => navigate("/real-estate")}
            title="Real Estate"
            text="With a wild range of Development Quivas is able to generate massive income out of 84.22% of our private and public owned real estate companies and potential share holding real estate companies around the globe."
          />
          </Slide>
          <Slide triggerOnce={true} duration={1500}>
          <Feature
            navigate={() => navigate("/oil-and-gas")}
            title="Oil and Gas"
            text="Investors looking for portfolio diversification through sector-specific funds can find multiple opportunities within the energy industry – and more specifically, companies operating in the oil and gas drilling sector."
          />
          </Slide>
        </div>
      </div>
  
    </>
  );
};

export default WhatQuivas;
