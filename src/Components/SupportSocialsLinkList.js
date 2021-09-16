import React from "react";
import FooterLink from "./FooterLink";

export default function SupportList() {
    return (
        <div id="support-link-list" className="link-list">
            <h1>Support</h1>
            <ul id="support-footer-links">
                <span id="contact-footer-link">
                    <i className="far fa-user-circle"></i><FooterLink id="contact-footer-link" linkName="Contact Form" />
                </span>
            </ul>
            <h1>Socials</h1>
            <ul id="social-footer-links">
                <li><i className="fab fa-facebook"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-twitter"></i></li>
            </ul>
        </div>
    )
}