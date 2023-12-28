import React from 'react';
import { Navbar, Footer } from '../../landing page cp';
import styles from '../../style';

const Contact = () => {
  return (
    <>
         <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div style={{ padding: "1rem"}} className={`${styles.boxWidth}`}>
              <h1 className={styles.heading3} style={{ fontWeight: "300", paddingTop: "10rem" }}>Contact us</h1>
               <p className={`${styles.paragraph} max-w-[470px] mt-12`}> Our support team is always here for you and happy to assist you or answer any questions you might have.</p>
               <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Feel free to get in touch with us anytime at the contact info below. We will aim to answer your requests at the earliest possible.</p>

               <div style={{ paddingTop: "3rem"}}>
                <p className={styles.heading4}>Email</p>
                <p className={`${styles.paragraph} max-w-[470px]`}>support@quivasfinance.com</p>
                <p className={styles.heading4} style={{ marginTop: "2rem"}} >phone</p>
                <p className={`${styles.paragraph} max-w-[470px]`}>+44781329065</p>
               </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact;