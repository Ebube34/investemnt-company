import React from "react";
import { socialMedia } from "../constants";
const DashboardFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div
        className="bg-primary w-full overflow-hidden"
        style={{ paddingTop: "4rem" }}
      >
        <p
          className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white"
          style={{ opacity: "0.6", paddingLeft: "30px" }}
        >
          {year} Ⓒ QuivasFinance.com{" "}
          <span style={{ visibility: "hidden" }}>qu</span>
        </p>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            paddingTop: "0.5rem",
          }}
          className="flex flex-row md:mt-0 mt-6"
        >
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardFooter;
