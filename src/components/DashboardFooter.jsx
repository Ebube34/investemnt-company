import React from "react";
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

      </div>
    </>
  );
};

export default DashboardFooter;
