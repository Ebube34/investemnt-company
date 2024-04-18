import React from "react";
import { Outlet, Link } from "react-router-dom";

function ResourcesMenuPages2() {
  return (
    <>
      <div class="pages-sub-menu-2">
        <ul>
          <li className="hover:text-secondary">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-secondary">
            <Link to="/our-team">Our Team</Link>
          </li>
          <li className="hover:text-secondary">
            <Link to="/news">News</Link>
          </li>
          <li className="hover:text-secondary">
            <Link
              to="https://wa.me/447529652325" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default ResourcesMenuPages2;
