import React from "react";
import LinkList from "./FooterLinkList";

export default function Footer() {
    return (
        <footer>
            <LinkList linkName="Company" link={['About Us', 'Terms & Conditions', 'Privacy Policy']} />
            <LinkList linkName="Services" link={['Ask the Cards', 'Ask the Stars', 'Ask the Crystal Ball']} />
            <LinkList linkName="Support" link={['Contact']} />
            <LinkList linkName="Subscribe to Newsletter">
                <input type="email" placeholder="Email Address"></input>
                <button>Subscribe</button>
            </LinkList>
        </footer>
    )
}