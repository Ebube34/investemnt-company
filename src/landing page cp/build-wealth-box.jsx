import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function BuildWealthBox(props) {

    const [isMousedOver, setIsMousedOver] = useState(false);
    const [ setSendRequest] = useState("");
    const navigate = useNavigate();

    function handleMouseOver() {
        setIsMousedOver(true);
    }

    function handleMouseOut() {
        setIsMousedOver(false);
    }

   
    
  
  
    return(
        <>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  style={{cursor: isMousedOver ? "pointer" : ""}}   className="build-wealth-box">
                <img className="Build-wealth-img" src={props.imgSrc} alt="Build-wealth" /> 
                <div className="wealth-text-box">
                    <p>{props.paragraph}</p>
                    <h6  style={{textDecoration: isMousedOver ? "underline" : "" }} className="Wealth-text-heading">{props.heading}</h6>
                    <p>{props.author}</p>
                </div>
            </div>
        </>
    );
};

export default BuildWealthBox;