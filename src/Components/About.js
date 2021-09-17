import React from "react";
import MysticDescription from "./AboutMystic";

export default function About() {
    return (
        <main>
            
            <section>
                <h2>About Tarot Nouveau</h2>
                <img src="../images/tarotcardback.png" alt="img"/>
                <p></p>
            </section>
            <section>
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
        </main>
    )
}