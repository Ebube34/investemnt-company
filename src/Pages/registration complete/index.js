import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const RegistrationSuccessful = () => {
  return (
    <>
      <div style={{ position: "absolute", top: "20%", textAlign: "center" }}>
        <h1
          style={{ paddingBottom: "2rem" }}
          className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
        >
          Almost there!
        </h1>

        <p style={{ padding: "2rem 4rem 1rem" }} className={styles.paragraph}>
          Verification message was sent to your email. Verify your account
        </p>

        <p
          style={{
            textDecoration: "underline",
            fontSize: "13px",
            color: "whitesmoke",
            paddingTop: "3rem",
          }}
        >
         <Link to="/">Home</Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationSuccessful;
