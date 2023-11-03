import React from 'react';
import Feature from './Feature';

const WhatQuivas = () => {
  return (
    <>
         <div className="gpt3__whatgpt3 bg-black-gradient-2 box-shadow">
    <div className="gpt3__whatgpt3-feature ">
      <Feature title="Quivas Finance LTD" text="A unit investment trust (UIT) company with exclusive trading rights and combined freedom for individuals to invest their own capital. A strong hold in our ability to generate revenue while securing your funds. Providing a system that makes investing simple in a wide  variety of financial market." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="text-gradient">The percentages are beyond your imagination</h1>
      <p className="text-gradient">Explore Dashboard</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Trade Investment plans " text="Earn percentage gains from our systematic trading of commodities and stocks." />
      <Feature title="Crypto investment plans" text="With bitcoin, ethereum and popular altcoins, create a portifio with more secure high returns" />
      <Feature title="foreign exchange investment" text="We are active in foreign exchange market. With strategies in place get returns from the weekly global marketplace for exchanging national currencies" />
    </div>
  </div>
    </>
  )
}

export default WhatQuivas;