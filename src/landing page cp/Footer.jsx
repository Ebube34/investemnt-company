import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import { Link } from "react-router-dom";
const date = new Date()
const year = date.getFullYear() 

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full mt-10`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[216px] h-[92.14px] object-contain"
          
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to start investing. Easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]  border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white" style={{ opacity: "0.6" }}>
        Copyright Ⓒ {year} QuivasFinance.com  <span style={{ visibility: "hidden"}}>qu</span> Manchester, United Kingdom. <span style={{ visibility: "hidden"}}>qu</span> All Rights Reserved.
      </p>

      
    </div>
  </section>
);

export default Footer;
