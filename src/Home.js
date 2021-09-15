import React from "react";
import AskSection from "./AskSectionHome";
import SelectCardSection from "./ServiceSelectSection";

export default function Home() {
    return (
        <>
            <div></div>
            <section id="services-section" >
                <h2 class="home-section-heading">Services</h2>
                <section className="service-select-cards">
                    <SelectCardSection sectionName="Ask the Cards" />
                    <SelectCardSection sectionName="Ask the Stars" />
                    <SelectCardSection sectionName="Ask the Crystal Ball" />
                </section>
                <section className="ask-section">
                    <AskSection id="ask-cards-desc" askHeading="Ask the Cards" description="Get a 3 or 5 card tarot reading based on a question you have, with our tarot card generator." />
                    <AskSection id="ask-stars-desc" askHeading="Ask the Stars" description="Get general info about your sun sign, your lucky number, and a short horoscope for the day." />
                    <AskSection id="ask-crystal-ball-desc" askHeading="Ask the Crystal Ball" description="Ask a question, and the crystal ball generator will suggest a course of action." />
                </section>
            </section>
        </>
    )
}