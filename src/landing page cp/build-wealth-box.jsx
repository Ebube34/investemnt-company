import React, { useState } from "react";




function BuildWealthBox(props) {

    const [isMousedOver, setIsMousedOver] = useState(false);
    

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