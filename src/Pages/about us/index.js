import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../../landing page cp";
import styles from "../../style";
import { Box, useMediaQuery } from "@mui/material";
import { efficiency, reliability, integrity, ourPromise } from "../../assets";
import Loading from "../../components/LoaderCompoent";

const About = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3400);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div
              style={{
                marginTop: "7rem",
                textAlign: "center",
                padding: "6rem 2rem 7rem",
                background: "#202335",
              }}
            >
              <h1
                style={{ paddingBottom: "2rem" }}
                className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
              >
                About Us
              </h1>

              <p className={styles.paragraph}>
                QuivasFinance, we pride ourselves on embracing innovation and
                maintaining a competitive edge. Our dedication revolves around
                delivering a modern approach to investment management, employing
                progressive and efficient methods. Quivas empowers you to invest
                your funds in globally diversified portfolios of low-cost index
                funds, mirroring the strategies of astute and successful
                investors. Our aim is to simplify the complexities and
                time-consuming aspects of wealth management, providing you with
                straightforward access through automated rebalancing, dividend
                reinvesting and a more effective investment strategy.
              </p>
            </div>

            <div style={{ padding: "7rem 1rem" }}>
              <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                We make your life more comfortable with our services
              </h1>

              <h1
                style={{ padding: "9rem 0 1rem" }}
                className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]"
              >
                {" "}
                Rewards
              </h1>
              <p className={styles.paragraph2}>
                Indulge in the enticing allure of our premier contracts, where a
                delectable blend of essential capital and lucrative profit
                awaits. <div style={{ margin: "1.5rem 0" }} /> These offerings are carefully crafted to provide not
                just financial stability, but also the potential for substantial
                earnings, creating a combination that truly whets the appetite
                of savvy investors. Our top-tier contracts are designed to
                deliver a feast for your portfolio, offering a perfect balance
                of capital preservation and wealth generation. <div style={{ margin: "1.5rem 0" }} /> With an emphasis
                on strategic investment and risk management. Furthermore, the
                allure lies not only in the immediate benefits but also in the
                long-term rewards. <div style={{ margin: "1.5rem 0" }} /> Our best contracts are structured to stand
                the test of time, ensuring that the flavors of capital growth
                and profit appreciation continue to intensify over the duration
                of your investment journey. <div style={{ margin: "1.5rem 0" }} /> In essence, these contracts go
                beyond the ordinary, offering a culinary delight of financial
                instruments that cater to both the seasoned investor and those
                with a discerning palate for wealth accumulation.
              </p>

              <h1
                style={{ padding: "5rem 0 1rem" }}
                className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]"
              >
                {" "}
                100% Secured
              </h1>

              <p className={styles.paragraph2}>
                Ensuring the utmost security and peace of mind is at the core of
                our commitment. <div style={{ margin: "1.5rem 0" }} /> We proactively implement rigorous measures to
                safeguard your information and transactions, employing
                cutting-edge technology and best practices in the ever-evolving
                landscape of cybersecurity. <div style={{ margin: "1.5rem 0" }} /> Our dedicated security protocols are
                designed to create a robust defense against potential threats.
                From advanced encryption techniques that shield your sensitive
                data during transmission to stringent authentication processes
                that verify your identity.
                <div style={{ margin: "1.5rem 0" }} /> Continuous monitoring and
                regular security audits are integral components of our proactive
                approach. By staying one step ahead of emerging threats and
                vulnerabilities, we strive to maintain a secure environment for
                your financial interactions.
                <div style={{ margin: "1.5rem 0" }} /> Our commitment to
                transparency means that we keep you informed about the security
                measures in place, empowering you with the knowledge that your
                financial well-being is our top priority. We understand that
                trust is earned, and we aim to cultivate it through a steadfast
                dedication to the highest standards of security and
                confidentiality. Ensuring that your experience with us is not
                only efficient but, above all, secure.
              </p>

              <h1
                style={{ padding: "5rem 0 1rem" }}
                className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]"
              >
                {" "}
                Integrated Support
              </h1>
              <p className={styles.paragraph2}>
                Our dynamic and responsive support team is not just here to
                assist; <div style={{ margin: "1.5rem 0" }} /> they are ready to tackle your challenges head-on.
                Committed to keeping you informed and empowered, our team goes
                beyond mere assistance by providing regular updates on our
                latest trading plans and services.<div style={{ margin: "1.5rem 0" }} />Whether you're navigating
                uncertainties in the market or seeking guidance on optimizing
                your trading strategy, our support team stands ready to be your
                reliable partner. Their functional expertise extends to keeping
                you abreast of the latest developments in our trading plans,
                ensuring that you have the information needed to make informed
                decisions.<div style={{ margin: "1.5rem 0" }} /> Our commitment to transparency is reflected in the
                proactive approach of our support team. They are not just
                responders; they are communicators, keeping you in the loop with
                insights, updates, and relevant information about our evolving
                services.
              </p>
            </div>

            {/* Core Values */}
            <div style={{ textAlign: "center", padding: "" }}>
              <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                Core Values
              </h1>

              <Box
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gap="30px"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
                  marginBottom: "4rem",
                  paddingTop: "2rem",
                }}
              >
                <div>
                  <img
                    alt="intergrity"
                    src={integrity}
                    style={{ marginLeft: "36%", padding: "2rem 0" }}
                  />
                  <p className={styles.paragraph}>Integrity</p>
                </div>
                <div>
                  <img
                    alt="Efficency"
                    src={efficiency}
                    style={{ marginLeft: "35%", padding: "2rem 0" }}
                  />
                  <p className={styles.paragraph}>Efficency</p>
                </div>
                <div>
                  <img
                    alt="reliability"
                    src={reliability}
                    style={{ marginLeft: "36%", padding: "2rem 0" }}
                  />
                  <p className={styles.paragraph}>Reliability</p>
                </div>
              </Box>
            </div>

            {/* Our Promise */}
            <div
              style={{
                background: "#272730",
                padding: "4rem",
                textAlign: "center",
              }}
            >
              <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                Our Promise
              </h1>

              <Box
                display="grid"
                gridTemplateColumns="repeat(6, 1fr)"
                gap="30px"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? "span 2" : "span 5" },
                  marginBottom: "4rem",
                  paddingTop: "4rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img alt="our promise" src={ourPromise} />
                  <p
                    style={{ paddingLeft: "1rem" }}
                    className={styles.paragraph}
                  >
                    Efficiency
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img alt="our promise" src={ourPromise} />
                  <p
                    style={{ paddingLeft: "1rem" }}
                    className={styles.paragraph}
                  >
                    Transparency
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img alt="our promise" src={ourPromise} />
                  <p
                    style={{ paddingLeft: "1rem" }}
                    className={styles.paragraph}
                  >
                    Expertise
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img alt="our promise" src={ourPromise} />
                  <p
                    style={{ paddingLeft: "1rem" }}
                    className={styles.paragraph}
                  >
                    Value Creation
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img alt="our promise" src={ourPromise} />
                  <p
                    style={{ paddingLeft: "1rem" }}
                    className={styles.paragraph}
                  >
                    Affordability
                  </p>
                </div>
              </Box>
            </div>

            {/* How it all Started */}
            <div style={{ padding: "10rem 0 4rem" }}>
              <h1 style={{ padding: "0rem 1rem 0rem" }} className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
                How it all Started
              </h1>

              <p
                style={{ padding: "2rem 1rem 0" }}
                className={styles.paragraph2}
              >
                Established in 2007, QuivasFinance investment company emerged
                with the mission of bridging the investment gap and enhancing
                the overall investment experience. <div style={{ margin: "1.5rem 0" }} /> Our primary objective is to
                offer affordable and reliable market accessibility to
                individuals worldwide, irrespective of their investment size.
                With a background of over a decade in the financial industry,
                the founder of Quivas recognized numerous unaddressed issues
                within the investment field. <div style={{ margin: "1.5rem 0" }} /> Notably, the investment market
                lacked inclusivity, as certain classes of investments were
                deemed prohibitive due to high associated costs such as
                management fees and trade commissions. <div style={{ margin: "1.5rem 0" }} />Moreover, the presence of
                biased advisors, prioritizing their interests over clients', was
                a prevalent concern. In response to these challenges,
                QuivasFinance was established to democratize the investment
                market. Our aim is to make high-quality, tailored services
                accessible to everyone, regardless of investment size, in a
                fully transparent manner.<div style={{ margin: "1.5rem 0" }} /> Notably, we address the cost factor by
                offering reduced fees, with our investment fee not exceeding
                0.75%, approximately a third less than the industry average of
                around 1.5%. Presently, QuivasFinance stands as a comprehensive
                online investment company catering to diverse investors,
                irrespective of financial status, geographic location, gender,
                or age group.<div style={{ margin: "1.5rem 0" }} /> We provide affordable and high-quality investment
                products and services, customized to suit the needs of each
                investor, and deliver them at a low cost with full transparency.
                Additionally, we operate as a fiduciary investment advisor,
                placing the client's interests first and eliminating potential
                conflicts of interest between broker and client.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
