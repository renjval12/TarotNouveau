import React from "react";
import FooterLink from "./FooterLink";

export default function CompanyList() {
    return (
        <div id="company-link-list" className="link-list">
            <h1>Company</h1>
            <ul>
                <FooterLink linkName="About Us"/>
                <FooterLink linkName="Terms & Conditions"/>
                <FooterLink linkName="Privacy Policy"/>
            </ul>
        </div>
    )
}