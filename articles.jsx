import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Article(props) {

    const [isMousedOver, setIsMousedOver] = useState(false);
    const [setSendRequest] = useState("");
    const navigate = useNavigate();

    function handleMouseOver(){
        setIsMousedOver(true);
      }
    
      function handleMouseOut() {
        setIsMousedOver(false);
      }

      function handleRequest() {
        setSendRequest(navigate(props.linkName))
      }

    return (
        <>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}   onClick={handleRequest} style={{cursor: isMousedOver ? "pointer" : ""}} class="article-item">
                <img class="article-img" src={`images/${props.imgSrc}`} alt={props.imgAlt} />
                <div class="article-content">
                    <Link to={props.linkName} style={{textDecoration: isMousedOver ? "underline" : "none"}} >{props.linkText}</Link>
                        <p>{props.text}</p>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Article;