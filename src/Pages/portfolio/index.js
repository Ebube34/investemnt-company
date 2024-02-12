import React, { useRef, useState, useEffect } from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import {
  portfolio,
  assestAllocation01,
  assestAllocation02,
  assestAllocation03,
  assestAllocation04,
  assestAllocation05,
} from "../../assets";
import { Button } from "../../landing page cp";

const Portfolio = () => {
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
  }, [index]);


  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div style={{ marginTop: "14rem", textAlign: "center" }}>
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[100.8px] leading-[75px]">
                The Smart Way to Invest at <br />{" "}
                <span style={{ color: "#00E8C6" }}>Low Cost</span>
              </h1>

              <p style={{ padding: "3rem 0" }} className={styles.paragraph}>
                Diversified portfolios to help you build a better future.
              </p>
            </div>

            <img src={portfolio} alt="portfolio" />

            <div style={{ padding: "8rem 1rem" }}>
              <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
                Build a customized portfolio
              </h1>
              <p className={styles.paragraph}>
                We invest your money into the entire stock market and build a
                customized portfolio using exchange-traded funds (ETFs). When
                you make your first deposit, we will automatically invest your
                portfolio according to your specific risk profile.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
                Asset Allocation
              </h1>

              <div style={{ padding: "3rem 0" }}>
                <img
                  src={assestAllocation01}
                  alt="Government bond"
                  style={{ margin: "0 auto" }}
                />

                <h1 className={styles.heading4}>Government Bond</h1>
                <p style={{ padding: "1rem 0" }} className={styles.paragraph}>
                  Government Bonds are issued by sovereign governments.
                  Sovereign bonds are tradable and backed by the full faith and
                  credit of the country’s treasury.
                </p>

                <h1 style={{ padding: "2rem 0" }} className={styles.heading4}>
                  Reasons we chose this Asset Class:
                </h1>

                <ul className={styles.paragraph}>
                  <li>Less volatility</li>
                  <li>Diversification benefits</li>
                  <li>Access to a yield return</li>
                </ul>
              </div>

              <div style={{ padding: "3rem 0" }}>
                <img
                  src={assestAllocation02}
                  alt="Coperate Bond"
                  style={{ margin: "0 auto" }}
                />

                <h1 className={styles.heading4}>Coperate Bond</h1>
                <p style={{ padding: "1rem 0" }} className={styles.paragraph}>
                  Corporate bonds are bonds issued by corporations, LLCs,
                  partnerships, and other commercial entities. Companies who
                  issue corporate bonds aren’t as resilient as governments or
                  municipalities, so there’s more risk..
                </p>

                <h1 style={{ padding: "2rem 0" }} className={styles.heading4}>
                  Reasons we chose this Asset Class:
                </h1>

                <ul className={styles.paragraph}>
                  <li>Diversification benefits</li>
                  <li>Access to a yield return</li>
                </ul>
              </div>
              <div style={{ padding: "5rem 0" }}>
                <img
                  src={assestAllocation03}
                  alt="Coperate Bond"
                  style={{ margin: "0 auto" }}
                />

                <h1 style={{ padding: "4rem 0 0" }} className={styles.heading4}>
                  Equity Sectors
                </h1>
                <p style={{ padding: "1rem 0" }} className={styles.paragraph}>
                  Equities are grouped by sectors and the member companies'
                  basic economic function.
                </p>

                <h1 style={{ padding: "2rem 0" }} className={styles.heading4}>
                  Reasons we chose this Asset Class:
                </h1>

                <ul className={styles.paragraph}>
                  <li>Diversification benefits</li>
                  <li>Controlling risk during recessions</li>
                </ul>
              </div>
              <div style={{ padding: "5rem 0" }}>
                <img
                  src={assestAllocation05}
                  alt="Coperate Bond"
                  style={{ margin: "0 auto" }}
                />

                <h1 style={{ padding: "4rem 0 0" }} className={styles.heading4}>
                  International Equities
                </h1>
                <p style={{ padding: "1rem 0" }} className={styles.paragraph}>
                  International stocks are mainly from developed and emerging
                  markets. These are diversified investments across sectors and
                  geographic that generally follow a large-cap investment style.
                </p>

                <h1 style={{ padding: "2rem 0" }} className={styles.heading4}>
                  Reasons we chose this Asset Class:
                </h1>

                <ul className={styles.paragraph}>
                  <li>Diversification benefits from investing globally.</li>
                </ul>
              </div>
              <div style={{ padding: "5rem 0" }}>
                <img
                  src={assestAllocation04}
                  alt="Coperate Bond"
                  style={{ margin: "0 auto" }}
                />

                <h1 style={{ padding: "4rem 0 0" }} className={styles.heading4}>
                  Commodity
                </h1>
                <p style={{ padding: "1rem 0" }} className={styles.paragraph}>
                  Commodities as an asset class have had a historically low
                  correlation with stocks and bonds. Gold provides the potential
                  for long-term capital appreciation and acts as an inflation
                  hedge.
                </p>

                <h1 style={{ padding: "2rem 0" }} className={styles.heading4}>
                  Reasons we chose this Asset Class:
                </h1>

                <ul className={styles.paragraph}>
                  <li>Diversification benefits</li>
                  <li>Hedge against inflation</li>
                </ul>
              </div>

              <div style={{ padding: "6rem 0 0", textAlign: "center" }}>
                <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                  How To Start
                </h1>
                <div style={{ paddingBottom: "5rem" }} className="slideshow">
                  <div
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    className="slideshowSlider"
                  >
                    <div
                      style={{ paddingTop: "4rem", paddingBottom: "1rem" }}
                      className="slide"
                    >
                      <div>
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
                          Click the open account <br /> button and fill the form
                          right away <br />
                          to have an account opened for you. <br /> After you
                          open your account,
                          <br /> the next thing is to <br /> select a plan.
                        </p>
                      </div>
                      <Button content="Open account"></Button>
                    </div>
                    <div style={{ paddingBottom: "1rem" }} className="slide">
                      <div>
                        <h1
                          style={{ paddingBottom: "2rem" }}
                          className={styles.heading4}
                        >
                          Select Plan
                        </h1>

                        <p className={styles.paragraph}>
                          After opening your free account,
                          <br /> the next thing is to select a plan
                          <br /> that matches your budget, <br /> as well as
                          your financial objectives. <br /> If you don't find a
                          plan
                          <br /> that suits your, just reach out <br /> to one
                          of our available advisors, <br /> and they'll help you
                          set up <br />
                          fast and easy.
                        </p>
                      </div>
                    </div>
                    <div style={{ paddingBottom: "1rem" }} className="slide">
                      <div style={{}}>
                        <h1
                          style={{ paddingBottom: "2rem" }}
                          className={styles.heading4}
                        >
                          Fund Account
                        </h1>

                        <p className={styles.paragraph}>
                          Funding your account
                          <br /> has been made fast and easy.
                          <br /> All you have to do is request
                          <br /> the payment account and make
                          <br /> the deposit. <br /> As soon as your deposit
                          <br /> is confirmed, your profit <br />
                          starts to count.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="slideshowDots">
                    {colors.map((_, idx) => (
                      <div
                        key={idx}
                        className={`slideshowDot${
                          index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
