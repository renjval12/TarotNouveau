import React, { useRef, useEffect, useState, createContext } from "react";
import Card3 from "./Card3";

//created a context variable to pass down the value of the tarotData state to the children of the ThreeCards() functional component
export const TarotDataContext = createContext()

export default function ThreeCards() {
    // this state determines what position the card is displayed in upright or reversed. If 0, the card will be upright, else/if 1, card will be reversed
    const [direction] = useState([Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)])
    const [tarotData, setTarotData] = useState([])
    const [question, setQuestion] = useState('')

    let questionRef = useRef()


    useEffect(() => {
        console.log('useEffect runs')
        //fetch call to Tarot-api, with random, and n parameters, to receive five random card names, positions, and descriptions, from the API
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3')
            .then(response => response.json())
            .then(result => {
                //set the tarotData state, to the result of the function call from the Tarot-api.
                setTarotData(result.cards)
            }
            )
    }, [])

    const handleChange = () => {
        setQuestion(questionRef.current.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <section className="three-card-reading">
            <form onSubmit={handleSubmit}>
                <label className="ask-cards-label" htmlFor="question-input">Question: </label>
                <input
                    onChange={handleChange}
                    ref={questionRef}
                    type="text"
                    name="question-input"
                    id="question"
                    placeholder="Enter Question"
                    required
                />
                <button>Get Reading</button>
            </form>
            <h1>Three Card reading</h1>
            <h2>{question}</h2>
            {/* set the value of TarotDataContext to the tarotData state, so I can use the values from tarotData, in the child components */}
            <TarotDataContext.Provider value={{ tarotData, direction, question }}>
                <Card3 />
            </TarotDataContext.Provider>

        </section>
    )
}

// {/* {tarotData.map((card) => 
//                 <div>
//                     <h1>{card.name}</h1>
//                     <h2>{direction === 0 ? card.meaning_up : card.meaning_rev}</h2>
//                     <p>{card.desc}</p>
//                 </div>
//             )}  */}