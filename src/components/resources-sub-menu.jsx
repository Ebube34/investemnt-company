import React from "react";
import { Outlet, Link } from "react-router-dom";

// function ResourcesMenuPages1(props){
//     return (
//         <div onMouseOut={props.onMouseOutProps} class="pages-sub-menu">
//             <ul class="sub-menu-1">
//                 <li>
//                     <a href="#">ROADMAP</a></li>
//                 <li>
//                     <a href="#">CUSTOMERS</a></li>
//                 <li>
//                     <a href="#">COMMUNITY</a></li>
//                 <li>
//                     <a href="#">LEGAL DOCS</a></li>
//             </ul>
//       </div>
//     )
// }

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
