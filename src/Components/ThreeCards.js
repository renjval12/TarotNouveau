import { Link } from 'react-router-dom'
import React, { useState, useRef, createContext } from "react";


export default function ThreeCard() {
    const [question, setQuestion] = useState('')
    let questionRef = useRef()
    const handleChange = () => {
        setQuestion(questionRef.current.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(tarotData)
    }
    return (
        <main>
            <h2>Three Card Reading</h2>
            <form onSubmit={handleSubmit}>
                <label className="ask-cards-label" htmlFor="question-input">Question: </label>
                <input
                    onChange={handleChange}
                    ref={questionRef}
                    type="text"
                    name="question-input"
                    id="question"
                    placeholder="Enter Question"
                    required />

                <button><Link to="/three-card-results">Get Reading</Link></button>
            </form>
        </main>
    )

}