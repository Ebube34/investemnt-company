import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ButtonMain(props) {

    const [buttonisMousedOver, setButtonMouseOver] = useState(false);
    const navigate = useNavigate();


    
    function handleButtonMouseOver(){
        setButtonMouseOver(true);
    }

    function handleButtonMouseOut(){
        setButtonMouseOver(false);
    }

    function navigateDashboard() {
        navigate("/dashboard");
    }

    return (
        <>
                  <button onClick={navigateDashboard} class={props.classname}  style={{backgroundColor: buttonisMousedOver ? "#024959": "#3CA6A6", border: buttonisMousedOver ? "1px solid #3CA6A6": "#012E40", transition: buttonisMousedOver ? "0.5s": "0.5"}} onMouseOver={handleButtonMouseOver} onMouseOut={handleButtonMouseOut} name="button">{props.content}</button>
        </>
    );
};

export default ButtonMain;