import React from "react";
import { useContext } from "react";
import { TarotDataContext } from "./FiveCards";

export default function Card3() {
    const tarotData = useContext(TarotDataContext)

    return (
        <>
        </>
    )
}

// {tarotData.map((card) =>
//     <div>
//         <h1>{card.name}</h1>
//         {/* <h2>{direction === 0 ? "Upright: " + card.meaning_up : "Reversed: " + card.meaning_rev}</h2> */}
//         <p>{card.desc}</p>
//     </div>

// )}