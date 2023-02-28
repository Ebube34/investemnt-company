import React from "react";
import ButtonMain from "./button";
import InvestmentPlans from "./investment-plans";

function WhatWeOffer() {
    return (
        <>
        <section>
              <section class="services">
    <h4 class="service-heading">What we offer</h4>
    <div class="row  services-container ">
      <InvestmentPlans
       heading="Crypto investment plans"
        content="With bitcoin, ethereum and popular altcoins, create a portifio with more secure high returns"
       />
        <InvestmentPlans 
        heading="Trade Investment plans"
        content="earn percentage gains from our trading of commodities and stocks" 
          
        />
        <InvestmentPlans 
        heading="Structured Investment brokerage"
          content="different category of private investment plans to suit your goals"
        />
        <InvestmentPlans heading="foreign exchange investment" content="We are active in foreign exchange market, get returns from the weekly global marketplace for exchanging national currencies" 

        />
    </div>

  </section>
  <h4 class="Tip">Whether you are investing for capital appreciation or for income, we will assist you all the way.</h4>
    <div class="row services-button-container">
      <div class="col-4 col-lg-2">
       <ButtonMain classname="service-button" content="Start earning"/>
      </div>
      <div class="col-4 col-lg-2">
      <ButtonMain classname="service-button" content="Learn more"/>
      </div>
    </div>
  </section>
        </>
    );
};

export default WhatWeOffer;