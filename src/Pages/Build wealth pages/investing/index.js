import React from "react";
import { Navbar, Footer } from "../../../landing page cp";
import styles from "../../../style";
import { buildWealth04 } from "../../../assets";
const WhatIsHedging = () => {
 
  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "11rem 1rem 0" }}>
          <p style={{ padding: "2rem 0 2rem" }} className={styles.heading5}>
            Investing
          </p>

          <h1 className={styles.heading2}>What is Hedging?</h1>

          <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
            By{" "}
            <span
              className={styles.heading6}
              style={{
                borderRight: "1px solid  #46454C",
                padding: "0 1rem 0 0.2rem",
                marginRight: "1rem",
              }}
            >
              {" "}
              David Jakeer
            </span>{" "}
            Updated on September 9, 2023
          </p>
        </div>
        <div style={{ padding: "2rem 1rem" }}>
          <img alt="Personal stories" src={buildWealth04} width="100%" />
        </div>

        <div style={{ padding: "4rem 1rem" }}>
          <div>
            <h1 className={styles.heading4}>DEFINITION:</h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              <span className={styles.heading5}>Hedging </span>is a way to
              protect profits or limit the losses of one asset by purchasing or
              selling another.
            </p>
          </div>

          <div
            style={{ padding: "2rem 1rem", borderLeft: "3px solid #00E8C6" }}
          >
            <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
              Key Takeaways
            </h1>

            <p
              style={{ padding: "2rem 0 1rem 0" }}
              className={styles.paragraph2}
            >
              {" "}
              &#8226; Hedging is an approach designed to minimize potential
              losses or safeguard upcoming prices.
            </p>

            <p className={styles.paragraph2}>
              {" "}
              &#8226; Hedges move in the opposite direction of the investment
              they are protecting.
            </p>

            <p
              style={{ padding: "1rem 0 1rem 0" }}
              className={styles.paragraph2}
            >
              &#8226; Hedging can be expensive because in some cases, it
              requires that you pay premiums.
            </p>
          </div>

          <div style={{ padding: "4rem 0" }}>
            <h1 className={styles.heading4}>How Hedging Works</h1>
            <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
              Hedging is a sophisticated risk management strategy. Hedges are
              similar to insurance. In theory, they can limit potential losses
              of an asset that you own or limit the price of an asset you want
              to buy. Typically, if the value of your investment goes down, the
              value of your hedge goes up. If the value of your investment goes
              up, the value of the hedge generally goes down, speaking. Options,
              which are contracts for the right to buy or sell a stock or other
              asset at a certain price and time, are often used for hedging
              strategies.
            </p>

            <p className={styles.paragraph}>
              Individual investors usually hedge for two reasons:
            </p>

            <div style={{ padding: "2rem 1rem" }}>
              <p className={styles.paragraph}>
                {" "}
                &#8226;{" "}
                <span className={styles.heading5}>Over-concentration: </span>You
                own a lot of stock in one company, so you want to protect
                yourself.
              </p>

              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                &#8226;{" "}
                <span className={styles.heading5}>Tax implications:</span> You
                can use hedges to delay the sale of a stock or other asset while
                protecting its value.
              </p>
            </div>

            <div
              style={{ padding: "3rem 1rem", borderLeft: "3px solid #00E8C6" }}
            >
              <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Note
              </h1>

              <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
                Hedging is used by portfolio managers and institutional
                investors to manage risk. Companies also use hedging to control
                the price of commodities or currencies they use in their
                day-to-day business. Farmers and ranchers use hedging to protect
                the price of their cattle.
              </p>
            </div>

            <div style={{ padding: "4rem 0" }}>
              <h1 className={styles.heading4}>Example of Hedging</h1>
              <p style={{ padding: "2rem 0 0" }} className={styles.paragraph}>
                Suppose the 100 shares of Apple stock you recently purchased
                have done very well and are sitting at $175. You’d like to hold
                on to the shares, but you’re concerned that the price will go
                down if you hold them too much longer.
                <div style={{ margin: "1.5rem 0" }} />
                To hedge, you buy a put option for your shares with a strike
                price of $160. You pay a premium to retain the right to sell
                your shares at that price. Two weeks later, Apple has a bad
                earnings report and the stock price plummets. It hits $160 and
                you exercise your option to stop the bleeding.
                <div style={{ margin: "1.5rem 0" }} />
                If the price of the stock had stayed the same or gone up, you
                would have let the option expire and lost whatever you paid for
                premiums. If you wanted to continue the strategy, you would have
                to purchase a new put option.
              </p>
            </div>

            <div
              style={{ padding: "3rem 1rem", borderLeft: "3px solid #00E8C6" }}
            >
              <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Note
              </h1>

              <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
                Asset allocation and diversification are used in individual
                investment plans to manage risk and returns, but they aren’t
                hedging strategies. Hedging strategies have a direct negative
                correlation. Stocks and bonds, for example, don’t necessarily
                move in different directions at the same time and, in fact, may
                move in the same direction.
              </p>
            </div>

            <div style={{ padding: "4rem 0" }}>
              <h1 className={styles.heading4}>Types of Hedging Strategies</h1>
              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                Typically, investors create hedges using various types of
                derivatives such as options, futures, and forwards. Inverse ETFs
                may also be options for hedging in certain cases, but are risky
                investments.
              </p>
            </div>
            <div style={{ padding: "0rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Protective Puts
              </h1>
              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                Puts give you the right to sell your stock at a specified price
                for a specified time. You choose the price at which the put
                sells (strike price), providing you with a secure floor for your
                stock’s price. Protective puts can limit or eliminate losses.
                However, they aren’t free; you have to pay a premium for them,
                so you could lose money if your stock never drops enough to hit
                the strike price.
              </p>
            </div>
            <div style={{ padding: "3rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Covered Calls
              </h1>
              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                Calls give you the right to buy a stock at a specified price for
                a specified time. If you wanted to hedge your Apple shares, you
                could sell covered calls. The calls would generate income in the
                form of premiums the buyer pays you as long as the stock doesn’t
                hit its strike price. So, if the stock price drops like you’re
                worried it will, you’ll earn premiums from the covered call.
                However, if the stock’s price hits the strike price, then your
                gains are capped at the strike price.
              </p>
            </div>
            <div style={{ padding: "0rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Collars
              </h1>
              <p
                style={{ padding: "2rem 0 4rem 0" }}
                className={styles.paragraph}
              >
                Collars are a combination of protective puts and covered calls.
                You buy the puts to protect against a drop in stock price and,
                in theory, your calls generate premiums you can use to pay for
                your puts.
              </p>
            </div>

            <div
              style={{ padding: "3rem 1rem", borderLeft: "3px solid #00E8C6" }}
            >
              <h1 className="font-poppins xs:text-[22px] text-[22px] text-white xs:leading-[20.8px] leading-[20.8px]">
                Note
              </h1>

              <p style={{ padding: "2rem 0 0" }} className={styles.paragraph2}>
                Using a collar options strategy is a low-cost way to limit
                potential losses.
              </p>
            </div>

            <div style={{ padding: "4rem 0" }}>
              <h1 className={styles.heading4}>
                What It Means for Individual Investors
              </h1>
              <p style={{ padding: "2rem 0" }} className={styles.paragraph}>
                Hedges can be expensive in some cases, and price fluctuations
                are expected over time. Because of that, they aren’t recommended
                for investors who just want to buy and hold a stock. If you
                choose to create a hedge, be sure you understand the mechanics
                of the hedge, including (when applicable) the strike price and
                how much you’ll pay or earn in premiums.
              </p>
            </div>
            <div style={{ padding: "2rem 0" }}>
              <h1 className={styles.heading4}>
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
            <div style={{ padding: "2rem 0 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                What is hedging in stocks?
              </h1>
              <p
                style={{ padding: "2rem 0 4rem 0" }}
                className={styles.paragraph2}
              >
                Hedging a stock means buying an asset that will move in the
                opposite direction of the stock. The hedge could be an option,
                future, or short sale.
              </p>
            </div>
            <div style={{ padding: "0rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                How much does hedging cost?
              </h1>
              <p
                style={{ padding: "2rem 0 4rem 0" }}
                className={styles.paragraph2}
              >
                Hedging strategies frequently use options and futures to limit
                losses. Options and futures have limited lifespans and sell for
                a premium. Premiums are impacted by the expiration date, price
                of the stock or other asset, and volatility.
              </p>
            </div>
            <div style={{ padding: "0rem 0" }}>
              <h1 className="font-poppins xs:text-[24px] text-[24px] text-white xs:leading-[20.8px] leading-[20.8px]">
                What does portfolio hedging mean?
              </h1>
              <p
                style={{ padding: "2rem 0 0rem 0" }}
                className={styles.paragraph2}
              >
                Investment portfolios usually have a combination of different
                asset classes, stocks, bonds, real estate, cash, etc. with many
                individual positions. Portfolio hedging involves protecting some
                or all of the portfolio from loss. Hedging is usually a
                short-term strategy. For example, an investor who believes stock
                prices are headed down could protect the equity portion of the
                portfolio by using an inverse ETF.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WhatIsHedging;
