import React from "react";


export default function SelectCardSection(props) {
    return (
        <div className="ask-cards-link">
            <h3 className="services-subheading">{props.sectionName}</h3>
            <img src="#" alt={props.sectionName} />
        </div>
    )
}