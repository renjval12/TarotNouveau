import React from "react";
import MysticDescription from "./AboutMystic";
// import imgs from "../images"

export default function About() {
    return (
        <div id="about-page">
            <div id="about-intro">
                <h2>About Tarot Nouveau</h2>
                <p id="about-intro-desc">Tarot Nouveau, is a React application, that is a multi-service web application that allows the user to indulge in the mystic practices. This application is meant to demystify the mystic practices, and make them accessible to all who may be interested</p>
            </div>

            <section id="mystic-descriptions">
                <img id="star-gif" src="https://media0.giphy.com/media/5k23pPtJkGYrDEXQrQ/giphy.gif?cid=790b7611aa4cdf3aa9b706dd0b03021b05dc0f4e4c486365&rid=giphy.gif&ct=s" alt="star-gif" data-aos="zoom-in" data-aos-duration="1000" />
                <MysticDescription
                    id="tarot-description"
                    mysticType="Tarot"
                    mysticDesc="The tarot is a pack of playing cards, used from at least the mid-15th century in various parts of Europe to play games such as Italian tarocchini, French tarot and Austrian Königrufen, many of which are still played today. "
                    url="https://www.biddytarot.com/" />
                <MysticDescription id="astrology-description"
                    mysticType="Astrology"
                    mysticDesc="Astrology is a pseudoscience that claims to divine information about human affairs and terrestrial events by studying the movements and relative positions of celestial objects. "
                    url="https://www.astrology-zodiac-signs.com/" />
                <MysticDescription
                    id="fortune-description"
                    mysticType="Fortune Telling"
                    mysticDesc="A crystal ball, also known as an orbuculum or crystal sphere, is a crystal or glass ball and common fortune-telling object. It is generally associated with the performance of clairvoyance and scrying in particular."
                    url="https://en.wikipedia.org/wiki/Fortune-telling"
                />
            </section>
        </div>
    )
}