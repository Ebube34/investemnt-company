import React, { useState } from "react";

function ButtonMain(props) {

    const [buttonisMousedOver, setButtonMouseOver] = useState(false);


    
    function handleButtonMouseOver(){
        setButtonMouseOver(true);
    }

    function handleButtonMouseOut(){
        setButtonMouseOver(false);
    }

    return (
        <>
                  <button class={props.classname}  style={{backgroundColor: buttonisMousedOver ? "#024959": "#3CA6A6", border: buttonisMousedOver ? "1px solid #3CA6A6": "#012E40", transition: buttonisMousedOver ? "0.5s": "0.5"}} onMouseOver={handleButtonMouseOver} onMouseOut={handleButtonMouseOut} name="button">{props.content}</button>
        </>
    );
};

export default ButtonMain;