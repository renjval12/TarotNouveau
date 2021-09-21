import React from "react";
import { Link } from 'react-router-dom'


export default function ThreeCard() {
    return (
        <main>
            <h2>Three Card Reading</h2>
            <button><Link to="/three-card-results">Start</Link></button>
        </main>
    )

}