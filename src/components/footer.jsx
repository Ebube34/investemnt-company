import React from "react";
import ButtonMain from "./button";
import { Outlet, Link } from "react-router-dom";



function Footer(){

    const getYear = new Date().getFullYear();

    return (
        <>
            <footer>
    <div class="row footer-section">
      <div class="col-12 col-lg-3 footer-1">
        <h6 class="footer-heading">EbubeFX</h6>
        <ButtonMain classname="newsletter-btn" content="NEWSLETTER"/>
        <p>Follow us</p>
        <div class="footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
      </div>

      <div class="col-12 col-lg-8 footer-2">
        <div class="footer-2-list">
          <ul>
            <li><Link to="/investment">INVESTMENT</Link></li>
            <li><Link to="/news">NEWS</Link></li>
            <li><Link to="/cryptocurrency">CRYPTOCURRENCY</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/resourses">RESOURCES</Link></li>
            <li><Link to="/partnership">PARTNERSHIP</Link></li>
          </ul>
        </div>

        <div class="footer-2-list">
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/steps-to-having-a-paid-plan">steps to having a paid plan</Link></li>
            <li><Link to="/account-info">Account info</Link></li>
          </ul>
        </div>

        <div class="footer-2-list">
          <ul>
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
            <li><Link to="/address">Address</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/policy">Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>

<div class="copyright">
    <p>Copyright ©{getYear} Liquid Inc. All Rights Reserved.</p>
</div>

  </footer>

  <Outlet />
        </>
    );
};

export default Footer;