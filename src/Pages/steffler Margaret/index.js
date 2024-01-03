import React from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { stefflerMargaret } from "../../assets";

const StefflerMargaret = () => {
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
              STEFFLER N. MARGARET
            </h1>
            <p
              style={{
                color: "#1ACDC6",
                fontStyle: "italic",
              }}
              className={styles.paragraph2}
            >
              Partner
            </p>
          </div>

          <div style={{ padding: "2rem 0" }}>
            <img alt="Joseph Kenneth" src={stefflerMargaret} />

            <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
              In 1987, she earned her B.S. in Computer Science from Duke
              University, followed by an M.B.A. in Finance and Marketing from
              the University of Rochester's Simon School of Business
              Administration in 1989. Over the subsequent decade, she occupied
              various roles within Mellon Bank's Capital Markets Department,
              achieving the position of Vice President by 1999 when she took a
              hiatus to focus on raising her son. Since then, her primary
              dedication has been to the nurturing and education of her son, who
              has special needs. From 2008 to 2012, she served on the Board of
              Trustees at The Watson Institute before becoming more actively
              involved in QuivasFinance Investment. Additionally, she contributed her
              efforts to the Steering Committee for iBike@QV, a bike camp
              catering to individuals with disabilities. Presently, she plays an
              active role in the Sewickley Presbyterian Church community.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StefflerMargaret;
