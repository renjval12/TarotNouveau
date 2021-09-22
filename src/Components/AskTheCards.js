import React from "react";
import { Link } from 'react-router-dom'
import imgs from '../images'

export default function Cards() {
    return (
        <main>
            <section id="ask-the-cards-intro" class="section">
                <h2>Find out what the cards have to say about it!</h2>
                <button>Start Here</button>
            </section>
            <section id="reading-choices" class="section" >
                <div>
                    <h2>Three Card Reading</h2>
                    <div class="card-reading-spread">
                        <img src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img src={imgs.tarotCard.default} alt="tarot card clip art" />
                    </div>
                    <Link to="/three-card-reading"><button>Start</button></Link>
                </div>
                <div>
                    <h2>Five Card Reading</h2>
                    <div id="five-card-spread" class="card-reading-spread">
                        <img id="card1" src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img id="card2" src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img id="card3" src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img id="card4" src={imgs.tarotCard.default} alt="tarot card clip art" />
                        <img id="card5" src={imgs.tarotCard.default} alt="tarot card clip art" />
                    </div>
                    <Link to="/five-card-reading"><button>Start</button></Link>
                </div>
            </section>

        </main>
    )

}