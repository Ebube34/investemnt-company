import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const CongratulationsOnActiveContract = () => {
  return (
    <>
      <div style={{ position: "absolute", top: "20%", textAlign: "center" }}>
        <h1
          style={{ paddingBottom: "2rem" }}
          className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
        >
          Congratulations!
        </h1>

        <p style={{ padding: "2rem 4rem 1rem" }} className={styles.paragraph}>
          Your investment was purchaced successfully. View your acitve contracts
        </p>

        <p
          style={{
            textDecoration: "underline",
            fontSize: "13px",
            color: "whitesmoke",
            paddingTop: "3rem",
          }}
        >
          <Link to="/active-contracts">Active contracts</Link>
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "whitesmoke",
            paddingTop: "1rem",
          }}
        >
          Note: if contracts are not showing kindly refresh the page. Thank you
        </p>
      </div>
    </>
  );
};

export default CongratulationsOnActiveContract;
