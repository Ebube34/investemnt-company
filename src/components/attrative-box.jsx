import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";





function AttrativeBox(props){
    const [isMousedOver, setIsMousedOver] = useState(false);
    const navigate = useNavigate()
  


    function handleMouseOver() {
        setIsMousedOver(true);
    }

    function handleMouseOut() {
        setIsMousedOver(false);
    }

   const about = () => {
    navigate("/about");
   }

    return (
        <>
            <div onClick={about}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{cursor: isMousedOver ? "pointer" : ""}} class="col-12 col-lg-3 attrative-box">
                <p style={{textDecoration: isMousedOver ? "underline" : "none" }} class="attrative-text"> <Link to="/about"> {props.content} </Link> </p>
            </div>

            <Outlet />
        </>
    );
};

export default AttrativeBox;