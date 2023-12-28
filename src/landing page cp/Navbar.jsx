import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { FiUser, FiChevronDown, FiChevronRight } from "react-icons/fi";
import logo from "../assets/logo.png";
import ResourcesMenuPages2 from "./resources-sub-menu";
import { Link, Outlet, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [resourcesIsClicked, setResourcesClick] = useState(false);
  const navigate = useNavigate();

  function handleResourcesClick() {
    if (resourcesIsClicked === false) {
      setResourcesClick(true);
    } else if (resourcesIsClicked === true) {
      setResourcesClick(false);
    }
  }

  return (
    
    <div className="gpt3__navbar" style={{ background: "#171622", position: "fixed", zIndex: "10", width: "100%"}}>
    
      <div className="gpt3__navbar-links">
        <div>
          <img src={logo} alt="Quivas" className="w-[134px] h-[50px]" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p> 
            <Link to="/investment">Invest</Link>
          </p>
          <p>
            <Link to="/contact-us">Contact</Link>
          </p>
          <p>
            <Link to="/about-us">About</Link>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p onClick={() => navigate("/login")}>Sign in</p>
        <button onClick={() => navigate("/register")} type="button">
          Sign up
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        <FiUser
          onClick={() => navigate("/login")}
          style={{ marginRight: "20px" }}
          color="#fff"
          size={30}
        />
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
          <div className="gpt3__navbar-menu_container scale-in-end">
            <div className="gpt3__navbar-menu_container-links"> 
              <p>
                <Link to="/">Home</Link>
              </p>
              <p className="new_styles">
                <p onClick={handleResourcesClick}>
                  <Link>Resources</Link>
                  {resourcesIsClicked ? <ResourcesMenuPages2 /> : ""}
                </p>
                <p onClick={handleResourcesClick}>
                  {resourcesIsClicked ? <FiChevronDown /> : <FiChevronRight />}
                </p>
              </p>
              <p>
                <Link to="/investment">Invest</Link>
              </p>
              <p>
                <Link to="/contact-us">Contact</Link>
              </p>
              <p>
                <Link to="/about-us">About</Link>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p onClick={() => navigate("/login")}>Sign in</p>
              <button onClick={() => navigate("/register")} type="button">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
