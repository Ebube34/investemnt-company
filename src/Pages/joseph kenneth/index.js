import React from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { josephKenneth } from "../../assets";

const JosephKenneth = () => {
  return (
    <>
      <Navbar />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div style={{ padding: "1rem" }} className={`${styles.boxWidth}`}>
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]"
            style={{ paddingTop: "12rem" }}
          >
            Our Team
          </h1>

          <div
            style={{ borderBottom: "1px solid #46454C", padding: "4rem 0 0" }}
          >
            <h1 style={{ color: "" }} className={styles.heading5}>
            JOSEPH KENNETH
            </h1>
            <p
              style={{
                color: "#1ACDC6",
                fontStyle: "italic",
              }}
              className={styles.paragraph2}
            >
              Chairman of QuivasFinance Investment Company
            </p>
          </div>

          <div style={{ padding: "2rem 0" }}>
            <img alt="Joseph Kenneth" src={josephKenneth} />

            <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
              He currently serves as the Chairman of Teritor, Inc. (NYSE: TOR),
              a premier supplier in the truck and off-road vehicle industry.
              Joseph has also held the position of Chairman at Pennametal Inc.
              (NYSE: PMT), a global leader in cutting tools and wear-resistant
              parts manufacturing. Previously, he served as a Director at Kalgon
              Carbon Corporation (NYSE: UYT), a company renowned for its global
              services and solutions promoting cleaner and safer air and water.
              Additionally, Joseph holds the Chairmanship roles in Sharp Edge
              Labs, Xibus Systems, and several other private companies. Boasting
              a wealth of experience as an executive and entrepreneur, Joseph
              has held pivotal roles, including Executive Vice President and
              Chief Administrative Officer at DICK'S Sporting Goods, Inc. (NYSE:
              DKS), a prominent sports and fitness retailer with over 800
              stores. He also served as Chairman and Chief Executive Officer of
              Buchanan Ingersoll, one of the top 100 law firms in the U.S.
              Joseph's contributions extend beyond the corporate realm. He
              co-founded CEO Venture Funds, played a key role as Founding
              Director of the Pittsburgh Technology Council, and served as a
              Director at the Pittsburgh Life Sciences Greenhouse. In
              recognition of his outstanding achievements, the Pittsburgh
              Venture Capital Association honored Joseph with a Lifetime
              Achievement Award in 2013. In 2001, the Pittsburgh Post-Gazette
              named him one of the top 50 business leaders in the city, and in
              1999, Pittsburgh Magazine included him among the "Most Influential
              Pittsburghers of the Century." The National Law Journal twice
              acknowledged Joseph as one of "The 100 Most Influential Lawyers of
              America." A Princeton University graduate, Joseph has earned the
              University of Pittsburgh Law School's distinguished alumni award
              and holds an honorary doctorate of business administration degree
              from Robert Morris University.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JosephKenneth;
