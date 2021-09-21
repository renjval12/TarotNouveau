import React from "react";
import { useContext } from "react";
import { TarotDataContext } from "./FiveCards";

export default function Card5() {
    const { tarotData, direction, question} = useContext(TarotDataContext)
    // console.log(tarotData)
    
    return (
        <>
            {tarotData.map((card) =>
                <div key={card.name_short}>
                    <h2>{question}</h2>
                    <h3>{card.name}</h3>
                    <h4>{direction === 0 ? "Upright: " + card.meaning_up : "Reversed: " + card.meaning_rev}</h4>
                    <p>{card.desc}</p>
                </div>

            )}
        </>
    )
}

