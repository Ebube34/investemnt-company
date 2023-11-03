import React, { useState } from "react";
import SubMenuPages1 from "./pages-sub-menu";
import { Outlet, Link } from "react-router-dom";
import { SubMenuPages2 } from "./pages-sub-menu";
import ResourcesMenuPages2 from "../landing page cp/resources-sub-menu";
import ButtonMain from "./button";
import { useNavigate } from "react-router-dom"; 

function Header() {
  const [pagesIsMousedOver, setPagesMouseOver] = useState(false);

  const [menuBarIsClicked, setMenuBar] = useState(false);
  const [pagesIsClicked, setPagesClick] = useState(false);
  const [resourcesIsClicked, setResourcesClick] = useState(false);
  const navigate = useNavigate();

  function handlePagesMouseOver() {
    setPagesMouseOver(true);
  }
  function handlePagesMouseOut() {
    setPagesMouseOver(false);
  }

  function navigateLogin() {
    navigate("/dashboard");
  }

  function handleMenuClick() {
    setMenuBar(true);
  }
  function handleCancelMenuClick() {
    setMenuBar(false);
  }

  function handlePagesClick() {
    if (pagesIsClicked === false) {
      setPagesClick(true);
    } else if (pagesIsClicked === true) {
      setPagesClick(false);
    }
  }
  function handleResourcesClick() {
    if (resourcesIsClicked === false) {
      setResourcesClick(true);
    } else if (resourcesIsClicked === true) {
      setResourcesClick(false);
    }
  }

  return (
    <>
      <section class="header max-width">
        <div class="header-logo">
          <h1>EbubeFx</h1>
        </div>

        <div class="nav-links">
          <nav class="navbar">
            <ul class="navbar-ul">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              <li onMouseOut={handlePagesMouseOut}>
                <Link to="/investment">INVESTMENT</Link>
              </li>
              <div class="has-sub-menu">
                <li onMouseOver={handlePagesMouseOver}>
                  <Link to="/">
                    {" "}
                    PAGES{" "}
                    <i
                      style={{ fontSize: "0.7em" }}
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </Link>
                  {pagesIsMousedOver ? (
                    <SubMenuPages1
                      onMouseOverProps={handlePagesMouseOver}
                      onMouseOutProps={handlePagesMouseOut}
                    />
                  ) : (
                    ""
                  )}
                </li>
              </div>
              <li onMouseOver={handlePagesMouseOut}>
                <Link to="/resourses" onMouseOver={handlePagesMouseOut}>
                  RESOURCES
                </Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>

        <ButtonMain classname="header-button" content="SIGN UP" />
      </section>

      <section class="main-section">
        <div class="header-2">
          <h1 class="header-logo">EbubeFx</h1>

          <div class="user">
            <i onClick={navigateLogin} class="fa-solid fa-user"></i>
          </div>
          <div class="toggle-bar">
            <i class="fa-solid fa-bars" onClick={handleMenuClick}></i>
          </div>
        </div>

        <div
          style={{ visibility: menuBarIsClicked ? "visible" : "hidden" }}
          class="toggle-menu-bar"
        >
          <div class="toggle-icon">
            <i class="fa-solid fa-xmark" onClick={handleCancelMenuClick}></i>
          </div>
          <ul class="toggle-menu-bar-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/investment">Investment</Link>
            </li>
            <li onClick={handlePagesClick}>
              <Link>
                Pages{" "}
                {pagesIsClicked ? (
                  <i
                    style={{ fontSize: "0.7em" }}
                    class="fa-solid fa-chevron-down"
                  ></i>
                ) : (
                  <i
                    style={{ fontSize: "0.7em" }}
                    class="fa-solid fa-chevron-right"
                  ></i>
                )}{" "}
              </Link>
              {pagesIsClicked ? <SubMenuPages2 /> : ""}
            </li>
            <li onClick={handleResourcesClick}>
              <Link>
                Resources{" "}
                {resourcesIsClicked ? (
                  <i
                    style={{ fontSize: "0.7em" }}
                    class="fa-solid fa-chevron-down"
                  ></i>
                ) : (
                  <i
                    style={{ fontSize: "0.7em" }}
                    class="fa-solid fa-chevron-right"
                  ></i>
                )}{" "}
              </Link>
              {resourcesIsClicked ? <ResourcesMenuPages2 /> : ""}
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>

      <Outlet />
    </>
  );
}

export default Header;
