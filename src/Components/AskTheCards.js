import React from "react";
import { Link } from 'react-router-dom'


export default function Cards() {
    return (
        <main>
            <section id="ask-the-cards-intro">
                <div>
                    <h2>Three Card Reading</h2>
                    <Link to="/three-card-reading">Start</Link>
                </div>
                <div>
                    <h2>Five Card Reading</h2>
                    <Link to="/five-card-reading">Start</Link>
                </div>
            </section>

        </main>
    )

}