import React from "react";
import { Link } from "react-router-dom";


export default function SelectCardSection(props) {
    return (
        <div id={props.id} className="ask-link white-text" >
            <h3 className="services-subheading" data-aos="fade-down">{props.sectionName}</h3>
            <Link to={props.linkTo}><img src={props.imgSrc} alt={props.sectionName} data-aos="fade-up" /></Link>
        </div>
    )
}