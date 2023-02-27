import React from "react";
import Article from "./articles";
import Articles from "../Data/articles";
import OurStrength from "./our-strength";


function createArticle(eachArticle) {
    return( <Article 
            key={eachArticle.id}
            imgSrc={eachArticle.imgSrc}
            imgAlt={eachArticle.imgAlt}
            linkText={eachArticle.link}
            text={eachArticle.paragraph}
            linkName={eachArticle.linkName}
    />
    );
} 

function Firstbox() {
    return (
        <>
        <div class="row box">
        <div class="col-12 col-sm-12 col-lg-7 first-box">
            <OurStrength />
        </div>
        <div class="col-12 col-sm-12 col-lg-4 second-box">
            <h3>The Latest</h3>
            {Articles.map(createArticle)}
        </div>
        </div>
        </>
    );
};

export default Firstbox