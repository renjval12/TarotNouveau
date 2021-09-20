import React, { useEffect, useState, createContext } from "react";

import Card from "./Card";

export const TarotDataContext = createContext()

export default function FiveCardResults() {
    const [tarotData, setTarotData] = useState([])
    return (
        <>
            <h1>Five Card reading</h1>
            <TarotDataContext.Provider value={tarotData}>
                <Card />
            </TarotDataContext.Provider>
        </>)
}