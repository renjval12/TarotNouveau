import React from "react";

export default function MysticDescription(props) {
    return (
        <div id={props.id}>
            <h3>About {props.mysticType} </h3>
            <p> {props.mysticDesc} <a href={props.url}>Learn More.</a></p>
            <button>Go to Page</button>
        </div>
    )

}