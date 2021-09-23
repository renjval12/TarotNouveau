import React from "react";
import { Link } from "react-router-dom";

export default function AskSection(props) {
    return (
        <section className="ask-option-section" id={props.id}>
            <div id={props.askDescId} data-aos={props.descAos}>
                <h2 className="ask-heading">{props.askHeading}</h2>
                <p className="ask-desc">{props.description}</p>
                <button class="blk-white-btn"><Link to={props.linkTo}> Go to Page</Link></button>
            </div>
            <img data-aos="fade-in" class="img1" src={props.src} alt=""/>
            <img data-aos="fade-in" class="img2"src={props.src2} alt=""/>
            <div id={props.askQuoteId} data-aos={props.quoteAos}>
                <blockquote>
                    {props.quote}
                </blockquote>
                <span className="quote-src">{props.quoteSrc}</span>
            </div>
        </section>
    )
}