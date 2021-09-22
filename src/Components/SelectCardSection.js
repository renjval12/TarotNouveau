import React from "react";


export default function SelectCardSection(props) {
    return (
        <div id={props.id} className="ask-link white-text">
            <h3 className="services-subheading">{props.sectionName}</h3>
            <img src={props.imgSrc} alt={props.sectionName} />
        </div>
    )
}