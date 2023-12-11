import React from 'react';
import Feature from './Feature';
import { useNavigate } from 'react-router-dom';

const WhatQuivas = () => {
  const navigate = useNavigate();
  return (
    <>
         <div className="gpt3__whatgpt3 bg-black-gradient-2 box-shadow">
    <div className="gpt3__whatgpt3-feature ">
      <Feature navigate={() => navigate("/about-us")} title="Quivas Finance LTD" text="A unit investment trust (UIT) company with exclusive trading rights and combined freedom for individuals to invest their own capital. A strong hold in our ability to generate revenue while securing your funds. Providing a system that makes investing simple in a wide  variety of financial market." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="text-gradient">The percentages are beyond your imagination</h1>
      <p onClick={() => navigate("/login")} className="text-gradient">Explore Dashboard</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature navigate={() => navigate("/investment")} title="Trade Investment plans " text="Earn percentage gains from our systematic trading of commodities and stocks." />
      <Feature navigate={() => navigate("/investment")} title="Crypto investment plans" text="With bitcoin, ethereum and popular altcoins, create a portifio with more secure high returns" />
      <Feature navigate={() => navigate("/investment")} title="foreign exchange investment" text="We are active in foreign exchange market. With strategies in place get returns from the weekly global marketplace for exchanging national currencies" />
    </div>
  </div>
    </>
  )
}

export default WhatQuivas;