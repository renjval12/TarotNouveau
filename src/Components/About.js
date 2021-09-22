import React from "react";
import MysticDescription from "./AboutMystic";
import imgs from "../images"

export default function About() {
    return (
        <div id="about-page">
            <div id="about-intro">
                <h2>About Tarot Nouveau</h2>
            </div>
            <p id="about-intro-desc"></p>
            <section id="mystic-descriptions">
                <MysticDescription
                    id="tarot-description"
                    mysticType="Tarot"
                    mysticDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. " />
                <MysticDescription id="astrology-description"
                    mysticType="Astrology"
                    mysticDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. " />
                <MysticDescription
                    id="fortune-description"
                    mysticType="Fortune Telling"
                    mysticDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. " />
            </section>
        </div>
    )
}