import React from "react";
import CompanyList from "./CompanyLinkList";
import Newsletter from "./Newsletter";
import ServicesList from "./ServicesLinkList";
import SupportSocialList from "./SupportSocialsLinkList";

export default function Footer() {
    return (
        <footer className="white-text">
            <CompanyList />
            <ServicesList />
            <SupportSocialList />
            <Newsletter />
            <span id="license " className="white-text"><i className="far fa-copyright"></i>  2021 Tarot Nouveau, Inc.</span>
        </footer>
    )
}