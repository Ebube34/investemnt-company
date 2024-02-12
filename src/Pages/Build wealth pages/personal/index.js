import React from "react";
import { Navbar, Footer } from "../../../landing page cp";
import styles from "../../../style";
import { buildWealth01 } from "../../../assets";

const HowDoIStartInvestingWhenImScaredToLoseMoney = () => {
    
  return (
    <>
      <div>
        <Navbar />

        <div style={{ padding: "11rem 1rem 0" }}>
          <p style={{ padding: "2rem 0 2rem" }} className={styles.heading5}>
            PERSONAL STORIES
          </p>

          <h1 className={styles.heading2}>
            How Do I Start Investing When I'm Scared To Lose Money?
          </h1>
          <p className={styles.paragraph}>
            Our editor-in-chief helps a potential investor 'make cents' of the
            market
          </p>

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
              Natalie Brolly
            </span>{" "}
            Updated on August 21, 2023
          </p>
        </div>

        <div style={{ padding: "2rem 1rem" }}>
          <img
            alt="Personal stories"
            src={buildWealth01}
            width="100%"
            height="200px"
          />

          <div style={{ padding: "3rem 0" }}>
            <h1 className={styles.heading4}>Dear Natalie,</h1>
            <p style={{ paddingTop: "1rem" }} className={styles.paragraph}>
              When should I start investing my money? I'm scared to put money
              somewhere when I'm not entirely sure of the outcome—how do I get
              started?
            </p>
            <p
              style={{ padding: "2rem 0 2rem 0" }}
              className={styles.paragraph}
            >
              Sincerely,{" "}
            </p>

            <p className={styles.paragraph}>Budgeting in Brooklyn</p>
          </div>

          <div>
            <h1
              style={{ padding: "2rem 0 2rem 0" }}
              className={styles.heading4}
            >
              Dear Budgeting,
            </h1>

            <p className={styles.paragraph}>
              Congratulations on taking the first step towards investing! While
              your age isn't specified, the beauty of investing is that it's
              open to individuals of any age. My belief is that it's never too
              early to start building your financial future. If you're below 18,
              though, keep in mind that you'll need to invest under the guidance
              of a parent or guardian through a custodial account.{" "}
              <div style={{ margin: "1.5rem 0" }} />
              Assuming you're of legal age, the question becomes: when should
              you start investing? The answer is simple—now!{" "}
              <div style={{ margin: "1.5rem 0" }} />
              Although investing might seem daunting, it's a powerful
              wealth-building tool. Consider this: if you had invested $500 in
              the S&P 500 index at the beginning of 2021 and made no additional
              contributions, you'd have over $640 by the year's end, thanks to
              the 28.7% total return (including dividends) for 2022.{" "}
              <div style={{ margin: "1.5rem 0" }} />
              To get started, the first hurdle is overcoming the fear. Recognize
              that the market offers opportunities for financial growth. Ensure
              that the money you invest is an amount you're comfortable with and
              won't impact essential expenses like rent or loans. Start modestly
              and commit to investing regularly, whether it's $50, $100, or $500
              each month. <div style={{ margin: "1.5rem 0" }} />
              View your investments with a long-term perspective, avoiding the
              temptation to use them as a quick solution for financial goals. As
              a new investor, consider low-risk options like index funds or
              ETFs, which provide diversification across various high-quality
              companies. <div style={{ margin: "1.5rem 0" }} />
              To begin your journey, open a brokerage account or sign up for an
              investment app. Here's to your success in long-term investing!
              <div style={{ margin: "2.5rem 0" }} />
              Good luck!
              <div style={{ margin: "2.5rem 0" }} />

              -Natalie
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HowDoIStartInvestingWhenImScaredToLoseMoney;
