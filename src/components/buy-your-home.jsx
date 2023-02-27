import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function BuyYourHome() {
    
    const [isMousedOver, setIsMousedOver] = useState(false);
    const navigate = useNavigate();

    function handleMouseOver() {
        setIsMousedOver(true);
    }

    function handleMouseOut() {
        setIsMousedOver(false);
    }

    const buyingAHome = () => {
        navigate("/buying-a-home");
    }
    return(
        <>
        <section class="Buy-your-home">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={buyingAHome} style={{cursor: isMousedOver ? "pointer" : ""}} class=" col-12 col-lg-4 first-time-home-buyers">
                <h5 style={{textDecoration: isMousedOver ? "underline" : "" }}>How to Buy your First Home</h5>
                <p>Buying your first home is a huge commitment process, but it can be easier with proper preparation and planning use our already made plan to achiving your goals</p>
                <p></p>
            </div>
        </section>
        </>
    );
};

export default BuyYourHome;