import React from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { BillRichard } from "../../assets";

const BillWRichard = () => {
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
              BILL W. RICHARD II
            </h1>
            <p
              style={{
                color: "#1ACDC6",
                fontStyle: "italic",
              }}
              className={styles.paragraph2}
            >
              Director
            </p>
          </div>

          <div style={{ padding: "2rem 0" }}>
            <img alt="Joseph Kenneth" src={BillRichard} />

            <p style={{ padding: "2rem 0" }} className={styles.paragraph2}>
              Bill W. Richard II is a Director of QuivasFinance Investment
              Company. He provides assistance to QuivasFinance Investment
              Company with respect to advice concerning operations of certain
              portfolio companies. Bill owns and operates food and beverage
              stores in major American airports, with operations currently in
              the Baltimore-Washington, Boston, Cleveland, Dulles, Pittsburgh,
              Reagan National, John F. Kennedy International and Nashville
              airports.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BillWRichard;
