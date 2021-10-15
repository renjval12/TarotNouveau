import React from "react";
import { useContext } from "react";
import { TarotDataContext } from "./ThreeCardsResults";

export default function Card3() {
    const { tarotData, direction } = useContext(TarotDataContext)
    return (
        <>
            {tarotData.map((card, index) =>
                <div key={card.name_short} className="result-card"  id={"result-card" + index}>
                    <h3>{card.name}</h3>
                    <p>{direction[index] === 0 ? `Upright:  ${card.meaning_up}` : `Reversed: ${card.meaning_rev}`}</p>
                    <p>{card.desc}</p>
                </div>
            )}
        </>
    )
}

