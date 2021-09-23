import React from "react";
import AskSection from "./AskSectionHome";
import SelectCardSection from "./SelectCardSection";
import imgs from "../images";

export default function Home() {
    return (
        <div>
            <div id="home-intro" className="section white-text" >
                {/* <h1>Tarot Nouveau</h1> */}
                <h1 data-aos="zoom-in">Take the Mysticism out of the Mystics!</h1>
            </div>
            <section id="services-section">
                <h2 className="home-section-heading" data-aos="fade-down">Services</h2>
                <section className="service-select-cards">
                    <SelectCardSection id="ask-cards-card" imgSrc={imgs.tarotTable.default} sectionName="Ask the Cards" linkTo="/ask-the-cards" />
                    <SelectCardSection id="ask-stars-card" imgSrc={imgs.starsCard.default} sectionName="Ask the Stars" linkTo="/ask-the-stars" />
                    <SelectCardSection id="ask-crystal-card" imgSrc={imgs.crystalBallCard.default} sectionName="Ask the Crystal Ball" linkTo="/ask-the-crystal" />
                </section>
            </section>
            <section id="ask-section">
                <AskSection
                    id="ask-cards"
                    askDescId="ask-cards-desc"
                    askHeading="Ask the Cards"
                    description="Get a 3 or 5 card tarot reading based on a question you have, with our tarot card generator."
                    askQuoteId="ask-cards-quote"
                    quote="“Because at the end of the day, it’s not about the tarot cards, or the crystals, or the special teas. That’s not where the magic lives. The magic is in the tiny moments. The small touches, the gentle smiles, the quiet laughs. "
                    quoteSrc="— Brittainy C. Cherry (The Air He Breathes)"
                    linkTo="/ask-the-cards" descAos="fade-right" quoteAos="fade-left" src={imgs.starHome1.default} src2={imgs.starHome2.default} />

                <AskSection
                    id="ask-stars"
                    askDescId="ask-stars-desc"
                    askHeading="Ask the Stars"
                    description="Get general info about your sun sign, your lucky number, and a short horoscope for the day."
                    askQuoteId="ask-stars-quote"
                    quote="“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.”
                    "
                    linkTo="/ask-the-stars" 
                    descAos="fade-left" quoteAos="fade-right"
                    quoteSrc="― Carl Sagan, Cosmos "

                />
                <AskSection
                    id="ask-crystal-ball"
                    askDescId="ask-crystal-ball-desc"
                    askHeading="Ask the Crystal Ball"
                    description="Ask a question, and the crystal ball generator will suggest a course of action."
                    askQuoteId="ask-crystal-ball-quote"
                    quote="“In the street, at a café, on the bus, a person’s face can tell a story, like a crystal ball that reveals the past. Happy or long-lost loves, births, hopes and victories, successes interwoven with twists of fate.”
                    "
                    quoteSrc="— Anne Berest (How To Be Parisian)"
                    linkTo="/ask-the-crystal-ball" 
                    descAos="fade-left" quoteAos="fade-right"
                />
            </section>
        </div>
    )
}