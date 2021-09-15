import React from "react";
import CompanyList from "./CompanyLinkList";
import ServicesList from "./ServicesLinkList";
import SocialsList from "./SocialLinkList";
import SupportList from "./SupportLinkList";

export default function Footer() {
    return (
        <footer>
            <CompanyList />
            <ServicesList />
            <SupportList />
            <SocialsList />
            <i class="far fa-copyright"></i>2021 Tarot Nouveau, Inc.
        </footer>
    )
}