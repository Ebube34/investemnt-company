import React from "react";
import BuildWealthBox from "./build-wealth-box";


function BuildWealth() {
    return (
        <>
            <section class="build-wealth">
                <h5>Build Wealth</h5>
                <BuildWealthBox 
                imgSrc="images/Build-wealth-1.webp"
                paragraph="PERSONAL"
                heading="How do i start investing when i'm scared to lose money?"
                author="By Natalie Brolly"
                linkName="/How-do-i-start-investing-when-i'm-scared-to-lose-money"
                />
                <BuildWealthBox 
                imgSrc="images/build-wealth-4.png"
                paragraph="INVESTING"
                heading="What is Hedging?"
                author="By David Jakeer"
                linkName="/What-is-Hedging"
                />
                <BuildWealthBox 
                imgSrc="images/build-wealth-2.jpg"
                paragraph="CRYPTOCURRENCY"
                heading="What is Crypto? and how does it work"
                author="By Stacy Howard"
                linkName="/What-is-Crypto-and-how-does-it-work"
                />              
                <BuildWealthBox 
                imgSrc="images/build-wealth-3.jpg"
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