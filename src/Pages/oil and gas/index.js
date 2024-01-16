import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { oilAndGas } from "../../assets";
import Loading from "../../components/LoaderCompoent";

const OilAndGas = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <Navbar />

        <div
          style={{
            padding: "15rem 1rem 5rem 1rem",
            textAlign: "center",
            background: "#202335",
          }}
        >
          <h1 className={styles.heading2}>Investment Products</h1>
        </div>

        <div style={{ padding: "6rem 1rem" }}>
          <h1 style={{ paddingBottom: "2rem" }} className={styles.heading4}>
            Real Estate
          </h1>

          <img
            alt="Cryptocurrency trading"
            src={oilAndGas}
            style={{ width: "100%" }}
          />

          <p style={{ padding: "3rem 0" }} className={styles.paragraph}>
            Investors seeking to diversify their portfolios through
            sector-specific funds can explore numerous opportunities within the
            energy industry, particularly focusing on companies engaged in oil
            and gas drilling. It is crucial to assess specific metrics to gauge
            a company's profitability and make well-informed investment choices.
            One commonly employed measure for evaluating profitability is the
            profit margin.
          </p>

          <p className={styles.heading4}>Calculation of Profit Margin</p>

          <p style={{ padding: "3rem 0" }} className={styles.paragraph}>
            Investors can assess a company's profit margin or net profit margin
            through a straightforward calculation that determines revenues. The
            profit margin is derived by subtracting total expenses from total
            sales and then dividing the result by total company sales. This
            calculation does not factor in common stock dividends but includes
            depreciation, taxes, and interest expenses. Similarly, a company's
            net profit margin is calculated by subtracting total expenses from
            total revenue (not sales) and dividing that figure by total revenue.
            This provides investors with a more profound understanding of how a
            company translates its bottom-line revenue into profits for
            shareholders.
          </p>

          <p className={styles.heading4}>Oil and Gas Drilling Profit Margin</p>

          <p style={{ padding: "3rem 0" }} className={styles.paragraph}>
            As of January 2015, the average net profit margin for the oil and
            gas drilling industry stands at 6.1%. This industry average
            considers the profit margins of various companies, encompassing
            large, mid, and small-cap entities. Examples include Diamond
            Offshore Drilling, Inc (NYSE: DO) with a net profit margin of 7.23,
            Helmerich & Payne, Inc (NYSE: HP) with a net profit margin of 17.12,
            and PostRock Energy Corporation (NASDAQ: PSTR) with a net profit
            margin of 28.16. The net profit margin of a company remains one of
            the most closely monitored metrics in profit analysis, enabling
            investors to utilize this information for both individual companies
            and broader sectors when determining the suitability of an
            investment. Invest confidently in the oil and gas sector, minimizing
            risks.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OilAndGas;
