import React from "react";
import { Outlet, Link } from "react-router-dom";

 

function ResourcesMenuPages2() {
    return (
        <>
        <div class="pages-sub-menu-2">
            <ul>
                <li>
                    <Link to="/roadmap">Roadmap</Link></li>
                <li>
                    <Link to="/customers">Customers</Link></li>
                <li>
                    <Link to="/community">Community</Link></li>
                <li>
                    <Link to="/legal-docs">legal Docs</Link></li>
                </ul>
      </div>

        <Outlet />
      </>
    )
}

export default ResourcesMenuPages2;
