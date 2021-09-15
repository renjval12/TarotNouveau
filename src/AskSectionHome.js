import React from "react";

export default function AskSection(props) {
    return (
        <div>
            <h2>{props.askHeading}</h2>
            <p>{props.description}</p>
            <button>Go to Page</button>
        </div>
    )
}