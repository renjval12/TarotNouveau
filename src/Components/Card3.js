import React from "react";
import { useContext } from "react";
import { TarotDataContext } from "./ThreeCards";

export default function Card3() {
    const { tarotData, direction, question} = useContext(TarotDataContext)
    // console.log(tarotData)
    
    return (
        <>
            {tarotData.map((card) =>
                <div key={card.name_short}>
                    <h1>{card.name}</h1>
                    <h2>{direction === 0 ? "Upright: " + card.meaning_up : "Reversed: " + card.meaning_rev}</h2>
                    <p>{card.desc}</p>
                </div>

            )}
        </>
    )
}

