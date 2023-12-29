import React, { useState, useEffect, useRef } from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { InvestmentFeatured } from "../../assets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { safeAndSecure, balancedPortfolio } from "../../assets";
import { Button } from "../../landing page cp";
import { step01, step02, step03 } from "../../assets";

const Invest = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const [index, setIndex] = useState(0);
  const delay = 25000;
  const timeoutRef = useRef(null);



  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, ]);
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h1
            className={styles.paragraph}
            style={{ fontWeight: "300", paddingTop: "10rem" }}
          >
            Quivasfinance invest
          </h1>

          <h1 style={{ padding: "2rem 0" }} className={styles.heading2}>
            Investing on autopilot
          </h1>

          <p className={styles.paragraph}>
            A smart investing platform using a cutting-edge technology to build
            and rebalance your personalized portfolio
          </p>
        </div>

        <div
          style={{
            paddingTop: "3rem",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img src={InvestmentFeatured} alt="Auto pillot"></img>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div style={{ paddingTop: "5rem" }} className={`${styles.boxWidth}`}>
          <h1
            style={{ padding: "0 1rem" }}
            className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]"
          >
            How it works
          </h1>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div
              style={{ padding: "2rem 1rem" }}
              className={`${styles.boxWidth}`}
            >
              <p className={styles.paragraph}>
                Explore the path to financial freedom by investing in a
                cost-effective, tailor-made portfolio. Follow these
                straightforward steps: Mitigate risk and boost returns by
                diversifying your investments across the global stock market
                using ETFs. Craft a personalized portfolio that aligns with your
                risk tolerance and financial objectives. Embark on a journey
                across the stock market, constructing a unique portfolio
                comprised of ETFs
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "6rem 1rem" }}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Features and advantages
          </h1>
          <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
            Investing on autopilot implies benefiting from diverse features,
            making room for greater performance.
          </p>
          <div>
            <Accordion
              style={{
                marginTop: "1rem",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Fractional Shares</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Benefit from exposure to an ETF or stock with a higher price
                  per share
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                marginTop: "1rem",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Automatic rebalancing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  enjoy investment portfolio rebalancing as frequently as the
                  market changes
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                marginTop: "1rem",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Simple Access</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Manage your accounts anytime and from anywhere
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                marginTop: "1rem",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Dividend Reinvestment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We reinvest your stock dividends back into your investment
                  portfolio so you can earn more
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{
                marginTop: "1rem",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Compound Interest</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Grow your money with minimum effort through compound interest
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={safeAndSecure}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>

          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                Your money Is safe and secure
              </h1>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our brokerage is insured through a decentralized system. These
              providers will charge a percentage for each cryptocurrency unit to
              protect against hacks or other adverse events. All the data and
              information are encrypted using the highest security standards.
              Open your secure account and keep your money safe.
            </p>
          </div>
        </section>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={balancedPortfolio}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>

          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                Supported by Nobel Prize-winning research
              </h1>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our commitment to passive investing is rooted in proven results.
              Extensive research indicates that tracking the market with a
              diversified portfolio is the most dependable strategy for
              long-term wealth growth. Our pride lies in our autopilot
              solutions, featuring an algorithm built on Harry Markowitz's Nobel
              Prize-winning formula. Back-tested for over a decade, it has
              demonstrated viability, even weathering the challenges of the 2008
              financial crisis.
            </p>
          </div>
        </section>

        <div style={{ paddingTop: "2rem", textAlign: "center" }}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            How To Start
          </h1>
          <div className="slideshow">
            <div
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              className="slideshowSlider"
            >
              <div
                style={{ paddingTop: "7rem", paddingBottom: "1rem" }}
                className="slide"
              >
                <div>
                  <img
                    alt="profile-user"
                    width="90px"
                    height="90px"
                    src={step01}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "47%",
                      paddingBottom: "1rem",
                    }}
                  />
                  <h1
                    style={{ paddingBottom: "2rem" }}
                    className={styles.heading4}
                  >
                    Open Account
                  </h1>
                  <p
                    style={{ paddingBottom: "2rem" }}
                    className={styles.paragraph}
                  >
                    Click the open account button and fill the form right away
                    to have an account opened for you. <br /> After you open
                    your account, the next thing is to select a plan.
                  </p>
                </div>
                <Button content="Open account"></Button>
              </div>
              <div
                style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
                className="slide"
              >
                <div>
                  <img
                    alt="profile-user"
                    width="90px"
                    height="90px"
                    src={step02}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "47%",
                      paddingBottom: "1rem",
                    }}
                  />
                  <h1
                    style={{ paddingBottom: "2rem" }}
                    className={styles.heading4}
                  >
                    Select Plan
                  </h1>

                  <p className={styles.paragraph}>
                    After opening your free account, the next thing is to select
                    a plan that matches your budget, as well as your financial
                    objectives. <br /> If you don't find a plan that suits your,
                    just reach out to one of our available advisors, <br /> and
                    they'll help you set up fast and easy.
                  </p>
                </div>
              </div>
              <div
                style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
                className="slide"
              >
                <div style={{}}>
                  <img
                    alt="profile-user"
                    width="90px"
                    height="90px"
                    src={step03}
                    style={{
                      borderRadius: "50%",
                      textAlign: "center",
                      marginLeft: "47%",
                      paddingBottom: "1rem",
                    }}
                  />
                  <h1
                    style={{ paddingBottom: "2rem" }}
                    className={styles.heading4}
                  >
                    Fund Account
                  </h1>

                  <p className={styles.paragraph}>
                    Funding your account has been made fast and easy. All you
                    have to do is request the payment account and make the
                    deposit. <br /> As soon as your deposit is confirmed, your
                    profit starts to count.
                  </p>
                </div>
              </div>
            </div>

            <div className="slideshowDots">
              {colors.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Invest;
