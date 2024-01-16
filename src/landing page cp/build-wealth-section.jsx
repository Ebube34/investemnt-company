import React from "react";
import BuildWealthBox from "./build-wealth-box";
import { buildWealth01, buildwealth06, buildWealth03, buildWealth04 } from "../assets";


function BuildWealth() {
    return (
        <>
            <section className="build-wealth">
                <h5>Build Wealth</h5>
                <BuildWealthBox 
                imgSrc={buildWealth01}
                paragraph="PERSONAL"
                heading="How do i start investing when i'm scared to lose money?"
                author="By Natalie Brolly"
                linkName="/articles/how-do-i-start-investing-when-iam-scared-to-lose-money"
                />
                <BuildWealthBox 
                imgSrc={buildWealth04}
                paragraph="INVESTING"
                heading="What is Hedging?"
                author="By David Jakeer"
                linkName="/articles/what-is-hedging"
                />
                <BuildWealthBox 
                imgSrc={buildwealth06}
                paragraph="BUDGTING"
                heading="What Does Financially Independent Mean?"
                author="By Stacy Howard"
                linkName="/articles/what-does-financially-independent-mean"
                />              
                <BuildWealthBox 
                imgSrc={buildWealth03}
                paragraph="BUDGTING"
                heading="The Power of compound interest calculator"
                author="By Diccon Myers"
                linkName="/articles/the-power-of-compound-interest-calculator"
                />
            </section>
        </>
    );
};

export default BuildWealth;