import React from "react";
import FiveCards from "./FiveCards";
import ThreeCards from "./ThreeCards";

export default function Cards() {
    return (
        <main>
            <section id="ask-the-cards-intro">
                {/* <div>
                    <h2>Three Card Reading</h2>
                    <a href="./ThreeCards.js">Start</a>
                </div>
                <div>
                    <h2>Five Card Reading</h2>
                    <a href="./FiveCards.js">Start</a>
                </div> */}
                <ThreeCards />
                {/* <FiveCards /> */}

            </section>

        </main>
    )

}