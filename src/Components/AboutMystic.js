import React from "react";
import { Link } from "react-router-dom";

export default function MysticDescription(props) {
    return (
        <div id={props.id}>
            <h3>About {props.mysticType} </h3>
            <p> {props.mysticDesc} <a href={props.url}>Learn More.</a></p>
            <Link to={props.linkTo}><button>Go to Page</button></Link>
        </div>
    )

}