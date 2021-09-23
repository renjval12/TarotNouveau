import React from "react";
import { useContext } from "react";
import { TarotDataContext } from "./FiveCardsResults";
// import { imgs } from "../images"

export default function Card5() {
    const { tarotData, direction } = useContext(TarotDataContext)
    
    return (
        <>
            {tarotData.map((card, index) =>
                <div className="card-result" key={card.name_short}>
                    <h3>{card.name}</h3>
                    <h4>{direction[index] === 0 ? `Upright:  ${card.meaning_up}` : `Reversed: ${card.meaning_rev}`}</h4>
                    <p>{card.desc}</p>
                </div>
            )}
        </>
    )
}

