import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { FiUser, FiChevronDown, FiChevronRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import ResourcesMenuPages2 from "./resources-sub-menu";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [resourcesIsClicked, setResourcesClick] = useState(false);

  function handleResourcesClick() {
    if (resourcesIsClicked === false) {
      setResourcesClick(true);
    } else if (resourcesIsClicked === true) {
      setResourcesClick(false);
    }
  }

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div>
          <img src={logo} alt="hoobank" className="w-[134px] h-[50px]" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">Dashboard</a>
          </p>
          <p>
            <a href="#possibility">Investment</a>
          </p>
          <p>
            <a href="#features">Resources </a>
          </p>
          <p>
            <a href="#blog">About us</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        <FiUser style={{ marginRight: "20px" }} color="#fff" size={30} />
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">Dashboard</a>
              </p>
              <p>
                <a href="#possibility">Investment</a>
              </p>
              <p className="new_styles">
                <p onClick={handleResourcesClick}>
                  <a href="#features">Resources </a>
                  {resourcesIsClicked ? <ResourcesMenuPages2 /> : ""}
                </p>
                <p onClick={handleResourcesClick}>
                  {resourcesIsClicked ? <FiChevronDown /> : <FiChevronRight />}
                </p>
              </p>
              <p>
                <a href="#">Our Team</a>
              </p>
              <p>
                <a href="#blog">About us</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
