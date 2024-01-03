import React, {useState, useEffect } from 'react';
import { Navbar, Footer } from '../../landing page cp';
import styles from '../../style';
import { josephKenneth, stefflerMargaret, BillRichard, CarlAnthony } from '../../assets';
import { Link } from 'react-router-dom';
import Loading from "../../components/LoaderCompoent";

const Team = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
}, [])

if (loading) {
  return <Loading />
}
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">

    
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div style={{  padding: "1rem" }} className={`${styles.boxWidth}`}>

          <h1
              className="flex-1 font-poppins font-semibold ss:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]"
              style={{  paddingTop: "12rem" }}
            >
              Our Team
            </h1>
            <p style={{ paddingBottom: "5rem"}} className={styles.paragraph}>The investment team at Newlin has the broad experience required to solve difficult problems and help build successful, sustainable businesses.</p>

            <div>
            <div style={{ borderTop: "1px solid #46454C", borderBottom: "1px solid #46454C", padding: "1rem 1rem 2rem"}}>
              <h1 style={{  paddingTop: "2rem"}} className={styles.heading5}> JOSEPH KENNETH </h1>
              <p style={{ color: "#1ACDC6", paddingBottom: "2rem", fontStyle: "italic"}}  className={styles.paragraph2}>Chairman of QuivasFinance Investment Company</p>

              <p className={styles.paragraph2}>Joseph Kenneth is Chairman of Newlin Investment Company, which he founded in 2007. <span style={{ color: "#1ACDC6", cursor: "pointer"}}> <Link to="/our-team/joseph-Kenneth">MORE {">"} </Link></span></p>

              <img alt='Joseph Kenneth' src={josephKenneth} style={{ paddingTop: "1rem"}} />
            </div>
            </div>
            
            <div>
            <div style={{ borderTop: "1px solid #46454C", borderBottom: "1px solid #46454C", padding: "1rem 1rem 2rem"}}>
              <h1 style={{  paddingTop: "2rem"}} className={styles.heading5}>STEFFLER N. MARGARET</h1>
              <p style={{ color: "#1ACDC6", paddingBottom: "2rem", fontStyle: "italic"}}  className={styles.paragraph2}>Partner</p>

              <p className={styles.paragraph2}>Steffler N. Margaret is a Partner at Newlin Investment Company and is responsible for certain portfolio companies. <span style={{ color: "#1ACDC6", cursor: "pointer"}}> <Link to="/our-team/steffler-margaret">MORE {">"} </Link></span></p>

              <img alt='Joseph Kenneth' src={stefflerMargaret} style={{ paddingTop: "1rem"}} />
            </div>
            </div>
            <div>
            <div style={{ borderTop: "1px solid #46454C", borderBottom: "1px solid #46454C", padding: "1rem 1rem 2rem"}}>
              <h1 style={{  paddingTop: "2rem"}} className={styles.heading5}>BILL W. RICHARD II</h1>
              <p style={{ color: "#1ACDC6", paddingBottom: "2rem", fontStyle: "italic"}}  className={styles.paragraph2}>Director</p>

              <p className={styles.paragraph2}>Bill William Richard is a Director of Newlin Investment Company. He provides assistance to Newlin Investment Company with respect to advice concerning operations of certain portfolio companies. <span style={{ color: "#1ACDC6", cursor: "pointer"}}> <Link to="/our-team/bill-richard">MORE {">"} </Link></span></p>

              <img alt='Joseph Kenneth' src={BillRichard} style={{ paddingTop: "1rem"}} />
            </div>
            </div>
            <div>
            <div style={{ borderTop: "1px solid #46454C", borderBottom: "1px solid #46454C", padding: "1rem 1rem 3rem", marginBottom: "2rem" }}>
              <h1 style={{  paddingTop: "2rem"}} className={styles.heading5}>CARL ANTHONY</h1>
              <p style={{ color: "#1ACDC6", paddingBottom: "2rem", fontStyle: "italic"}}  className={styles.paragraph2}>Controller</p>

              <p className={styles.paragraph2}>Carl A. Anthony is the Controller of Newlin Investment Company and is responsible for all traditional roles of a corporate controller. <span style={{ color: "#1ACDC6", cursor: "pointer"}}> <Link to="/our-team/carl-anthony">MORE {">"} </Link></span></p>

              <img alt='Joseph Kenneth' src={CarlAnthony} style={{ paddingTop: "1rem",}} />
            </div>
            </div>

        </div>
        </div>
        <Footer />
        </div>
    </>
    
  )
}

export default Team;