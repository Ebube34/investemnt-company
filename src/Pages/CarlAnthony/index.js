import React from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { CarlAnthony } from "../../assets";

const CarlAAnthony = () => {
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
              CARL A. ANTHONY
            </h1>
            <p
              style={{
                color: "#1ACDC6",
                fontStyle: "italic",
              }}
              className={styles.paragraph2}
            >
              Controller
            </p>
          </div>

          <div style={{ padding: "2rem 0" }}>
            <img alt="Joseph Kenneth" src={CarlAnthony} />

            <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
              Carl A. Anthony currently serves as the Controller at QuivasFinance
              Investment Company, overseeing all traditional responsibilities
              associated with the role of a corporate controller. In 2011,
              alongside his role at QuivasFinance Investment Company, he assumed the
              position of Chief Financial Officer at Black Dog Ventures. Carl
              earned his BSBA degree in Accounting from Robert Morris University
              in 1983. Beginning his career in 1984, he joined Touche Ross &
              Co., an international "Big 8" accounting firm, progressing to the
              role of Senior Accountant. In 1987, he took on the role of Vice
              President of Finance at Petroclean, Inc., an environmental
              services contractor working with Fortune 500 oil refiners and
              chemical companies. From 1996 onwards, for a span of 15 years,
              Carl served as the Director of Finance at BPU Investment
              Management, Inc., a comprehensive brokerage and investment
              advisory firm. He currently resides in Wexford, PA.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarlAAnthony;
