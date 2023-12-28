import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OurStrength() {
  const [isMousedOver, setIsMousedOver] = useState(false);
  const [isMousedOver2, setIsMousedOver2] = useState(false);
  const [isMousedOver3, setIsMousedOver3] = useState(false);
  const navigate = useNavigate();

  function handleMouseOver() {
    setIsMousedOver(true);
  }

  function handleMouseOut() {
    setIsMousedOver(false);
  }

  function handleMouseOver2() {
    setIsMousedOver2(true);
  }

  function handleMouseOut2() {
    setIsMousedOver2(false);
  }

  function handleMouseOver3() {
    setIsMousedOver3(true);
  }

  function handleMouseOut3() {
    setIsMousedOver3(false);
  }

  const financialStrength = () => {
    navigate("/financial-strength");
  };
  const regulation = () => {
    navigate("/regulation");
  };
  const supportTeam = () => {
    navigate("/support-team");
  };

  return (
    <>
      <div
        onClick={financialStrength}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ cursor: isMousedOver ? "pointer" : "" }}
        class="our-strength"
      >
        <div class="icon">
          <i class="fa-solid fa-chart-line"></i>
        </div>
        <div class="content">
          <h3 style={{ textDecoration: isMousedOver ? "underline" : "none" }}>
            Financial strength
          </h3>
          <p>
            Strong hold on our ability to generate revenue and gains for our
            investors. Discover more about EbubeFx Financial statement and
            reports
          </p>
          <Link to="/financial-strength">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div
        onClick={regulation}
        onMouseOver={handleMouseOver2}
        onMouseOut={handleMouseOut2}
        style={{ cursor: isMousedOver2 ? "pointer" : "" }}
        class="our-strength reverse"
      >
        <div class="icon">
          <i class="fa-solid fa-scale-balanced"></i>
        </div>
        <div class="content content-reverse">
          <h3 style={{ textDecoration: isMousedOver2 ? "underline" : "none" }}>
            Fully regulated
          </h3>
          <p>
            A unit investment trust (UIT) company with exclusive trading rights
            and combined freedom for individuals to invest on their own capital
          </p>
          <Link to="/regulation">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div
        onClick={supportTeam}
        onMouseOver={handleMouseOver3}
        onMouseOut={handleMouseOut3}
        style={{ cursor: isMousedOver3 ? "pointer" : "" }}
        class="our-strength"
      >
        <div class="icon">
          <i class="fa-regular fa-message"></i>
        </div>
        <div class="content">
          <h3 style={{ textDecoration: isMousedOver3 ? "underline" : "none" }}>
            Integrated Support
          </h3>
          <p>
            Functional support team ready to take on your challenges updating
            you on our trading plans and services
          </p>
          <Link to="/support-team">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default OurStrength;
