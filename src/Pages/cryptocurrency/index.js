import React from 'react';
import { Navbar, Footer } from '../../landing page cp';
import styles from '../../style';
import { cryptocurrencyTrading } from '../../assets';


const Cryptocurrency = () => {
   
  return (
    <>
        <div>
            <Navbar />

            <div style={{ padding: "15rem 1rem 5rem 1rem", textAlign: "center", background: "#202335"}}>
                <h1 className={styles.heading2}>Investment Products</h1>
            </div>

            <div style={{ padding: "6rem 1rem"}}>
                <h1 style={{ paddingBottom: "2rem"}} className={styles.heading4}>Cryptocurrencies</h1>

               <img alt='Cryptocurrency trading' src={cryptocurrencyTrading} style={{ width: "100%"}} />

                <p style={{ padding: "3rem 0"}} className={styles.paragraph}>Cryptocurrency Trading serves as the equivalent of Forex (Foreign Exchange) in the realm of cryptocurrencies. This entails the ability to exchange various bitcoins and altcoins typically for USD and BTC. Engaging in Cryptocurrency Trading offers an alternative avenue to immerse oneself in the Crypto-World. Unlike mining, it eliminates the need for specialized hardware or investment in bitcoin hyips or bitcoin cloud mining, both of which carry inherent risks to their integrity. At Merillprop, we extend to our clients the opportunity to capitalize on cryptocurrency price fluctuations. Our approach involves executing profitable trades by leveraging price differentials in the open market on various crypto exchanges at different points in time. With our cutting-edge equipment and advanced software, we provide one of the premier cryptocurrency trading services in the industry.</p>

                <p className={styles.heading4}>Why Opt for Cryptocurrency Investments?</p>

                <p style={{ padding: "3rem 0 0"}} className={styles.paragraph}>The remarkable surge in cryptocurrency value is causing a stir in the financial markets. The cryptocurrency market reached a valuation of $500 billion U.S. Dollars by the close of 2017, marking a staggering 360% increase from the start of that year. Cryptocurrencies are renowned for their swift price shifts, offering the potential for substantial returns on investment.</p>
            </div>

            <Footer />
        </div>
    </>
  )
}

export default Cryptocurrency