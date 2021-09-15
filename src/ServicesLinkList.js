import React from "react";
import FooterLink from "./FooterLink";

export default function ServicesList() {
    return (
        <div id="services-link-list" className="link-list">
            <h1>Services</h1>
            <ul>
                <FooterLink linkName="Ask the Cards"/>
                <FooterLink linkName="Ask the Stars"/>
                <FooterLink linkName="Ask the Crystal Ball"/>
            </ul>
        </div>
    )
}