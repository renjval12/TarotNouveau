import React from "react";
import FooterLink from "./FooterLink";

export default function ServicesList() {
    return (
        <div id="services-link-list" className="link-list">
            <h1>Services</h1>
            <ul>
                <FooterLink href="/src/AskTheCards.js" linkName="Ask the Cards"/>
                <FooterLink  href="/src/AskTheStars.js" linkName="Ask the Stars"/>
                <FooterLink  href="/src/AskTheCrystalBall.js" linkName="Ask the Crystal Ball"/>
            </ul>
        </div>
    )
}