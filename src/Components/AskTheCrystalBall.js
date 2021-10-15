import React, { useState } from "react";
export default function CrystalBall() {
    const [isResultShowing, setIsResultShowing] = useState(false);

    //stores the question the user ask
    const [question, setQuestion] = useState('')
    const [userAnswer, setUserAnswer] = useState('')


    const handleChange = (event) => {
        setQuestion(event.target.value)
        console.log(question)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://crystalballapi.herokuapp.com/answer`)
            .then(response => response.json())
            .then(result => {
                setUserAnswer(result.answer)
                console.log(userAnswer)
            });
    }


    return (
        <main>
            <section id="ask-crystal-ball-intro" className="section white-text">
                <h1>Consult with the Crystal Ball to know what to do next</h1>
                <button>Start</button>
            </section>
            <section className="ask-crystal-bg">
                <form onSubmit={handleSubmit}>
                    <label htmlFor=""></label>
                    <textarea onChange={handleChange} id="question" rows="2" cols="50" required></textarea>
                    <button onClick={() => setIsResultShowing(!isResultShowing)}>Ask</button>
                </form>
                {isResultShowing && <div>
                    <h2>{question}</h2>
                    <p>{userAnswer}</p>
                </div>}
            </section>
        </main >
    )
}