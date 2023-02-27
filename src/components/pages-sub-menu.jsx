import React from "react";
import { Outlet, Link } from "react-router-dom";



function SubMenuPages1(props){

    return (
      <>
        <div onMouseOver={props.onMouseOverProps} onMouseOut={props.onMouseOutProps} class="pages-sub-menu">
        <ul class="sub-menu-1">
          <li>
           <Link to="/about">ABOUT US</Link></li>
          <li>
            <Link to="/reviews">REVIEWS</Link></li>
          <li>
            <Link to="/FAQs">FAQS</Link></li>
          <li>
          <Link to="/our-team">OUR TEAM</Link></li>
          <li>
          <Link to="/terms-and-conditions">TERMS AND CONDITIONS</Link></li>
          <li>
          <Link to="/login">LOGIN</Link></li>
          <li >
          <Link to="/register">SIGN UP</Link></li>
        </ul>
      </div>
      
      <Outlet />
      </>
    )


} 


function SubMenuPages2() {
    return (
      <>
        <div class="pages-sub-menu-2">
        <ul>
          <li>
          <Link to="/about">about us</Link></li>
          <li>
          <Link to="/reviews">reviews</Link></li>
          <li>
          <Link to="/FAQs">FAQs</Link></li>
          <li>
          <Link to="/our-team">Our team</Link></li>
          <li>
          <Link to="/terms-and-conditions">Terms and conditions</Link></li>
          <li>
          <Link to="/login">Login</Link></li>
          <li>
          <Link to="/register">Sign up</Link></li>
        </ul>
      </div>

      <Outlet />
      </>
    )
}

export default SubMenuPages1;
export {SubMenuPages2};