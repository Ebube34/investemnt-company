import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function InvestmentPlans(props){

    const navigate = useNavigate();
    const [isMousedOver, setIsMousedOver] = useState(false);



    function handleMouseOver() {
        setIsMousedOver(true);
    }

    function handleMouseOut() {
        setIsMousedOver(false);
    }

    const investment = () => {
        navigate("/investment");
    }
    return(
        <>
            <div  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={investment} style={{cursor: isMousedOver ? "pointer" : ""}} class="col-12 col-lg-5 service-box">
            <h5  style={{textDecoration: isMousedOver ? "underline" : "" }} >{props.heading}</h5>
            <p>{props.content}</p>
            </div>
        </>
    );
};

export default InvestmentPlans;
