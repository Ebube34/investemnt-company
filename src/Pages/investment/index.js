import React from 'react';
import { Navbar, Footer } from '../../landing page cp';
import styles from '../../style';
import { InvestmentFeatured } from '../../assets';
const Invest = () => {
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div style={{ textAlign: "center", color: "#fff", }}>
          <h1 className={styles.paragraph} style={{ fontWeight: "300", paddingTop: "10rem" }}>Quivasfinance invest</h1>

          <h1 style={{ padding: "2rem 0" }} className={styles.heading2}>Investing on autopilot</h1>

          <p className={styles.paragraph}>A smart investing platform using a cutting-edge technology to build and rebalance your personalized portfolio</p>
          </div>

          <div style={{ paddingTop: "3rem", display: "flex", justifyContent: "center"}}>
            <img src={InvestmentFeatured} alt='Auto pillot' ></img>
          </div>

          <div className={`${styles.boxWidth}`}>
            <h1 className={styles.heading4} >How it works</h1>
          </div>
        <Footer />
        </div>
        
    </>
  )
}

export default Invest;