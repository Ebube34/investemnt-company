import React from 'react';
import { Navbar, Footer } from '../../landing page cp';
import styles from '../../style';
import { realEstate } from '../../assets';



const RealEstate = () => {

  return (
    <>
         <div>
            <Navbar />

            <div style={{ padding: "15rem 1rem 5rem 1rem", textAlign: "center", background: "#202335"}}>
                <h1 className={styles.heading2}>Investment Products</h1>
            </div>

            <div style={{ padding: "6rem 1rem"}}>
                <h1 style={{ paddingBottom: "2rem"}} className={styles.heading4}>Real Estate</h1>

               <img alt='Cryptocurrency trading' src={realEstate} style={{ width: "100%"}} />

                <p style={{ padding: "3rem 0"}} className={styles.paragraph}>With a diverse range of development initiatives, QuivasFinance has the capability to generate substantial income from 84.22% of our privately and publicly owned real estate companies, as well as potential shareholding real estate entities across the globe. This advantageous position enables us to strategically distribute profits on a global scale, creating a mutually beneficial scenario for both sides. This win-win system is particularly favorable for our investors and shareholders worldwide, as we derive benefits from an average of 64.02% of each mineral resource, generating profits across commercial, residential, and industrial sectors on a global scale.</p>

                <p className={styles.paragraph}>Metavest presents investment opportunities in major cities, encompassing multi-family, office, retail, and hospitality properties. Investors can participate with as little as $100,000 in a project. As an investor, you will receive regular project updates and financial statements, ensuring transparency about the current status of your investments. Our company exclusively collaborates with seasoned developers with a proven track record of success. We focus on properties in locations exhibiting high growth potential, targeting major markets with strong fundamentals to mitigate potential risks. Additionally, our investments contribute to neighborhood improvements, ultimately enhancing the overall value of the properties. Investors can choose from various asset classes, including high-rise buildings in Manhattan or single-family homes in Phoenix.</p>

                <p style={{ padding: "3rem 0 0"}} className={styles.paragraph}>Our platform aims to bridge the gap between project sponsors and developers, facilitating seamless collaboration. Once an investment reaches 100% funding, the property typically closes within two to three weeks, allowing investors to begin accruing returns on their investment.</p>
            </div>

            <Footer />
        </div>
    </>
  )
}

export default RealEstate;