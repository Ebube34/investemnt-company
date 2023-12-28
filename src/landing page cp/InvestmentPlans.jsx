import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import styles from "../style";
import Button from "./Button";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Slide } from "react-awesome-reveal";

const InvestmentPlans = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <>
    <div className="tradingView-w-lg-style">
     <TickerTape showSymbolLogo colorTheme="dark" />
     </div>
    <div style={{ textAlign: "center", paddingTop: "3rem"}} className="gpt3__blog-heading">
        <h2 className={styles.heading2} style={{ fontWeight: "600" }}>
          Investment Plans <br />{" "}
        </h2>
      </div>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="30px"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 3"}, 
          marginBottom: "4rem"
        }}
      >
      <Slide duration={1500}>
        <div style={{  textAlign: "center", background: "#272730", padding: "3.5rem", height: "fit-content" }}>
          <div style={{ borderBottom: "1px solid #46454C", paddingBottom: "2rem"}}>
            <h4 className={styles.heading4}>Ultimate Plan</h4>
          </div>
          <div style={{borderBottom: "1px solid #46454C", padding: "2rem 0"}} class="value">
            <h3 className={styles.heading2}>
              100,000<span>$</span>
            </h3>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <ul>
              <li className={styles.paragraph}>476% ROI</li>

              <li className={styles.paragraph}>24/7 Support</li>
            </ul>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <Button content="CHOOSE PLAN"></Button>
          </div>
        </div>
        </Slide>

        <Slide  duration={1500}>
        <div style={{  textAlign: "center", background: "#272730", padding: "3.5rem", height: "fit-content" }}>
          <div style={{ borderBottom: "1px solid #46454C", paddingBottom: "2rem"}}>
            <h4 className={styles.heading4}>Standard Plan</h4>
          </div>
          <div style={{borderBottom: "1px solid #46454C", padding: "2rem 0"}} class="value">
            <h3 className={styles.heading2}>
              10,000<span>$</span>
            </h3>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <ul>
              <li className={styles.paragraph}>322% ROI</li>

              <li className={styles.paragraph}>24/7 Support</li>
            </ul>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <Button content="CHOOSE PLAN"></Button>
          </div>
        </div>
        </Slide>

        <Slide duration={1500}>
        <div style={{  textAlign: "center", background: "#272730", padding: "3.5rem", height: "fit-content" }}>
          <div style={{ borderBottom: "1px solid #46454C", paddingBottom: "2rem"}}>
            <h4 className={styles.heading4}>Basic Plan</h4>
          </div>
          <div style={{borderBottom: "1px solid #46454C", padding: "2rem 0"}} class="value">
            <h3 className={styles.heading2}>
              1,000<span>$</span>
            </h3>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <ul>
              <li className={styles.paragraph}>92% ROI</li>

              <li className={styles.paragraph}>24/7 Support</li>
            </ul>
          </div>
          <div style={{ paddingTop: "2rem"}}>
            <Button content="CHOOSE PLAN"></Button>
          </div>
        </div>
        </Slide>
      </Box>

    

    </>
  );
};

export default InvestmentPlans;
