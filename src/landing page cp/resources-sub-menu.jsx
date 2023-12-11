import React from "react";
import { Outlet, Link } from "react-router-dom";

function ResourcesMenuPages2() {
  return (
    <>
      <div class="pages-sub-menu-2">
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/our-community">Community</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/legal-documentation">legal Docs</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default ResourcesMenuPages2;
