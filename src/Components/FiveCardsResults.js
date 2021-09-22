import React, { useEffect, useState, createContext } from "react";
import Card5 from "./Card5";

//created a context variable to pass down the value of the tarotData state to the children of the FiveCards() functional component
export const TarotDataContext = createContext()

export default function FiveCardsResults({question}) {
    // this state determines what position the card is displayed in upright or reversed. If 0, the card will be upright, else/if 1, card will be reversed
    const [direction] = useState([Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)])
    const [tarotData, setTarotData] = useState([])

    useEffect(() => {
        console.log('useEffect runs')
        //fetch call to Tarot-api, with random, and n parameters, to receive five random card names, positions, and descriptions, from the API.
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=5')
            .then(response => response.json())
            .then(result => {
                //set the tarotData state, to the result of the function call from the Tarot-api.
                setTarotData(result.cards)
            }
            )
    }, [])

    return (
        <section className="five-card-reading">
            <h1>Five Card reading</h1>
            <h2>{question}</h2>
            {/* set the value of TarotDataContext to the tarotData state, so I can use the values from tarotData, in the child component Card5 */}
            <TarotDataContext.Provider value={{ tarotData, direction }}>
                <Card5 />
            </TarotDataContext.Provider>
        </section>
    )
}
