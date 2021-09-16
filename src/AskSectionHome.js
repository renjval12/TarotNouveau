import React from "react";

export default function AskSection(props) {
    return (
        <section className="ask-option-section" id={props.id}>
            <div id={props.askDescId}>
                <h2>{props.askHeading}</h2>
                <p>{props.description}</p>
                <button class="blk-white-btn">Go to Page</button>
            </div>
            <div id={props.askQuoteId}>
                <blockquote>
                    {props.quote}
                </blockquote>
                <span className="quote-src">{props.quoteSrc}</span>
            </div>
        </section>
    )
}