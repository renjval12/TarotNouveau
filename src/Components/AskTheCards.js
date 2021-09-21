import React from "react";
import { Link, Route } from 'react-router-dom'
import FiveCards from "./FiveCards";
import ThreeCards from "./ThreeCards";

export default function Cards() {
    return (
        <main>
            <section id="ask-the-cards-intro">
                <div>
                    <h2>Three Card Reading</h2>
                    <Link to="/ThreeCards">Start</Link>
                </div>
                <div>
                    <h2>Five Card Reading</h2>
                    <Link to="/FiveCards">Start</Link>
                </div>

                {/* <Route path='/ThreeCards' component={ThreeCards} />
                <Route path='/FiveCards' component={FiveCards} /> */}


                {/* <ThreeCards /> */}
                {/* <FiveCards /> */}

            </section>

        </main>
    )

}