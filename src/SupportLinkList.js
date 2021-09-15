import React from "react";
import FooterLink from "./FooterLink";

export default function SupportList() {
    return (
        <div id="support-link-list" className="link-list">
            <h1>Support</h1>
            <ul>
                <FooterLink id="contact-footer-link" linkName="Contact Form" />
            </ul>
        </div>
    )
}