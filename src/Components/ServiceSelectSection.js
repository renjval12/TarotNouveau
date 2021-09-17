import React from "react";


export default function SelectCardSection(props) {
    return (
        <div className="ask-cards-link white-text">
            <h2 className="home-section-heading">Services</h2>
            <h3 className="services-subheading">{props.sectionName}</h3>
            <img src="#" alt={props.sectionName} />
        </div>
    )
}