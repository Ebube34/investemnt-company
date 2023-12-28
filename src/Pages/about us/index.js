import React from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";

const About = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
               
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
