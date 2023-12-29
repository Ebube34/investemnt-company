import React, { useState, useEffect, useRef } from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { InvestmentFeatured } from "../../assets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { safeAndSecure, balancedPortfolio } from "../../assets";
import { Button } from "../../landing page cp";

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
  }, [index]);
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
                <h1 className={styles.heading5}>Fractional Shares</h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.paragraph}>
                  Maximize your investment potential by gaining exposure to an
                  ETF or stock with a higher price per share. This approach
                  offers several advantages. Firstly, it allows you to tap into
                  the potential growth of established and high-performing
                  assets. Additionally, investing in higher-priced shares often
                  aligns with companies that have demonstrated sustained success
                  and stability. Furthermore, exposure to stocks or ETFs with a
                  higher price per share can contribute to a well-rounded and
                  diversified portfolio. It introduces a layer of sophistication
                  to your investment strategy, as these assets are typically
                  associated with companies that have a strong market presence
                  and a track record of delivering value to shareholders. While
                  it's essential to assess and manage risk, incorporating such
                  assets into your portfolio can offer a unique avenue for
                  capital appreciation. Keep in mind that diversification
                  remains a key principle in effective portfolio management, and
                  a balanced approach that includes exposure to higher-priced
                  shares can contribute to the overall resilience and
                  performance of your investment portfolio.
                </p>
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
                <h1 className={styles.heading5}>Automatic rebalancing</h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.paragraph}>
                  Embrace the dynamic nature of the financial landscape by
                  relishing the opportunity to engage in investment portfolio
                  rebalancing as frequently as the market undergoes changes.
                  This proactive approach to managing your portfolio offers a
                  multitude of benefits. Firstly, frequent rebalancing allows
                  you to stay aligned with your financial goals and risk
                  tolerance. As market conditions evolve, the weightings of your
                  assets may shift, impacting the overall risk and return
                  profile of your portfolio. By regularly reassessing and
                  adjusting your allocations, you can ensure that your
                  investment strategy remains in harmony with your objectives.
                  Moreover, taking joy in the process of portfolio rebalancing
                  empowers you to capitalize on market trends and capitalize on
                  emerging opportunities. It enables you to buy low and sell
                  high, optimizing your asset allocation based on the prevailing
                  market conditions. Additionally, embracing the art of frequent
                  rebalancing fosters a sense of financial agility. It positions
                  you to adapt swiftly to changing economic landscapes,
                  geopolitical events, and other external factors that may
                  influence the performance of your investments. In essence,
                  viewing investment portfolio rebalancing as an enjoyable and
                  integral part of your financial journey enhances your ability
                  to navigate the complexities of the market and maintain a
                  resilient and well-optimized investment portfolio.
                </p>
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
                <h1 className={styles.heading5}>Simple Access</h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.paragraph}>
                  Gain unparalleled control over your financial landscape by
                  effortlessly managing your accounts anytime and from anywhere.
                  This level of accessibility is a game-changer in today's
                  fast-paced world, offering you a host of advantages. The
                  ability to manage your accounts around the clock empowers you
                  with real-time insights into your financial standing. Whether
                  you're at home, on the go, or traveling internationally,
                  staying connected to your accounts ensures that you are
                  well-informed and in control of your financial decisions.
                  Moreover, the convenience of managing your accounts from any
                  location fosters a proactive and responsive financial
                  approach. You can seize opportunities, address concerns, and
                  make strategic adjustments to your portfolio promptly,
                  maximizing the potential for financial growth and stability.
                  This flexibility also contributes to a seamless and
                  stress-free financial experience. By eliminating geographical
                  constraints, you can conduct transactions, monitor
                  investments, and stay on top of your financial goals with
                  ease. The peace of mind that comes with knowing you can manage
                  your accounts whenever and wherever allows you to focus on
                  what matters most to you. In essence, the power to manage your
                  accounts at your fingertips not only enhances your financial
                  management capabilities but also aligns with the dynamic and
                  interconnected nature of modern life, providing you with the
                  freedom to shape your financial destiny on your terms.
                </p>
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
                <h1 className={styles.heading5}>Dividend Reinvestment</h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.paragraph}>
                  Experience the compounding magic of your investments through
                  our innovative approach: we automatically reinvest your stock
                  dividends back into your investment portfolio, amplifying your
                  earning potential. Dividend reinvestment is a strategic move
                  that can significantly enhance the overall performance of your
                  portfolio over time. By seamlessly reinvesting the dividends
                  generated by your stocks, you capitalize on the power of
                  compounding, where your earnings generate additional earnings.
                  This compounding effect can lead to exponential growth,
                  allowing you to harness the full potential of your
                  investments. This hands-free reinvestment process not only
                  optimizes your returns but also aligns with a long-term
                  wealth-building strategy. It reflects a commitment to
                  maximizing the value of your investments and ensuring that
                  your portfolio is working diligently to create wealth on your
                  behalf. Furthermore, by automatically reinvesting dividends,
                  you eliminate the need for manual intervention, making your
                  investment journey more convenient and efficient. It's a
                  set-and-forget approach that empowers you to focus on your
                  broader financial goals while your portfolio works diligently
                  to generate wealth through the power of reinvested dividends.
                  In essence, our dividend reinvestment feature is designed to
                  transform your investment experience by turning regular
                  payouts into a dynamic force propelling your portfolio toward
                  sustained and robust financial growth.
                </p>
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
                <h1 className={styles.heading5}>Compound Interest</h1>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.paragraph}>
                  Unlock the potential for effortless wealth accumulation by
                  harnessing the remarkable power of compound interest. This
                  financial phenomenon has the ability to grow your money
                  exponentially over time, requiring minimal effort on your
                  part. At its core, compound interest involves not only earning
                  interest on your initial investment but also on the
                  accumulated interest that has been added to your principal
                  over time. This compounding effect creates a snowball effect,
                  allowing your money to multiply at an accelerating rate. One
                  of the key advantages of compound interest is the ability to
                  amplify the impact of your investments without the need for
                  active management. As your earnings are reinvested and
                  contribute to the growth of your principal, the compounding
                  process takes on a life of its own, steadily building a robust
                  foundation for your financial future. Embracing the concept of
                  compound interest aligns with a patient and long-term approach
                  to wealth building. It emphasizes the importance of staying
                  invested and allowing time to work in your favor. The longer
                  your money has to compound, the greater the potential for
                  substantial growth. Moreover, the beauty of compound interest
                  lies in its ability to transform modest contributions into
                  significant wealth over time. Even small, consistent
                  investments can blossom into a substantial financial nest egg,
                  showcasing the accessibility and inclusivity of this powerful
                  financial tool. In essence, growing your money through
                  compound interest is a smart and effortless way to build
                  wealth. By understanding and harnessing the dynamics of
                  compounding, you set the stage for a financially secure and
                  prosperous future with the least amount of active effort.
                </p>
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
                    Click the open account <br /> button and fill the form right
                    away <br />
                    to have an account opened for you. <br /> After you open
                    your account,
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
                    <br /> that matches your budget, <br /> as well as your
                    financial objectives. <br /> If you don't find a plan
                    <br /> that suits your, just reach out <br /> to one of our
                    available advisors, <br /> and they'll help you set up{" "}
                    <br />
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
