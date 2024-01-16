import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style";

const DepositPending = () => {
  return (
    <>
      <div style={{ position: "absolute", top: "20%", textAlign: "center" }}>
        <h1
          style={{ paddingBottom: "2rem" }}
          className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
        >
          Transaction Pending!
        </h1>

        <p style={{ padding: "2rem 4rem 1rem" }} className={styles.paragraph}>
          Your Deposit is currently under review. Contact our customer support
          immediately
        </p>

        <p
          style={{
            textDecoration: "underline",
            fontSize: "13px",
            color: "whitesmoke",
            paddingTop: "3rem",
          }}
        >
          <a
            href="https://wa.me/2348132669129"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </a>
        </p>

        <p style={{ padding: "3rem 2rem 1rem" }} className={styles.paragraph}>
          See transaction history
        </p>

        <p
          style={{
            textDecoration: "underline",
            fontSize: "13px",
            color: "whitesmoke",
            paddingTop: "2rem",
          }}
        >
          <Link to="/activity">Activity</Link>
        </p>
      </div>
    </>
  );
};

export default DepositPending;
