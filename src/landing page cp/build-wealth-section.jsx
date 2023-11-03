import React from "react";
import BuildWealthBox from "./build-wealth-box";
import { buildWealth01, buildWealth02, buildWealth03, buildWealth04 } from "../assets";


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
                linkName="/How-do-i-start-investing-when-i'm-scared-to-lose-money"
                />
                <BuildWealthBox 
                imgSrc={buildWealth04}
                paragraph="INVESTING"
                heading="What is Hedging?"
                author="By David Jakeer"
                linkName="/What-is-Hedging"
                />
                <BuildWealthBox 
                imgSrc={buildWealth02}
                paragraph="CRYPTOCURRENCY"
                heading="What is Crypto? and how does it work"
                author="By Stacy Howard"
                linkName="/What-is-Crypto-and-how-does-it-work"
                />              
                <BuildWealthBox 
                imgSrc={buildWealth03}
                paragraph="BUDGTING"
                heading="The Power of compound interest calculator"
                author="By Diccon Myers"
                linkName="/The-Power-of-compound-interest-calculator"
                />
            </section>
        </>
    );
};

export default BuildWealth;