import React from "react";
import { Navbar, Footer, Blog } from "../../landing page cp";
import { Timeline } from "react-ts-tradingview-widgets";

const News = () => {
  

  return (
    <>
      <Navbar />

      <div style={{ padding: "10rem 1rem 0" }}>
        <Blog />
        <div style={{ padding: "2rem 1rem " }}></div>

        <Timeline colorTheme="dark" width="100%" />
      </div>

      <Footer />
    </>
  );
};

export default News;
