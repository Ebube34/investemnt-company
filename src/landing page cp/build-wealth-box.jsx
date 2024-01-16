import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link, Outlet } from "react-router-dom";

function BuildWealthBox({ imgSrc, paragraph, heading, linkName, author }) {
  

  return (
    <>
      <Slide triggerOnce={true} duration={1500}>
        <div className="build-wealth-box">
          <img className="Build-wealth-img" src={imgSrc} alt="Build-wealth" />
          <div className="wealth-text-box">
            <p>{paragraph}</p>
            <h6 style={{ cursor: "pointer",}} className="Wealth-text-heading">
              <Link to={linkName}>{heading}</Link>
            </h6>
            <p>{author}</p>
          </div>
        </div>
      </Slide>
      <Outlet />
    </>
  );
}

export default BuildWealthBox;
